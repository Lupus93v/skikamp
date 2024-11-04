import React from "react"
import {useState, useEffect} from "react"
import SponsorSlider from "../components/SponsorSlider";

export default function HomePage() {

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
          <img 
            src={images[currentImageIndex]} 
            alt="Slideshow of pictures on ski track."
            style={{width: "100%", height: "auto"}}
            />
      </div>
      <h3>Скијамо заједно од 2016. године!</h3>
      <SponsorSlider />
    </div>
  )
}