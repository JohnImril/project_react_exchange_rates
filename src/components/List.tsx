type TExchange = { name: string; count: number };

export const List = (props: { filteredRates: TExchange[]; clickHandler: ({ name, count }: TExchange) => void }) => {
	return (
		<div className="select">
			<ul className="select-list">
				{props.filteredRates.map(({ name, count }, index) => (
					<li className="select-rate" key={index} onClick={() => props.clickHandler({ name, count })}>
						<button className="select-rate-button">{name}</button>
					</li>
				))}
			</ul>
		</div>
	);
};
