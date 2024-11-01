import React from "react"

const images = [
    
  ];

export default function Img2019() {

    return (
        <div className="gallery">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Img number ${index + 1} in the gallery`} />
          ))}

          <h3>Израда у току!</h3>
        </div>
    )
}