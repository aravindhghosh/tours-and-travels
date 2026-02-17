import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/travelData';

const Testimonials = () => (
  <section className="section-container bg-light">
    <h2 className="section-title">Happy Customers</h2>
    <div className="grid-container">
      {TESTIMONIALS_DATA.map((item) => (
        <div key={item.id} className="testimonial-card">
          <div className="stars">
            {[...Array(item.rating)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" />)}
          </div>
          <p className="testimonial-text">"{item.text}"</p>
          <h4 className="customer-name">- {item.name}, <span className="location">{item.location}</span></h4>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;