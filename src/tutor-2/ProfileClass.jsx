import {Component} from "react";
import React from 'react';
import './tutor-2.css'

class ProfileClass extends Component {

    getMonths() {
        return ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"]
    }

    render() {
        return (
            <div className='time'>
                <span>Привет, <b>{this.props.name.split(' ')[0]}!</b></span>
                <span>Дата регистрации: {this.props.registredAt.getDate()} {this.getMonths()[this.props.registredAt.getMonth()]} {this.props.registredAt.getFullYear()}</span>
            </div>
        )
    }
}

export default ProfileClass