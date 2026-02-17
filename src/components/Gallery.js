import React, { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Load and shuffle images once on mount
  const [images] = useState(() => {
    let loadedImages = [];
    try {
      const r = require.context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/);
      loadedImages = r.keys().map(item => { const img = r(item); return img.default || img; });
    } catch (e) {
      console.warn("Gallery images not found, using placeholders.");
      loadedImages = [
        "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1590053165868-2d8099525763?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1518182170546-0766ba6f6a56?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=600"
      ];
    }
    return loadedImages.sort(() => 0.5 - Math.random());
  });

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