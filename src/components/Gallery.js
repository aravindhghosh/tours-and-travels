import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_IMAGES } from '../data/travelData';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Load and shuffle images once on mount
  const [images] = useState(GALLERY_IMAGES);

  const openModal = (index) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = useCallback(() => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const nextImage = useCallback((e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  }, [images]);

  const prevImage = useCallback((e) => {
    e?.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, nextImage, prevImage, closeModal]);

  // Touch Swipe Support
  const minSwipeDistance = 50;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextImage();
    if (isRightSwipe) prevImage();
  };

  return (
    <section id="gallery" className="section-container">
      <h2 className="section-title">Our Gallery</h2>
      <p className="section-subtitle">Moments captured from our journeys.</p>
      <div className="gallery-collage">
        {images.slice(0, 5).map((img, index) => (
          <div key={index} className="card gallery-card" onClick={() => openModal(index)}>
            <img src={img} alt={`Gallery ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>

      {images.length > 5 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={() => openModal(5)}>
            View More
          </button>
        </div>
      )}

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && createPortal(
        <div className="gallery-modal" onClick={closeModal}>
          <button className="gallery-close-btn" onClick={closeModal} aria-label="Close">
            <X size={30} />
          </button>
          
          <button className="gallery-nav-btn gallery-prev" onClick={prevImage} aria-label="Previous">
            <ChevronLeft size={40} />
          </button>
          
          <div 
            className="gallery-modal-content" 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <img 
              src={images[selectedImageIndex]} 
              alt={`Gallery Fullscreen ${selectedImageIndex + 1}`} 
              className="gallery-modal-image" 
            />
          </div>

          <button className="gallery-nav-btn gallery-next" onClick={nextImage} aria-label="Next">
            <ChevronRight size={40} />
          </button>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;