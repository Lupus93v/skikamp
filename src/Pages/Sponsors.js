// src/Pages/Sponsors.js
import React from "react";

export const sponsorsData = [
  { link: "https://gradprnjavor.com/", imgSrc: "./Pictures/Sponsors/prnjavor.png" },
  { link: "https://www.facebook.com/anakievsk?locale=hr_HR", imgSrc: "./Pictures/Sponsors/krunaprodukt.jpeg" },
  { link: "http://www.trivas.ba/", imgSrc: "./Pictures/Sponsors/trivas.jpg" },
  { link: "https://www.tehno-plast.com/", imgSrc: "./Pictures/Sponsors/tehnoplast.png" },
  { link: "https://www.tehnoprint.org/", imgSrc: "./Pictures/Sponsors/tehnoprint.jpeg" },
  { link: "https://www.eko-fisvlasic.ba/", imgSrc: "./Pictures/Sponsors/ekofis.jpeg" },
];

export default function Sponsors() {
  return (
    <div className="sponsors">
      {sponsorsData.map((sponsor, index) => (
        <div key={index} className="sponsor">
          <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
            <img src={sponsor.imgSrc} alt="sponsor img" />
          </a>
        </div>
      ))}
    </div>
  );
}
