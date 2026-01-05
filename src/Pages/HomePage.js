import React from "react"
import {useState} from "react"
import SponsorSlider from "../components/SponsorSlider";
import { NavLink } from "react-router-dom"

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  return (
    <div className="home-page-container">
      <div className="home-pic-container">
          <img className="mix-pic"
            src="Pictures/HomePagePic/img1.jpg"
            alt="Slideshow of pictures on ski track."
            style={{width: "100%", height: "auto"}}
            />
            <img
            src="/Pictures/HomePagePic/img1.jpg"
            alt="Static ski track imge"
            className="static-image"
          />
      </div>
      <h3>Инспиришемо нове генерације скијаша од 2016. године!</h3>
      <h3>Школа скијања за дјецу и одрасле.</h3>
      <h2>СЕЗОНА 2026 ЈЕ ОТВОРЕНА!</h2>
      <div style={{
        display: "flex",
      }}>
      <div style={{
          display: "flex",
          border: "solid black 1px",
          borderRadius: "7px",
          padding: "0.5em",
          marginBottom: "4em",
          width: "45%",
          }}>
        <img style={{width: "40%", float: "right"}}src="./Pictures/HomePagePic/gostovanje.jpg" alt="guest at tv show"/>
      <a
        className="animate__animated animate__zoomInDown"
        href="https://youtu.be/DYfoNMPSAZo?si=XdkXmuGsKQ5DN3wr"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontSize: isHovered ? "0.9rem" : "0.8rem",
          color: isHovered ? "red" : "black",
          transition: "all 0.5s ease-in"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Гостовање нашег тренера, Бојана Малбашића, на ТВ К3!
      </a>
      </div>
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "45%",
        height: "110px",
        position: "relative",
      }}>
        <button className="info-btn" onClick={() => setShowBubble(!showBubble)} id="home-apply-btn">ВИДИ ТЕРМИНЕ</button>
        {showBubble && (
        <div className="bubble">
          <p>
            3. јануар - 5. јануар<br />
            8. јануар - 10. јануар<br /> 
            11. јануар - 13. јануар<br />
            15. јануар - 17. јануар<br />
            23. јануар - 25. јануар<br />
            30. јануар - 1. фебруар<br />
            6. фебруар - 8. фебруар
          </p></div>
        )}
        <NavLink id="home-apply-btn" to="/applyform">ПРИЈАВИ СЕ</NavLink>
      
      </div>
      </div>
      <SponsorSlider />
    </div>
  );
}