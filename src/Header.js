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
                    Почетна
                </NavLink>
                <NavLink className="navLink">
                    Понуда
                </NavLink>
                <NavLink className="navLink">
                    Галерија
                </NavLink>
                <NavLink className="navLink">
                    Пријатељи клуба
                </NavLink>
                <NavLink className="navLink">
                    О нама
                </NavLink>
                <NavLink className="navLink">
                    Тренери и контакт
                </NavLink>
            </nav>
        </header>
    )
        
}