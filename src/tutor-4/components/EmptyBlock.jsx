import React from 'react';
import '../tutor-4.css'

function EmptyBlock() {


    return (
        <div className="block empty-block">
            <h2>Список фраз пустой</h2>
            <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
        </div>
    )
        ;
}

export default EmptyBlock;
