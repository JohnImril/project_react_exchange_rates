import '../styles/App.css';
import ExchangeRatesData from './data';
import ScrollTopArrow from './ScrollTopArrow';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <div className="header">
                    <a className="logo" href="/">
                        Exchange Rates
                    </a>
                </div>
            </header>

            <ExchangeRatesData />

            <ScrollTopArrow />
        </div>
    );
}

export default App;
