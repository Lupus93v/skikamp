import React from "react"
import PageLayout from "../src/components/PageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Offer from "./Pages/Offer"
import Gallery from "./Pages/Gallery"
import Sponsors from "./Pages/Sponsors"
import AboutUs from "./Pages/AboutUs"
import AboutVlasic from "./Pages/AboutVlasic"
import Coaches from "./Pages/Coaches"
import AboutClub from "./Pages/AboutClub"
import SkiKampVlasic from "./Pages/SkiKampVlasic"
import TeamBuilding from "./Pages/TeamBuilding"
import Apply from "./Pages/Apply"
import Img2024 from "./Pages/GalleryPgs/Img2024"
import Img2023 from "./Pages/GalleryPgs/Img2023"
import Img2022 from "./Pages/GalleryPgs/Img2022"
import Img2021 from "./Pages/GalleryPgs/Img2021"
import Img2020 from "./Pages/GalleryPgs/Img2020"
import Img2019 from "./Pages/GalleryPgs/Img2019"
import Img2018 from "./Pages/GalleryPgs/Img2018"
import Img2017 from "./Pages/GalleryPgs/Img2017"
import Img2016 from "./Pages/GalleryPgs/Img2016"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="offer" element={<Offer />} >
            <Route index element={<SkiKampVlasic />} />
            <Route path="teambuilding" element={<TeamBuilding />} />
          </Route>
          <Route path="gallery" element={<Gallery />}>
            <Route index element={<Img2024 />} />
            <Route path="img2023" element={<Img2023 />} />
            <Route path="img2022" element={<Img2022 />} />
            <Route path="img2021" element={<Img2021 />} />
            <Route path="img2020" element={<Img2020 />} />
            <Route path="img2019" element={<Img2019 />} />
            <Route path="img2018" element={<Img2018 />} />
            <Route path="img2017" element={<Img2017 />} />
            <Route path="img2016" element={<Img2016 />} />
          </Route>
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="aboutus" element={<AboutUs />}>
            <Route index element={<Coaches />} />
            <Route path="aboutclub" element={<AboutClub />} />
          </Route>
          <Route path="aboutvlasic" element={<AboutVlasic />} />
          <Route path="apply" element={<Apply />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
