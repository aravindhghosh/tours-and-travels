import React from 'react';
import { Users } from 'lucide-react';
import { FLEET_DATA } from '../data/travelData';

const Fleet = () => (
  <section id="fleet" className="section-container">
    <h2 className="section-title">Our Fleet</h2>
    <p className="section-subtitle">Clean, well-maintained vehicles for every group size.</p>
    <div className="grid-container">
      {FLEET_DATA.map((vehicle) => (
        <div key={vehicle.id} className="card">
          <div className="card-image" style={{backgroundImage: `url(${vehicle.image})`}}></div>
          <div className="card-content">
            <h3>{vehicle.name}</h3>
            <span className="badge">{vehicle.type}</span>
            <p className="capacity"><Users size={16} /> {vehicle.capacity}</p>
            <p>{vehicle.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Fleet;