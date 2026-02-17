import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useToggle } from '../hooks/useToggle';
import { COMPANY_INFO } from '../data/travelData';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, toggleIsOpen, setIsOpen] = useToggle(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <a 
        href="#home" 
        className="logo" 
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setIsOpen(false); }}
      >
        {COMPANY_INFO.name}
      </a>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#fleet" onClick={() => setIsOpen(false)}>Our Fleet</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#packages" onClick={() => setIsOpen(false)}>Packages</a>
        <a href="#tours" onClick={() => setIsOpen(false)}>Tours</a>
        <a href="#gallery" onClick={() => setIsOpen(false)}>Gallery</a>
        <a href="#video" onClick={() => setIsOpen(false)}>Video</a>
        <a href="#why-choose-us" onClick={() => setIsOpen(false)}>Why Us</a>
      </div>
      <div className="nav-actions">
        <a href="#contact" onClick={() => setIsOpen(false)} className="btn-nav">Book Now</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
        <div className="menu-icon" onClick={toggleIsOpen}>
          {isOpen ? <X /> : <Menu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;