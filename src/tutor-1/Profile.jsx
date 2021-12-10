import React from "react";
import './tutor-1.css'

function Profile(props) {

    const month =  ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
        "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]


    return (
        <div className='time'>
            <span>Привет, <b>{props.name.split(' ')[0]}!</b></span>
            <span>Дата регистрации: {props.registredAt.getDate()} {month[props.registredAt.getMonth()]} {props.registredAt.getFullYear()}</span>
        </div>
    )
}

export default Profile