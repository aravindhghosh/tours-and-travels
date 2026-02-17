import React from 'react';
import { SERVICES_DATA } from '../data/travelData';

const Services = () => (
  <section id="services" className="section-container bg-light">
    <h2 className="section-title">Our Services</h2>
    <div className="grid-container">
      {SERVICES_DATA.map((service, index) => (
        <div key={index} className="service-card">
          <div className="service-icon">{service.icon}</div>
          <h3>{service.title}</h3>
          <p>{service.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;