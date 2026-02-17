import React from 'react';

const VideoSection = () => {
  return (
    <section id="video" className="section-container bg-light">
      <h2 className="section-title">Watch Our Tours</h2>
      <p className="section-subtitle">Experience the journey before you book.</p>
      <div className="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoSection;