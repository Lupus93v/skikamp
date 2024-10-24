import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function AboutUs() {

    return (
        <div>
            <NavLink to="." end>Тренери</NavLink>
            <NavLink to="AboutClub">О Удружењу и школи</NavLink>
            <Outlet />
        </div>
    )
}