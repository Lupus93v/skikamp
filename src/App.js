import React from "react"
import PageLayout from "./PageLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
