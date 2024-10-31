import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Gallery() {

    const activeStyles = {
        fontWeight: "bold",
    }

    return (
        <div className="gallery-container">
            <div className="gallery-buttons">
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="." end>Слике 2024. година</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}