import React from "react"
import {useState, useEffect} from "react"
import SponsorSlider from "../components/SponsorSlider";

export default function HomePage() {
  const [isHovered, setIsHovered] = useState(false);

  const images = [
    "/Pictures/HomePagePic/img1.jpg",
    "/Pictures/HomePagePic/img2.jpg",
    "/Pictures/HomePagePic/img3.jpg",
    "/Pictures/HomePagePic/img4.jpg",
    "/Pictures/HomePagePic/img5.jpg",
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(intervalId)
  }, [images.length])

  return (
    <div className="home-page-container">
      <div className="home-pic-container">
          <img className="mix-pic"
            src={images[currentImageIndex]} 
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
      <div style={{
          display: "flex",
          border: "solid black 1px",
          borderRadius: "7px",
          padding: "0.5em",
          marginBottom: "1em",
          width: "40%"}}>
        <img style={{width: "40%"}}src="./Pictures/HomePagePic/gostovanje.jpg" alt="guest at tv show"/>
      <a
        class="animate__animated animate__zoomInDown"
        href="https://youtu.be/DYfoNMPSAZo?si=XdkXmuGsKQ5DN3wr"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
          fontSize: isHovered ? "1.6rem" : "1.5rem",
          color: isHovered ? "red" : "blue",
          transition: "all 0.5s ease-in"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Гостовање нашег тренера, Бојана Малбашића, на ТВ К3!
      </a>
      </div>
      <SponsorSlider />
    </div>
  )
}