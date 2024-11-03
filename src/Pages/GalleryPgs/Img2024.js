import React, { useState } from "react"
import Carousel from "../../components/Carousel";
import "../../components/carousel.css";



const mediaItems = [
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/If4TIQ.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/scK64L.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/Sn3oP2.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/xAJiIK.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/r7YRje.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/If4TIQ.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/Te2uvN.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/L4j2iL.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/KhmIEI.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/VA5fte.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/atmsOJ.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/QabZPA.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/NqGV7T.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/OoK5nC.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/zRx7Qr.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/KWVQV2.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/3zfGo4.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/924/F3kThv.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/n8iqg3.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/tm595b.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/HV0cBk.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/EJY0ju.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/KK9O4u.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/5Dkbpi.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/922/6ehulM.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/bqntBa.jpg" },
  { type: "img", src: "https://imagizer.imageshack.com/v2/640x480q70/923/LAIAW1.jpg" },
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