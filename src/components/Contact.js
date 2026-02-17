import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Facebook, Instagram } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, FLEET_DATA, TRIP_TYPES, PACKAGES_DATA } from '../data/travelData';

const Contact = ({ selectedPackage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    people: '',
    vehicle: 'Select Vehicle',
    tripType: 'Trip Type',
    package: 'Select Package (Optional)'
  });

  useEffect(() => {
    if (selectedPackage) {
      const isHoneymoon = selectedPackage.title.includes("Honeymoon");
      setFormData(prev => ({
        ...prev,
        tripType: 'Package Tour',
        package: selectedPackage.title,
        people: isHoneymoon ? '2' : prev.people,
        vehicle: isHoneymoon ? 'Select Vehicle' : prev.vehicle
      }));
    }
  }, [selectedPackage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const newData = { ...prev, [name]: value };
      if (name === 'package' && value.includes("Honeymoon")) {
        newData.people = '2';
        newData.vehicle = 'Select Vehicle';
      }
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you shortly to confirm your booking.");
  };

  const filteredFleet = (formData.package && formData.package.includes("Honeymoon"))
    ? FLEET_DATA.filter(v => v.name === 'Swift' || v.name === 'Chevrolet Tavera')
    : FLEET_DATA;

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Book Your Ride</h2>
      <div className="contact-wrapper">
        <div className="contact-info">
          <h3>{CONTACT_INFO.title}</h3>
          <p>{CONTACT_INFO.subtitle}</p>
          <div className="info-item">
            <Phone className="icon-blue" /> <span>{CONTACT_INFO.phone}</span>
          </div>
          <div className="info-item">
            <Calendar className="icon-blue" /> <span>{CONTACT_INFO.availability}</span>
          </div>
          <div className="social-links">
            <p>Follow us on:</p>
            <a href={SOCIAL_LINKS.facebook} className="social-icon"><Facebook /></a>
            <a href={SOCIAL_LINKS.instagram} className="social-icon"><Instagram /></a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
          <input type="number" name="people" placeholder="No. of People" min="1" value={formData.people} onChange={handleChange} required />
          <select name="vehicle" value={formData.vehicle} onChange={handleChange}>
            <option>Select Vehicle</option>
            {filteredFleet.map(vehicle => (
              <option key={vehicle.id} value={vehicle.name}>{vehicle.name}</option>
            ))}
          </select>
          <select name="tripType" value={formData.tripType} onChange={handleChange}>
            <option>Trip Type</option>
            {TRIP_TYPES.map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>
          <select name="package" value={formData.package} onChange={handleChange}>
            <option>Select Package (Optional)</option>
            {PACKAGES_DATA.map(pkg => (
              <option key={pkg.id} value={pkg.title}>{pkg.title}</option>
            ))}
          </select>
          <button type="submit" className="btn-primary">Send Inquiry</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;