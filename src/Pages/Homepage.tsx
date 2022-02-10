import React from "react";
import "../styles/App.css";
import ExchangeRatesData from "../components/ExchangeRatesData";
import ScrollTopArrow from "../components/ScrollTopArrow";

const Homepage = () => {
	return (
		<div className="app">
			<ExchangeRatesData />
			<ScrollTopArrow />
		</div>
	);
};

export { Homepage };
