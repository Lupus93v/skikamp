import React from "react"
import {Link, NavLink} from "react-router-dom"
import logo from "./Pictures/logo.jpg"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Ски Сњешко" style={{ width: '100px', height: 'auto' }} />
            </Link>
            <nav className="nav">
                <NavLink>
                    Понуда
                </NavLink>
                <NavLink>
                    Фото и видео
                </NavLink>
                <NavLink>
                    О нама
                </NavLink>
                <NavLink>
                    Спонзори
                </NavLink>
                <NavLink>
                    О Влашићу
                </NavLink>
            </nav>
        </header>
    )
        
}