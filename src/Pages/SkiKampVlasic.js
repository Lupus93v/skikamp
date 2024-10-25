import React from "react"

export default function SkiKampVlasic() {

    return (
        <div className="ski-kamp-container">
            <h2 style={{ marginTop: "0.5em", marginBottom: "1em" }}>Аранжман ски кампа на Влашићу обухвата следеће:</h2>
            <ol>
                <li>Превоз до смјештаја</li>
                <li>Смјештај на бази полупансиона (доручак и ручак/вечера)</li>
                <li>Опрему за скијање (панцерице, скије, штапове, кацигу, бриле)</li>
                <li>Тродневни ски пас за стазе Еко- Фис, Марковац, Бабановац</li>
                <li>Обуку полазника (почетна и напредна карвинг техника) са лиценцираним инструкторима скијања</li>
                <li>Фото и видео документација усвојеног скијашког знања</li>
                <li>Обилазак планине Влашић</li>
            </ol>
            <div className="button-container">
                <button>Пријави се</button>
            </div>
        </div>
    )
}