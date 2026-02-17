import React, { useState } from 'react';
import { Clock, BadgeIndianRupee } from 'lucide-react';
import { PACKAGES_DATA } from '../data/travelData';
import PackageModal from './PackageModal';

const Packages = ({ onBookPackage }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="packages" className="section-container">
      <h2 className="section-title">Popular Travel Packages</h2>
      <p className="section-subtitle">Curated experiences for pilgrimage and leisure.</p>
      <div className="grid-container">
        {PACKAGES_DATA.map((pkg) => (
          <div key={pkg.id} className="service-card package-card" onClick={() => setSelectedPackage(pkg)}>
            <div className="service-icon">{pkg.icon}</div>
            <h3>{pkg.title}</h3>
            <div className="capacity" style={{justifyContent: 'center', margin: '0.5rem 0', color: 'var(--primary)', fontWeight: '500'}}>
               <Clock size={16} style={{marginRight: '5px'}}/> {pkg.duration}
            </div>
            <div className="price-tag">
               <BadgeIndianRupee size={16} /> {pkg.price}
            </div>
            <p>{pkg.description}</p>
            <button className="btn-text">View Details</button>
          </div>
        ))}
      </div>
      
      {selectedPackage && (
        <PackageModal pkg={selectedPackage} onClose={() => setSelectedPackage(null)} onBook={onBookPackage} />
      )}
    </section>
  );
};

export default Packages;