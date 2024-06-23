type TExchange = { name: string; count: number };

export const Detail: React.FC<TExchange> = ({ name, count }) => {
	return (
		<div className="detail">
			<div className="detail-scroll">
				1$={count} {name}
			</div>
		</div>
	);
};
