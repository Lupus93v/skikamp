import React from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
import { useState } from "react"
import "./carousel.css"

export default function Carousel({ data, idx, onClose, initialIndex = 0 }) {

    const [slide, setslide] = useState(initialIndex);

    const nextSlide = () => {
        setslide(slide === data.length - 1 ? 0 : slide + 1)
    }

    const prevSlide = () => {
        setslide(slide === 0 ? data.length - 1 : slide - 1)
    }

    return (
        <div className="carousel-overlay">
            <button className="close-button" onClick={onClose}>X</button>
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
            {data.map((img, idx) => {
                return (<img src={img} key={idx} alt={`slide-${idx}`} className={slide === idx ? "slide" : "slide-hidden"} />)
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />
            <span className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button key={idx} onClick={() => setslide(idx)} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
                    )
                })}
            </span>
        </div>
    )
}