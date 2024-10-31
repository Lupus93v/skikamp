import React from "react"

export default function Apply() {

    return (
        <div className="apply-container">
            <h2>Како се пријавити?</h2>
            <p>У зависности из којег града полазите, одаберите тренера и на његов број телефона (вибер, воцап, смс) пошаљите
                један од понуђених термина и податке о скијашу.</p>
            <div className="contacts">
                <div className="poster">
                    <img src="./Pictures/Coaches/deks.jpg" alt="Pic of choac." />
                    <h5>Дејан Благојевић</h5>
                    <h6>Нови Град</h6>
                    <h6>065/473-399</h6>
                </div>
                <div className="poster">
                    <img src="./Pictures/Coaches/malba.png" alt="Pic of choac." />
                    <h5>Бојан Малбашић</h5>
                    <h6>Прњавор</h6>
                    <h6>065/863-346</h6>
                </div>
                <div className="poster">
                    <img src="./Pictures/Coaches/aco.JPEG" alt="Pic of choac." />
                    <h5>Александар Сантрач</h5>
                    <h6>Приједор</h6>
                    <h6>065/782-650</h6>
                </div>
                <div className="poster">
                    <img src="./Pictures/Coaches/marijana.jpg" alt="Pic of choac." />
                    <h5>Маријана Граховац</h5>
                    <h6>Козарска Дубица</h6>
                    <h6>065/413-212</h6>
                </div>
                <div className="poster">
                    <img src="./Pictures/Coaches/nemanja.jpg" alt="Pic of choac." />
                    <h5>Немања Дмитрашиновић</h5>
                    <h6>Козарска Дубица</h6>
                    <h6>066/935-287</h6>
                </div>
            </div>
            <h3>Термини поласка:</h3>
            <div className="departures">
                <h6>3. јануар - 5. јануар</h6>
                <h6>8. јануар - 10.јануар</h6>
                <h6>11. јануар - 13. јануар</h6>
                <h6>14. јануар - 16. јануар</h6>
                <h6>17. јануар - 19. јануар</h6>
                <h6>24. јануар - 26. јануар</h6>
                <h6>31. јануар - 2. фебруар</h6>
            </div>
            <h3>Потребни подаци о скијашу:</h3>
            <ol>
                <li>Термин поласка</li>
                <li>Име и презиме</li>
                <li>Датум рођења</li>
                <li>Висина</li>
                <li>Тежина</li>
                <li>Број ципела</li>
                <li>Специфичност исхране</li>
                <li>Остале специфичности</li>
                <li>Број телефона родитеља</li>
                <li>Број телефона дјетета</li>
            </ol>
        </div>
    )
}