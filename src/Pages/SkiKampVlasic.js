import React from "react"
import { NavLink } from "react-router-dom"

export default function SkiKampVlasic() {

    return (
        <div className="ski-kamp-container">
            <h2 style={{ marginTop: "0.5em", marginBottom: "1em" }}>Аранжман ски кампа на Влашићу обухвата сљедеће:</h2>
            <ol>
                <li>Превоз до смјештаја</li>
                <li>Смјештај на бази полупансиона (доручак и ручак/вечера)</li>
                <li>Опрему за скијање (панцерице, скије, штапове, кацигу и бриле)</li>
                <li>Тродневни ски пас за стазе Еко- Фис, Марковац и Бабановац</li>
                <li>Обуку полазника (почетна и напредна карвинг техника) са лиценцираним инструкторима скијања</li>
                <li>Фото и видео документација усвојеног скијашког знања</li>
                <li>Обилазак планине Влашић</li>
                <li>Још изненађења</li>
            </ol>
            <div className="button-container">
                <NavLink className="apply-btn" to="/applyform">Пријави се</NavLink>
            </div>
            <h3>Цијена аранжмана за 2026. годину је: <span>420,00 КМ</span></h3>
        </div>
    )
}