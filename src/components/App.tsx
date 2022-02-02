
import '../styles/App.css';
import ExchangeRates from './data';
import ScrollTopArrow from './ScrollTopArrow'

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <div className='header'>
                    <a href="/">Home</a>
                </div>
            </header>

            <ExchangeRates />

            <ScrollTopArrow />
        </div>
    );
}


export default App;
