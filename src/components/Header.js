import React from "react"
import DropdownMenu from "./DropdownMenu"
import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="header">
            <DropdownMenu className="menu-button" />

            <div className="logo-container">
                <Link to="/">
                    <img src="/Pictures/logo.jpg" alt="Ски Сњешко" />
                </Link>
            </div>

            <div className="left-space">
            <img className="insta-logo" src="./Pictures/insta-logo.png" href="https://www.instagram.com/klubljubiteljaskijanja_snjesko?igsh=MTBoMHpuZTU1aGlvdg==" target="_blanc" alt="logo of instagram"/>
            </div>
        </header>
    )
}
