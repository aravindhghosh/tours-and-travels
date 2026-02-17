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
      <div className="logo">{COMPANY_INFO.name}</div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#fleet" onClick={() => setIsOpen(false)}>Our Fleet</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#packages" onClick={() => setIsOpen(false)}>Packages</a>
        <a href="#tours" onClick={() => setIsOpen(false)}>Tours</a>
        <a href="#why-choose-us" onClick={() => setIsOpen(false)}>Why Us</a>
        <a href="#contact" onClick={() => setIsOpen(false)} className="btn-nav">Book Now</a>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
      <div className="menu-icon" onClick={toggleIsOpen}>
        {isOpen ? <X /> : <Menu />}
      </div>
    </nav>
  );
};

export default Navbar;