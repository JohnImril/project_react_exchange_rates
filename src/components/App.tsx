
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

            <div className='scroll-up'>

            </div>
        </div>
    );
}


export default App;
