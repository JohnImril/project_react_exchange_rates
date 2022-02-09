type TExchange = { name: string; count: number };

export const Detail = (props: TExchange) => {
	return (
		<div className="detail">
			<div className="detail-scroll">
				1$=
				{props.count} {props.name}
			</div>
		</div>
	);
};
