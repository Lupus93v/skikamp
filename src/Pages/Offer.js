import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function Offer() {

    const activeStyles = {
        fontWeight: "bold",
    }

    return (
        <div className="offer-container">
            <div className="offer-btns">
                <NavLink className="offer-btn" style={({ isActive }) => isActive ? activeStyles : null} to="." end>Ски камп Влашић</NavLink>
                <NavLink className="offer-btn" style={({ isActive }) => isActive ? activeStyles : null} to="teambuilding">"Тим билдинг"</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}