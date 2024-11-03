import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Gallery() {
  const navigate = useNavigate();
  const [selectedYear, setSelectedYear] = useState("");

  const handleDropdownChange = (event) => {
    const year = event.target.value;
    setSelectedYear(year);
    navigate(`/gallery/${year}`);
  };

  return (
    <div className="gallery-container">
      <h2>Одаберите годину:</h2>
      <select
        value={selectedYear}
        onChange={handleDropdownChange}
        className="gallery-dropdown"
      >
        <option value=".">Изабери годину</option>
        <option value="img2024">2024</option>
        <option value="img2023">2023</option>
        <option value="img2022">2022</option>
        <option value="img2024">2021</option>
        <option value="img2024">2020</option>
        <option value="img2024">2019</option>
        <option value="img2024">2018</option>
        <option value="img2024">2017</option>
        <option value="img2024">2016</option>
      </select>
      <Outlet />
    </div>
  );
}




/*
export default function Gallery() {

    const activeStyles = {
        fontWeight: "bold",
    }

    return (
        <div className="gallery-container">
            <div className="about-us-btns">
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="." end>Слике 2024. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2023" end>Слике 2023. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2022" end>Слике 2022. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2021" end>Слике 2021. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2020" end>Слике 2020. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2019" end>Слике 2019. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2018" end>Слике 2018. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2017" end>Слике 2017. година</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="img2016" end>Слике 2016. година</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
} */