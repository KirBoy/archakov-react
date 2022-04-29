import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={'NotFoundPage'}/>
            <Route path="/" element={<div>hello</div>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'));