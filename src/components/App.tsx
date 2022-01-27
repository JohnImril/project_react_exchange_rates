
import '../styles/App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Homepage } from '../Pages/Homepage';
// import { Ratepage } from '../Pages/Ratepage';
import ExchangeRates from './data';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='header'>
                    <a href="/">Home</a>
                    {/* <a href="/rates">Rates</a> */}
                </div>
            </header>

            <Routes>
                <Route path="/" element={<Homepage />} />
                {/* <Route path="/rates" element={<Ratepage />} />, */}

            </Routes>

            <ExchangeRates />
        </div>
    );
}


export default App;


// import { Component } from "react";

// import '../styles/App.css';

// class App extends Component {
//     a: string = "d";
//     render() {
//         return (
//             <div>
//                 <h1>My React App!!!{this.a}</h1>
//             </div>
//         );
//     }
// }

// export default App;