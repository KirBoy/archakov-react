import React from 'react';
import './tutor-5.css'

function App() {
    let [feedback, setFeedback] = React.useState([
        {
            fullName: "Антон",
            email: "anton@mail.ru",
            createdAt: "Thu Oct 14 2021 13:41:01",
            text: "На момент записи предыдущего урока, Material UI не обновлялся до 5-ой версии и в этом уроке я юзаю 4 версию."
        },
        {
            fullName: "Иван",
            email: "ivan@mail.ru",
            createdAt: "Thu Oct 14 2021 13:42:01",
            text: "Ты можешь также использовать в этом задании 4 или 5 версию, на твоё усмотрение."
        },
        {
            fullName: "Леша",
            email: "lesha@mail.ru",
            createdAt: "Thu Oct 14 2021 13:43:01",
            text: "В приложении необходимо сохранять список всех отзывов, которые оставляют через форму."
        }
    ])

    React.useEffect(() => {
        if (JSON.parse(localStorage.getItem("comments"))) {
            let feedbackStorage = JSON.parse(localStorage.getItem("comments"))
            setFeedback(
                [
                    ...feedbackStorage
                ]
            )
        } else {
            localStorage.setItem('comments', JSON.stringify([]))
        }

    }, [])

    const [inputValue, setInputValue] = React.useState({
        fullName: '',
        email: '',
        text: '',
    })

    const onInputChange = (e) => {
        if (e.target.name === 'name') {
            setInputValue({
                ...inputValue,
                fullName: e.target.value,
            })
        } else if (e.target.name === 'email') {
            setInputValue({
                ...inputValue,
                email: e.target.value,
            })
        } else {
            setInputValue({
                ...inputValue,
                text: e.target.value
            })
        }
    }

    const feedbackSubmit = (e) => {
        e.preventDefault()
        for (let item in inputValue) {
            if (inputValue[item].trim() === '') {
                alert('Заполни все поля')
                return
            }
        }

        setFeedback(
            [
                ...feedback, {...inputValue, createdAt: new Date().toString()}
            ]
        )

        setInputValue({
            fullName: '',
            email: '',
            text: '',
        })
    }

    React.useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(feedback))
    }, [feedback])

    const deleteFeedback = (e) => {
        feedback = feedback.filter(el => el["email"] !== e.target.name)
        setFeedback([...feedback])
    }

    return (
        <div className='container'>
            <div className="feedback">
                <div className="feedback__top">
                    <h2 className="feedback__title">Отзывы</h2>
                    <ul className="feedback__list">
                        {feedback.map(el => <Feedback name={el.fullName} feedback={el.text} key={el.email}
                                                      createdAt={el.createdAt.split(' ')} email={el.email}
                                                      deleteFeedback={deleteFeedback}/>)}
                    </ul>
                </div>
                <form className="feedback__bottom" onSubmit={feedbackSubmit}>
                    <h2 className="feedback__title">Обратная связь:</h2>
                    <input name='name' type="text" className="feedback__input" value={inputValue.fullName}
                           placeholder='Имя' onChange={onInputChange}/>
                    <input name='email' type="text" className="feedback__input" value={inputValue.email}
                           placeholder='Потча' onChange={onInputChange}/>
                    <textarea name='feedback' id="" cols="30" rows="10" className="feedback__text"
                              placeholder='Текс...' value={inputValue.text} onChange={onInputChange}>
                    </textarea>
                    <button className="feedback__btn" type='submit'>Отправить</button>
                </form>
            </div>
        </div>
    )
        ;
}

function Feedback({name, feedback, createdAt, email, deleteFeedback}) {
    let time = createdAt[2] + ' ' + createdAt[1] + ' ' + createdAt[3] + ' ' + createdAt[4]
    return (
        <li className="feedback__item">
            <h3 className="feedback__name">{name}</h3>
            <span className="feedback__time">{time}</span>
            <p className="feedback__feedback">{feedback}</p>
            <button className="feedback__btn" name={email} onClick={deleteFeedback}>Удалить</button>
        </li>
    )

}

export default App;
