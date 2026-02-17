import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Fleet from './components/Fleet';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Packages from './components/Packages';
import PreviousTours from './components/PreviousTours';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [bookingPackage, setBookingPackage] = useState(null);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`App ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <Fleet />
      <Services />
      <Packages onBookPackage={setBookingPackage} />
      <PreviousTours />
      <Gallery />
      <VideoSection />
      <WhyChooseUs />
      <Testimonials />
      <Contact selectedPackage={bookingPackage} />
      <Footer />
    </div>
  );
}

export default App;
