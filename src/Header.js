import React from "react"
import {Link, NavLink} from "react-router-dom"
import logo from "./Pictures/logo.jpg"

export default function Header() {
    return (
        <header className="header">
            <div className="img-container">
            <Link to="/">
                    <img src={logo} alt="Ски Сњешко" style={{ width: '100px', height: 'auto' }} />
            </Link>
            </div>
            <nav className="nav">
                <NavLink className="navLink">
                    Понуда
                </NavLink>
                <NavLink className="navLink">
                    Фото и видео
                </NavLink>
                <NavLink className="navLink">
                    О нама
                </NavLink>
                <NavLink className="navLink">
                    Спонзори
                </NavLink>
                <NavLink className="navLink">
                    О Влашићу
                </NavLink>
            </nav>
        </header>
    )
        
}