import React from "react";
import '../index.css'

function Profile(props) {

    const month =  ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]


    return (
        <div className='time'>
            <h1>Привет, {props.name}</h1>
            <span>Дата регистрации:{props.registredAt.getDate()} {month[props.registredAt.getMonth()]} {props.registredAt.getFullYear()}</span>
        </div>
    )
}

export default Profile