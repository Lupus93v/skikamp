import React from "react";
import { sponsorsData } from "../Pages/Sponsors";

export default function SponsorSlider() {
  return (
    <div className="sponsor-slider">
      <div className="sponsor-slider-track">
        {sponsorsData.concat(sponsorsData).map((sponsor, index) => (
          <div key={index} className="sponsor-img-container">
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
              <img src={sponsor.imgSrc} alt="sponsor img" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
