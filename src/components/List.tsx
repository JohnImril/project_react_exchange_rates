type TExchange = { name: string; count: number };

interface ListProps {
	filteredRates: TExchange[];
	clickHandler: (exchange: TExchange) => void;
}

export const List: React.FC<ListProps> = ({ filteredRates, clickHandler }) => {
	return (
		<div className="select">
			<ul className="select-list">
				{filteredRates.map((exchange) => (
					<li className="select-rate" key={exchange.name} onClick={() => clickHandler(exchange)}>
						<button className="select-rate-button">{exchange.name}</button>
					</li>
				))}
			</ul>
		</div>
	);
};
