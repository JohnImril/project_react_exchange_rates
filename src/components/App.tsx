import "../styles/App.css";
import ExchangeRatesData from "./data";
import ScrollTopArrow from "./ScrollTopArrow";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="app">
			<header className="app-header">
				<div className="header">
					<Link className="logo" to="/">
						Exchange Rates
					</Link>
				</div>
			</header>

			<ExchangeRatesData />

			<ScrollTopArrow />
		</div>
	);
}

export default App;
