
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import App from './components/App';

var request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text';

request.onload = function () {
    poemDisplay.textContent = request.response;
};

request.send();

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