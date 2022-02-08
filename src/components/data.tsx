import React, { useState, useEffect } from "react";
import { Api } from "./Api";
import Detail from "./Detail";
type TExchange = { name: string; count: number };

const ExchangeRates: React.FC = () => {
	const [exchangeRatesData, setExchangeRates] = useState<TExchange[]>([]);
	const [selectedItem, setSelectedItem] = useState<TExchange>();
	const [marker, setMarker] = useState(false);

	const loadExchangeRates = () => {
		Api.get().then((response) => {
			if (response.quotes) {
				// console.log(Object.entries(response.quotes));
				setMarker(!!response.quotes);

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
			<div className="form">
				<div className="search-form">
					<input
						type="text"
						placeholder="Search here..."
						className="search__input"
						onChange={(event) => setValue(event.target.value)}
						required
					/>
				</div>
			</div>
			<div className="select">
				<ul className="select-list">
					{filteredRates.map(({ name, count }, index) => (
						<li className="select-rate" key={index} onClick={() => clickHandler({ name, count })}>
							<button className="select-rate-button">{name}</button>
						</li>
					))}
				</ul>
			</div>
			{selectedItem && <Detail selectedItem={selectedItem} />}
		</div>
	);
};

export default ExchangeRates;
