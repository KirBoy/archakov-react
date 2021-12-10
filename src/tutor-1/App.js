import Profile from "./Profile";
import React from 'react';
import ProfileClass from "./ProfileClass";
import './tutor-1.css'

function App() {
    return (
        <div className="App">
            <ProfileClass name='Вася Пупкин' registredAt={new Date(2021, 5, 22)}/>
            <Profile name='Вася Пупкин' registredAt={new Date(2021, 5, 22)}/>
        </div>
    );
}

export default App;
