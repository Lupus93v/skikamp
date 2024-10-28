import React, { useState } from "react"
import Carousel from "../components/Carousel";
import "../components/carousel.css"


const slides = [
    "./Pictures/AboutVlasicPic/12.png",
    "./Pictures/AboutVlasicPic/9.jpg",
    "./Pictures/AboutVlasicPic/10.jpg",
    "./Pictures/AboutVlasicPic/11.png",
    "./Pictures/AboutVlasicPic/14.png",
    "./Pictures/AboutVlasicPic/8.png",
    "./Pictures/AboutVlasicPic/6.png",
    "./Pictures/AboutVlasicPic/3.jpg",
    "./Pictures/AboutVlasicPic/7.jpg",
    "./Pictures/AboutVlasicPic/2.jpg",
    "./Pictures/AboutVlasicPic/1.png",
    "./Pictures/AboutVlasicPic/13.png",
]

export default function AboutVlasic() {

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);
    const [initialIndex, setInitialIndex] = useState(0);

    const handleImageClick = (index) => {
    setInitialIndex(index);
    setIsOverlayOpen(true);
  };

    return (<div className="about-vlasic">
        {isOverlayOpen && (
          <Carousel
            data={slides}
            initialIndex={initialIndex}
            onClose={() => setIsOverlayOpen(false)}
          />
        )}
        <h4>О Влашићу</h4>
        <div className="about-vlasic-pic-txt">
          <div className="first-column">
            {slides.slice(0, 6).map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Img of mountain Vlasic-${idx}`}
                onClick={() => handleImageClick(idx)}
                className="thumbnail"
              />
            ))}
          </div>
          <div className="about-vlasic-txt">
            <p>
              Влашић је планински масив који доминира Средњом Босном, чији је највиши врх Паљеник на 1.943 метра надморске висине. Најпитомији и за туристе најинтересантнији дио Влашића је познат као Бабановац. Смјештен је на висини од 1.260 метара.
            </p>
            <br />
            <p>
              Бабановац је у ствари окосница туристичког развоја, па је још седамдесетих година на овом дијелу изграђена 90 метара висока скакаоница на којој су се одржавала међународна такмичења у скосковима "Покал Влашић".
            </p>
            <br />
            <p>
              Скијашки апетити на Влашићу углавном могу бити задовољени са шест ски лифтова и стазама у укупној дужини око 14 километара. Углавном су стазе на Влашићу погодне за рекреативце, док стаза Марковац задовољава услове напреднијег скијања. Почетницима су на располагању два бејби ски лифта и 500 метара уређене стазе.
            </p>
          </div>
          <div className="second-column">
            {slides.slice(6).map((img, idx) => (
              <img
                key={idx + 6}
                src={img}
                alt={`Img of mountain Vlasic-${idx + 6}`}
                onClick={() => handleImageClick(idx + 6)}
                className="thumbnail"
              />
            ))}
          </div>
        </div>
      </div>
    );
}