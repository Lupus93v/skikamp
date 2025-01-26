import React from "react"
import { useState } from "react"
import {NavLink} from "react-router-dom"

export default function DropdownMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen)
    }

    const closeDropdown = () => {
        setIsOpen(false)
    }


    const styles = {
        button: {
            padding: "10px 20px",
            backgroundColor: "white",
            color: "black",
            border: "none",
            borderRadius: "1px",
            cursor: "pointer",
        },
        dropdown: {
            position: "absolute",
            top: "100%",
            left: "0",
            backgroundColor: "white",
            boxShadow: "0px 8px 16px rgba(0,0,0,0.1)",
            zIndex: "1",
            borderRadius: "1px",
            width: "150px",
        },
    }

    return (
        <div className="menu-button">
            <button onClick={toggleDropdown} style={styles.button}>Мени</button>
{
        isOpen && (
            <div style={styles.dropdown}>
                <NavLink className="dropdownItem" to="/" onClick={closeDropdown}>Почетна</NavLink>
                <NavLink className="dropdownItem" to="/offer" onClick={closeDropdown}>Понуда</NavLink>
                <NavLink className="dropdownItem" to="/gallery" onClick={closeDropdown}>Галерија</NavLink>
                <NavLink className="dropdownItem" to="/sponsors" onClick={closeDropdown}>Пријатељи клуба</NavLink>
                <NavLink className="dropdownItem" to="/aboutus" onClick={closeDropdown}>О нама</NavLink>
                <NavLink className="dropdownItem" to="/aboutvlasic" onClick={closeDropdown}>О Влашићу</NavLink>
                <NavLink className="dropdownItem" to="/applyform" onClick={closeDropdown}>Пријави се</NavLink>
            </div>
        )
    }
</div >
    )

}