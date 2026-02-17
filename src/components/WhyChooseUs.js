import React from 'react';
import { FEATURES_DATA, COMPANY_INFO } from '../data/travelData';

const WhyChooseUs = () => (
  <section id="why-choose-us" className="section-container">
    <h2 className="section-title">Why Choose {COMPANY_INFO.name}?</h2>
    <div className="grid-container">
      {FEATURES_DATA.map((feature) => (
        <div key={feature.id} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;