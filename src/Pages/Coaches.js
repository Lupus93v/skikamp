import React from "react"

export default function Coaches() {
    
    return (
        <div className="coaches-page">
            <h3 style={{marginBottom: "1em", textAlign: "center"}}>Гостовање нашег тренера, Бојана Малбашића, на ТВ К3.</h3>
        <div className="video">
        <iframe style={{padding: "0.5em", border: "solid black 1px", borderRadius: "6px"}}width="100%" height="auto" src="https://www.youtube.com/embed/DYfoNMPSAZo?si=tvBaxmQK4CVQ4xsy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div className="coaches-container">
            <div className="poster">
                <img src="./Pictures/Coaches/deks.jpg" alt="Pic of choac." />
                <h5>Дејан Благојевић</h5>
                <h6>Нови Град</h6>
                <p>065/473-399</p>
            </div>
            <div className="poster">
                <img src="./Pictures/Coaches/malba.png" alt="Pic of choac." />
                <h5>Бојан Малбашић</h5>
                <h6>Прњавор</h6>
                <p>065/863-346</p>
            </div>
            <div className="poster">
                <img src="./Pictures/Coaches/aco.JPEG" alt="Pic of choac." />
                <h5>Александар Сантрач</h5>
                <h6>Приједор</h6>
                <p>065/782-650</p>
            </div>
            <div className="poster">
                <img src="./Pictures/test.png" alt="Pic of choac." />
                <h5>Љубиша Дрљача</h5>
                <h6>Нови Град</h6>
                <p>065/993-710</p>
            </div>
            <div className="poster">
                <img src="./Pictures/Coaches/duri.jpg" alt="Pic of choac." />
                <h5>Дарко Дуроњић</h5>
                <h6>Прњавор</h6>
                <p>065/859-645</p>
            </div>
            <div className="poster">
                <img src="./Pictures/Coaches/.jpg" alt="Pic of choac." />
                <h5>Јована Пилиповић</h5>
                <h6>Нови Град</h6>
                <p>066/143-724</p>
            </div>
                <div className="poster">
                    <img src="./Pictures/Coaches/nemanja.jpg" alt="Pic of choac." />
                    <h5>Немања Дмитрашиновић</h5>
                    <h6>Козарска Дубица</h6>
                    <p>066/935-287</p>
                </div>
                <div className="poster">
                    <img src="./Pictures/Coaches/srdjan.png" alt="Pic of choac." />
                    <h5>Срђан Дејановић</h5>
                    <h6>Бања Лука</h6>
                    <p>065/543-707</p>
                </div>
            <div className="poster">
                <img src="./Pictures/Coaches/vuk.jpg" alt="Pic of choac." />
                <h5>Вук Благојевић</h5>
                <h6>Нови Град</h6>
            </div>
        </div>
        </div>
    )
}