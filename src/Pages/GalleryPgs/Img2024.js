import React, {useState} from "react"
import Carousel from "../../components/Carousel";
import "../../components/carousel.css";



const images = [
  "https://imagizer.imageshack.com/v2/640x480q70/923/If4TIQ.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/scK64L.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/Sn3oP2.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/xAJiIK.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/r7YRje.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/If4TIQ.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/Te2uvN.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/L4j2iL.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/KhmIEI.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/VA5fte.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/atmsOJ.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/QabZPA.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/NqGV7T.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/OoK5nC.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/zRx7Qr.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/KWVQV2.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/3zfGo4.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/924/F3kThv.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/n8iqg3.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/tm595b.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/HV0cBk.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/EJY0ju.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/KK9O4u.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/5Dkbpi.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/922/6ehulM.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/bqntBa.jpg",
  "https://imagizer.imageshack.com/v2/640x480q70/923/LAIAW1.jpg",
]

export default function Img2024() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [initialIndex, setInitialIndex] = useState(0);

  const handleImageClick = (index) => {
    setInitialIndex(index);
    setIsOverlayOpen(true);
  };

  return (
    <div>
      <div className="gallery">
        {images.map((img, idx) => (
          <div className="gallery-img-container">
          <img
            key={idx}
            src={img}
            alt={`Img from mountain Vlasic-${idx}`}
            onClick={() => handleImageClick(idx)}
            className="thumbnail"
          />
          </div>
        ))}
      </div>

      {isOverlayOpen && (
        <div className="carousel-overlay">
          <button className="close-button" onClick={() => setIsOverlayOpen(false)}>
            &times;
          </button>
          <Carousel
            data={images}
            initialIndex={initialIndex}
            onClose={() => setIsOverlayOpen(false)}
          />
        </div>
      )}
    </div>
  );
}