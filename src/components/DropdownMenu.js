import React from "react"
import { useState } from "react"
import {NavLink} from "react-router-dom"

export default function DropdownMenu() {

    const [isOpen, setIsOpen] = useState(false)

    const toggleDropdown = (() => {
        setIsOpen(!isOpen)
    })


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
        <div style={{ position: "relative", display: "inline-block" }}>
            <button onClick={toggleDropdown} style={styles.button}>Мени</button>
{
        isOpen && (
            <div style={styles.dropdown}>
                <NavLink className="dropdownItem" to="/">Почетна</NavLink>
                <NavLink className="dropdownItem" to="/">Понуда</NavLink>
                <NavLink className="dropdownItem" to="/">Галерија</NavLink>
                <NavLink className="dropdownItem" to="/">Пријатељи клуба</NavLink>
                <NavLink className="dropdownItem" to="/">О нама</NavLink>
                <NavLink className="dropdownItem" to="/">О Влашићу</NavLink>
            </div>
        )
    }
</div >
    )

}