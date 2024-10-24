import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function AboutUs() {

const activeStyles = {
    fontWeight: "bold",
    fontSize: "1.5rem"
}

    return (
        <div className="about-us">
            <NavLink className="about-us-btns" style={({isActive}) => isActive ? activeStyles : null} to="." end>Тренери</NavLink>
            <NavLink className="about-us-btns" style={({isActive}) => isActive ? activeStyles : null} to="AboutClub">О Удружењу и школи</NavLink>
            <Outlet />
        </div>
    )
}