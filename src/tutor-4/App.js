import React from 'react';
import EmptyBlock from "./components/EmptyBlock";
import Phrase from "./components/Phrase";
import './tutor-4.css'

function App() {
    let [phrase, setPhrase] = React.useState([])
    const adjectivesArr = [
        "абсолютный",
        "адский",
        "азартный",
        "активный",
        "ангельский",
        "астрономический",
        "баснословный",
        "безбожный",
        "безбрежный",
        "безвозвратный",
        "безграничный",
        "бездонный",
        "бездушный",
        "безжалостный",
        "замечательно",
        "замечательный",
        "записной",
        "запредельный",
        "заядлый",
        "звериный",
        "зверский",
        "зеленый",
        "злой",
        "злостный",
        "значительный",
        "неоспоримый",
        "неотразимый",
        "неоценимый",
        "непередаваемый"
    ];
    const nounsArr = [
        "лгун",
        "день",
        "конь",
        "олень",
        "человек",
        "программист",
        "ребёнок",
        "конец",
        "город",
        "дурак"
    ];

    const setNewPhrase = () => {
        let newPhrase = adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)] + ' ' + adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)] + ' ' + nounsArr[Math.floor(Math.random() * nounsArr.length)]
        setPhrase([newPhrase, ...phrase])
    }

    const clearState = () => {
        setPhrase([])
    }

    return (
        <div className="wrapper">
            {phrase.length ? <Phrase phrase={phrase}/> : <EmptyBlock/>}
            <button className="btn btn_generate" onClick={setNewPhrase}>Сгенерировать</button>
            <button className="btn btn_clear" onClick={clearState}>Очистить</button>
        </div>
    )
        ;
}

export default App;
