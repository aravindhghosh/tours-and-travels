import React from 'react';
import { MapPin } from 'lucide-react';
import { PREVIOUS_TOURS_DATA } from '../data/travelData';

const PreviousTours = () => (
  <section id="tours" className="section-container">
    <h2 className="section-title">Previous Tours</h2>
    <p className="section-subtitle">Glimpses of our recent spiritual journeys.</p>
    <div className="grid-container">
      {PREVIOUS_TOURS_DATA.map((tour) => (
        <div key={tour.id} className="card">
          <div className="card-image" style={{backgroundImage: `url(${tour.image})`}}></div>
          <div className="card-content">
            <h3>{tour.title}</h3>
            <p className="location" style={{marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#64748b'}}><MapPin size={16} /> {tour.location}</p>
            <p>{tour.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PreviousTours;