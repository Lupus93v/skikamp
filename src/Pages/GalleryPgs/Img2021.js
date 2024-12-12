import React, { useState } from "react"
import Carousel from "../../components/Carousel";
import "../../components/carousel.css";



const mediaItems = [
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
  { type: "img", src: ""},
]

export default function Img2024() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleMediaClick = (index) => {
    setInitialIndex(index);
    setIsOverlayOpen(true);
  };


  return (
    <div>
      <div className="gallery">
        {mediaItems.map((item, idx) => (
          <div key={idx} className="gallery-media-container">
            {item.type === "img" ? (
              <img
                src={item.src}
                alt={`Media item ${idx}`}
                onClick={() => handleMediaClick(idx)}
                className="thumbnail"
              />
            ) : (
              <video
                src={item.src}
                controls
                onClick={() => handleMediaClick(idx)}
                className="thumbnail"
              />
            )}
          </div>
        ))}
      </div>

      {isOverlayOpen && (
        <div className="carousel-overlay">
          <button className="close-button" onClick={() => setIsOverlayOpen(false)}>
            &times;
          </button>
          <Carousel
            data={mediaItems.map((item) => item.src)}
            initialIndex={initialIndex}
            onClose={() => setIsOverlayOpen(false)}
          />
        </div>
      )}
    </div>
  );
}