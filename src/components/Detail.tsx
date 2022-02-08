
type TExchange = { name: string; count: number };


const Detail = ({ name, count }: TExchange) => {
    return (
    <div className="detail">
        <div className="detail-scroll">
            1$=
            {count} {name}
        </div>
    </div>
    )}


export default Detail;