import ExchangeRatesData from "../components/ExchangeRatesData";
import ScrollTopArrow from "../components/ScrollTopArrow";

import "../styles/App.css";

const Homepage = () => {
	return (
		<div className="app">
			<ExchangeRatesData />
			<ScrollTopArrow />
		</div>
	);
};

export default Homepage;
