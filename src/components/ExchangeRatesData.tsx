import React, { useState, useEffect } from "react";
import { Api } from "./Api";
import { Detail } from "./Detail";
import { List } from "./List";
import { Link } from "react-router-dom";

type TExchange = { name: string; count: number };

const ExchangeRatesData: React.FC = () => {
	const [exchangeRatesData, setExchangeRates] = useState<TExchange[]>([]);
	const [selectedItem, setSelectedItem] = useState<TExchange>();

	const loadExchangeRates = () => {
		Api.get().then((response) => {
			if (response.quotes) {
				console.log(Object.entries(response.quotes));

				setExchangeRates(
					Object.entries(response.quotes).map((elem) => ({
						name: elem[0].slice(3),
						count: elem[1],
					}))
				);
			}
		});
	};
	useEffect(() => {
		loadExchangeRates();
	}, []);

	const [value, setValue] = useState("");

	const filteredRates = React.useMemo(
		() =>
			value
				? exchangeRatesData.filter((quotes) => quotes.name.toLowerCase().includes(value.toLowerCase()))
				: exchangeRatesData,
		[exchangeRatesData, value]
	);

	const clickHandler = ({ name, count }: TExchange) => {
		setSelectedItem({ name, count });
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
					<button className="search__button" type="submit"></button>
				</div>
			</header>
			<List filteredRates={filteredRates} clickHandler={clickHandler} />
			{selectedItem && <Detail name={selectedItem.name} count={selectedItem.count} />}
		</div>
	);
};

export default ExchangeRatesData;
