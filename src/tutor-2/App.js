import React from 'react';
import './tutor-2.css'

function App() {

    let email = ''
    let password = ''

    const onInputChange = (e) => {
       if (e.target.type === 'text') {
           email = e.target.value
       } else {
           password = e.target.value
       }
    }


    const formSubmit = (e) => {
        e.preventDefault()
        if (email && password) {
            e.target.reset()
            console.log({ email, password })

        } else {
            alert('Заполните форму')
        }
    }

    return (
        <form className="App" onSubmit={formSubmit}>
            <input type="text" placeholder='E-Mail' onChange={onInputChange}/>
            <input type="password" placeholder='Пароль' onChange={onInputChange}/>
            <button type='submit'>Войти</button>
        </form>
    )
        ;
}

export default App;
