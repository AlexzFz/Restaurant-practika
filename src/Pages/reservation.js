import React from "react";

function Reservation() {
    return (
        <>
            <div className="form-wrapper container">
                <form action="">
                    <div className="form-item">
                        <label>ФИО</label>
                        <input type="name" placeholder="Полное имя"/>
                    </div>
                    <div className="form-item">
                        <label>Телефон</label>
                        <input type="phone" placeholder="+7 000 00 00"/>
                    </div>
                    <div className="form-item">
                        <label>Дата визита</label>
                        <input type="date"/>
                    </div>
                    <div className="form-item">
                        <label>Количество гостей</label>
                        <input type="text" placeholder="например 3"/>
                    </div>
                    <div className="form-item">
                        <button className="header-button">Забронировать</button>
                    </div>
                </form>
            <p>или обратитесь по номеру телефона <br/>+999-888-76-54</p>
            </div>
        </>
    );
}
export { Reservation }