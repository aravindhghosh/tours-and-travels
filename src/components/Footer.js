import React from 'react';
import { Facebook, Instagram } from 'lucide-react';
import { COMPANY_INFO, SOCIAL_LINKS } from '../data/travelData';

const Footer = () => (
  <footer className="footer">
    <div className="footer-socials">
      <a href={SOCIAL_LINKS.facebook} aria-label="Facebook"><Facebook size={20} /></a>
      <a href={SOCIAL_LINKS.instagram} aria-label="Instagram"><Instagram size={20} /></a>
    </div>
    <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. {COMPANY_INFO.copyrightText}</p>
  </footer>
);

export default Footer;