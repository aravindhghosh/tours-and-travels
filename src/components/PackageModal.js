import React from 'react';
import { X, CheckCircle, Calendar, BadgeIndianRupee } from 'lucide-react';

const PackageModal = ({ pkg, onClose, onBook }) => {
  if (!pkg) return null;

  const handleBook = () => {
    if (onBook) onBook(pkg);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X /></button>
        
        <div className="modal-header">
          <div className="modal-icon">{pkg.icon}</div>
          <h2>{pkg.title}</h2>
          <div className="modal-meta">
            <span className="meta-item"><Calendar size={16} /> {pkg.duration}</span>
            <span className="meta-item price"><BadgeIndianRupee size={16} /> {pkg.price}</span>
          </div>
        </div>

        <div className="modal-body">
          <p className="modal-desc">{pkg.description}</p>
          
          <h3>Itinerary</h3>
          <ul className="itinerary-list">
            {pkg.details && pkg.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>

          <h3>Includes</h3>
          <div className="includes-tags">
            {pkg.includes && pkg.includes.map((item, index) => (
              <span key={index} className="tag"><CheckCircle size={14} /> {item}</span>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <a href="#contact" className="btn-primary" onClick={handleBook}>Book This Package</a>
        </div>
      </div>
    </div>
  );
};

export default PackageModal;