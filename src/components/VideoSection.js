import React from 'react';
import { VIDEO_SECTION_CONTENT } from '../data/travelData';

const VideoSection = () => {
  return (
    <section id="video" className="section-container bg-light">
      <h2 className="section-title">{VIDEO_SECTION_CONTENT.title}</h2>
      <p className="section-subtitle">{VIDEO_SECTION_CONTENT.subtitle}</p>
      <div className="video-wrapper">
        <iframe 
          src={VIDEO_SECTION_CONTENT.videoUrl}
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