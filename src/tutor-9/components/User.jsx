import React from "react";
import '../tutor-9.css'

function User({login, name, bio, location, repos, followers, avatar, following, site}) {

    return (
        <div class="app-user">
            <div class="app-user_info">
                <div>
                    <img className='app-user_img' src={avatar} alt=""/>
                </div>
                <div class="app-user_data">
                    <h1 class="app-user_name">
                        {name}
                        <span>{login}</span>
                    </h1>
                    <p class="app-user_about">
                        {bio}
                    </p>
                </div>
            </div>
            <ul class="app-user_stats">
                <li class="app-user_stats-item">
                    Репозитории
                    <span>{repos}</span>
                </li>
                <li class="app-user_stats-item">
                    Подписчиков
                    <span>{followers}</span>
                </li>
                <li class="app-user_stats-item">
                    Подписок
                    <span>{following}</span>
                </li>
            </ul>
            <ul class="app-user_location">
                <li class="app-user_location-item">{location}</li>
                <li class="app-user_location-item">
                    <a href={site}>{site}</a>
                </li>
            </ul>
        </div>

    )

}

export default User;