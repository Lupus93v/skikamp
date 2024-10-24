import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function AboutUs() {

    return (
        <div>
            <NavLink path="." end>Тренери</NavLink>
            <NavLink path="AboutClub">О Удружењу и школи</NavLink>
            <Outlet />
        </div>
    )
}