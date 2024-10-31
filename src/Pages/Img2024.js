import React from "react"

const images = [
    "https://lh3.googleusercontent.com/pw/AP1GczOjhhCRf3wVdqhfwCglsYZv5HC_c0IqUPCxDXbuj7J5iXBt4HHwXYLKqd4j_I6YqyJTZFlVZTqy7GpelVu7EkTvLATmD8CHOJZ-VWESSz9BipNXMWlXLHHVmhxRhyMSUzplxpAaeWQYt22FkPPVmXM=w455-h607-s-no-gm?authuser=4",
  ];

export default function Img2024() {

    return (
        <div className="gallery">
          {images.map((url, index) => (
            <img key={index} src={url} alt={`Img number ${index + 1} in the gallery`} />
          ))}

          <h3>Израда у току!</h3>
        </div>
    )
}