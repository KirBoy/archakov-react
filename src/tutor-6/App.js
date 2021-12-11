import React from 'react';
import './tutor-6.css'

function App() {
    let {pathname} = window.location;
    pathname = pathname.split('/')

    return (
        <div className='container'>
            <header className="header">
                <h1>Это Шапка</h1>
                <a href="/">Домой</a>
                {pathname.filter(el => el === 'post').length ? <Article id={pathname[2]}/> :
                    <div>Ты Дома <a href="/post/12">Перейти на пост</a></div>}
            </header>
        </div>
    )
        ;
}

function Article({id}) {

    return (
        <div>
            <h1>Статья №{id}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae distinctio fuga animi
                aliquam sit id veritatis, doloribus ducimus quas, dignissimos non minima quia amet possimus?
                Impedit nemo ducimus fuga rem!
            </p>
            <a href="/">
                <button>Назад</button>
            </a>
        </div>
    )

}

export default App;
