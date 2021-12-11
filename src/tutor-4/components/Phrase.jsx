import React from 'react';
import '../tutor-4.css'

function Phrase({phrase}) {

    return (
        <div className="list">
            {phrase.map(el => <div className="block" key={el}><h3>{el}</h3></div>)}
        </div>
    )
        ;
}

export default Phrase;
