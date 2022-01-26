
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import App from './components/App';

fetch(
    'http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb'
).then((res) => res.json())
    .then((data) => setRate(data));

function setRate({ success, terms, privacy, timestamp, source, quotes }) {
    document.body.insertAdjacentHTML(
        'afterbegin',
        `
        <h1>${success}</h1>
        <h2>${terms}</h2>
        <h3>${privacy}</h3>
        <h4>${timestamp}</h4>
        <h5>${source}</h5>
        <h6>${quotes}</h6>
        `
    );
}

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";

// ReactDOM.render(<App />, document.getElementById("root"))