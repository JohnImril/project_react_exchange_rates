type TExchange = { name: string; count: number };
export const Detail = ({ selectedItem }: TExchange) => {
	return (
		<div className="detail">
			<div className="detail-scroll">
				1$=
				{console.log(selectedItem.count)}
				{selectedItem.count} {selectedItem.name}
			</div>
		</div>
	);
};
