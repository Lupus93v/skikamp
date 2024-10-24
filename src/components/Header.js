import React from "react"
import DropdownMenu from "./DropdownMenu"
import {Link} from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <div className="logo-container">
            <Link to="/">
                    <img src="/Pictures/logo.jpg" alt="Ски Сњешко" style={{ width: '100px', height: 'auto' }} />
            </Link>
            </div>
            <DropdownMenu />
        </header>
    )
        
}