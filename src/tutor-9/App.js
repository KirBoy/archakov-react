import React from "react";
import "./tutor-9.css";
import Form from "./components/Form";
import User from "./components/User";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate, useParams, useSearchParams} from 'react-router-dom'


function App() {
    const [isLoading, setIsLoading] = React.useState(false)
    const [user, setUser] = React.useState({})
    let url = new URL(window.location);

    React.useEffect(() => {
        let login = {nickname: url.searchParams.get('login')}
        if (!login.nickname) {
            return
        }
        onSubmit(login)
    }, [])

    async function onSubmit(user) {

        if (!user.nickname.trim()) {
            return
        }
        try {
            setIsLoading(true)
            const response = await axios.get('https://api.github.com/users/' + user.nickname.trim())
            if (response.status === 404) {
                throw Error();

            }
            url.searchParams.set('login', user.nickname);
            window.history.pushState(null, null, url.href)
            url = new URL(window.location);

            let users = await response.data;
            setUser(users)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
            alert('нету пользователей')
        }
    }

    return (

        <div id="app">
            <div className="app-container">
                <Form onSubmit={onSubmit} isLoading={isLoading}/>
                {user.id &&
                <User login={user.login} name={user.name} bio={user.bio} location={user.location}
                      repos={user.public_repos}
                      followers={user.followers} avatar={user.avatar_url} following={user.following} site={user.blog}/>}

            </div>
        </div>
    );
}

export default App;
