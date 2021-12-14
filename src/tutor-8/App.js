import React from "react";
import "./tutor-7.css";


function App() {
    const [users, setUsers] = React.useState([])

    async function getUsers(name) {
        try {
            let response = await fetch('https://61b87c6b64e4a10017d18fe5.mockapi.io/users')
            let users = await response.json();
            setUsers(users)
        } catch (e) {
            alert('нету пользователей')
        }
    }

    return (
        <>
            {users.map(el => <h2 key={el.id}>{el.name}</h2>)}
            <button onClick={getUsers}>Запросить пользователей</button>

        </>

    );
}

export default App;
