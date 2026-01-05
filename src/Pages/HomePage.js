import React from "react"
import {useState, useEffect} from "react"
import SponsorSlider from "../components/SponsorSlider";
import { NavLink } from "react-router-dom"

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

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
      <h3 class="animate_animated">Инспиришемо нове генерације скијаша од 2016. године!</h3>
      <h2 style={{
        color: "darkorange",
        fontSize: "1.3rem",
        marginTop: "10px",
        marginBottom: "20px"
      }}>СЕЗОНА 2026 ЈЕ ОТВОРЕНА!</h2>
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
        class="animate__animated animate__zoomInDown"
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
        marginTop: "-1px"
      }}>
        <button id="home-apply-btn">ВИДИ ТЕРМИНЕ</button>
        <NavLink id="home-apply-btn" to="/applyform">ПРИЈАВИ СЕ</NavLink>
      </div>
      </div>
      <SponsorSlider />
    </div>
  )
}