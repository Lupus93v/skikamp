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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path="offer" element={<Offer />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="aboutus" element={<AboutUs />}>
            <Route index element={<Coaches />} />
            <Route path="aboutclub" element={<AboutClub />} />
          </Route>
          <Route path="aboutvlasic" element={<AboutVlasic />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
