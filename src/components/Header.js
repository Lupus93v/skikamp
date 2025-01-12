import React from "react"
import DropdownMenu from "./DropdownMenu"
import { Link } from "react-router-dom"
import "animate.css";

export default function Header() {
    return (
        <header className="header">
            <DropdownMenu className="menu-button" />

            <div className="logo-container">
                <Link to="/">
                    <img class="animate__animated animate__fadeInRight" src="/Pictures/logo.jpg" alt="Ски Сњешко" />
                </Link>
            </div>

            <div className="left-space">
            <a
            href="https://www.instagram.com/klubljubiteljaskijanja_snjesko/?igsh=MTBoMHpuZTU1aGlvdg%3D%3D#"
            target="_blanc"
            rel="noopener noreferrer">
                <img style={{width: "3.5em", marginLeft: "-3.5em"}} class="animate__animated animate__backInUp"
                src="/Pictures/insta-logo.png" 
                alt="logo of instagram"/>
                </a>
            </div>
        </header>
    )
}
