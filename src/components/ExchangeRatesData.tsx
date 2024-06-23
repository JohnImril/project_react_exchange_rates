import React, { useState, useEffect, useMemo } from "react";
import { Api } from "./Api";
import { Detail } from "./Detail";
import { List } from "./List";
import { Link } from "react-router-dom";

type TExchange = { name: string; count: number };

const ExchangeRatesData: React.FC = () => {
	const [exchangeRatesData, setExchangeRates] = useState<TExchange[]>([]);
	const [selectedItem, setSelectedItem] = useState<TExchange | null>(null);
	const [value, setValue] = useState("");

	const loadExchangeRates = async () => {
		try {
			const response = await Api.get();
			if (response.quotes) {
				const rates = Object.entries(response.quotes).map(([key, count]) => ({
					name: key.slice(3),
					count,
				}));
				setExchangeRates(rates);
			}
		} catch (error) {
			console.error("Failed to fetch exchange rates:", error);
		}
	};

	useEffect(() => {
		loadExchangeRates();
	}, []);

	const filteredRates = useMemo(
		() =>
			value
				? exchangeRatesData.filter((quote) => quote.name.toLowerCase().includes(value.toLowerCase()))
				: exchangeRatesData,
		[exchangeRatesData, value]
	);

	const clickHandler = (exchange: TExchange) => {
		setSelectedItem(exchange);
	};

	return (
		<div>
			<header className="header">
				<Link className="logo" to="/">
					Exchange Rates
				</Link>
				<div className="search">
					<input
						type="text"
						placeholder="Search here..."
						className="search__input"
						onChange={(event) => setValue(event.target.value)}
						required
					/>
					<button className="search__button" aria-label="search" role="button" type="submit"></button>
				</div>
			</header>
			<List filteredRates={filteredRates} clickHandler={clickHandler} />
			{selectedItem && <Detail name={selectedItem.name} count={selectedItem.count} />}
		</div>
	);
};

export default ExchangeRatesData;
