import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function AboutUs() {

    const activeStyles = {
        fontWeight: "bold",
    }

    return (
        <div className="about-us-container">
            <div className="about-us-btns">
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="." end>Тренери</NavLink>
                <NavLink className="about-us-btn" style={({ isActive }) => isActive ? activeStyles : null} to="AboutClub">О клубу и школи</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}