import React from "react";
import "../styles/App.css";
import ExchangeRatesData from "../components/data";
import ScrollTopArrow from "../components/ScrollTopArrow";
import { Link } from "react-router-dom";

const Homepage = () => {
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
};

export { Homepage };
