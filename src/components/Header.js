import React from "react"
import DropdownMenu from "./DropdownMenu"
import { Link, NavLink } from "react-router-dom"
import "animate.css";

export default function Header() {
    return (
        <header className="header">

            <div className="logo-container">
                <Link to="/">
                    <img class="animate__animated animate__fadeInRight"
                        src="/Pictures/logo.jpg"
                        alt="Ски Сњешко" />
                </Link>
            </div>

            <nav className="nav-links">
                <NavLink className="navLink" to="/" end>
                    Почетна
                </NavLink>
                <NavLink className="navLink" to="/offer">
                    Понуда
                </NavLink>
                <NavLink className="navLink" to="/gallery">
                    Галерија
                </NavLink>
                <NavLink className="navLink" to="/sponsors">
                    Пријатељи клуба
                </NavLink>
                <NavLink className="navLink" to="/aboutus">
                    О нама
                </NavLink>
                <NavLink className="navLink" to="/aboutvlasic">
                    О Влашићу
                </NavLink>
                <NavLink className="navLink" to="/applyform">
                    Пријави се
                </NavLink>
            </nav>

            <DropdownMenu className="menu-button" />

            <div className="left-space">
                <a
                    href="https://www.instagram.com/klubljubiteljaskijanja_snjesko/?igsh=MTBoMHpuZTU1aGlvdg%3D%3D#"
                    target="_blanc"
                    rel="noopener noreferrer">
                    <img style={{ width: "4.1em", marginLeft: "-10em" }} class="animate__animated animate__backInUp"
                        src="/Pictures/insta-logo.png"
                        alt="logo of instagram" />
                </a>
            </div>
        </header>
    )
}
