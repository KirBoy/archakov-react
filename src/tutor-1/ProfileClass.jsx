import {Component} from "react";
import React from 'react';
import '../index.css'

class ProfileClass extends Component {

    getMonths() {
        return ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
            "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
    }

    render() {
        return (
            <div className='time'>
                <h1>Привет, {this.props.name}</h1>
                <span>Дата регистрации:{this.props.registredAt.getDate()} {this.getMonths()[this.props.registredAt.getMonth()]} {this.props.registredAt.getFullYear()}</span>
            </div>
        )
    }
}

export default ProfileClass