import React from 'react';
import { ChevronRight } from 'lucide-react';
import { HERO_CONTENT, COMPANY_INFO, HERO_BACKGROUNDS } from '../data/travelData';

const Hero = ({ theme }) => {
  // Helper to handle Webpack image imports which might be strings or objects
  const getImgUrl = (img) => {
    if (!img) return '';
    return typeof img === 'string' ? img : img.default;
  };

  return (
  <section id="home" className="hero" style={{ 
    backgroundImage: `url(${getImgUrl(theme === 'light' ? HERO_BACKGROUNDS.light : HERO_BACKGROUNDS.dark)})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}>
    <div className="hero-scene">
      {/* Road & 3D Vehicle */}
      <div className="road-stage">
        <div className="road-surface"></div>
        <div className="vehicle-container">
           <div className="van-3d">
              <div className="van-side left"></div>
              <div className="van-side right">
                  <div className="van-window"></div>
                  <div className="van-text">{COMPANY_INFO.shortName}</div>
              </div>
              <div className="van-top"></div>
              <div className="van-front">
                  <div className="windshield"></div>
                  <div className="headlights"></div>
              </div>
              <div className="van-back"></div>
              <div className="wheels">
                  <div className="wheel w-front"></div>
                  <div className="wheel w-back"></div>
              </div>
           </div>
        </div>
      </div>
    </div>
    <div className="hero-content">
      <h1>{HERO_CONTENT.title}</h1>
      <p>{HERO_CONTENT.subtitle}</p>
      <a href="#contact" className="btn-primary">{HERO_CONTENT.ctaText} <ChevronRight size={20} /></a>
    </div>
  </section>
  );
};

export default Hero;