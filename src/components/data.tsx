import React, { useState, useEffect } from 'react';
import axios from 'axios';
type TExchange = { name: string; count: number };
type TResponseExchange = { quotes: { [K: string]: number } };

const ExchangeRates: React.FC = () => {
    const [exchangeRatesData, setExchangeRates] = useState<TExchange[]>([]);
    const [selectedItem, setSelectedItem] = useState<TExchange>();
    const [marker, setMarker] = useState(false);

    const loadExchangeRates = () => {
        axios
            .get<TResponseExchange>(
                'http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb'
            )
            .then((response) => {
                if (response.data.quotes) {
                    console.log(Object.entries(response.data.quotes));
                    if (response.data) {
                        setMarker(true);
                    } else {
                        setMarker(false);
                    }

                    setExchangeRates(
                        Object.entries(response.data.quotes).map((elem) => ({
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

    const [value, setValue] = useState('');

    const filteredRates = exchangeRatesData.filter((quotes) => {
        if (!value.length) return Array;
        else return quotes.name.toLowerCase().includes(value.toLowerCase());
    });

    const clickHandler = ({ name, count }: TExchange) => {
        setSelectedItem({ name, count });
    };
    return (
        <div>
            <div className="form">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="search__input"
                        onChange={(event) => setValue(event.target.value)}
                        required
                    />
                </form>
            </div>
            <div className="select">
                <ul className="select-list">
                    {filteredRates.map(({ name, count }, index) => (
                        <li
                            className="select-rate"
                            key={index}
                            onClick={() => clickHandler({ name, count })}
                        >
                            <button className="select-rate-button">
                                {name}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {marker && (
                <div className="detail">
                    <div className="detail-scroll">
                        1$=
                        {selectedItem?.count} {selectedItem?.name}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ExchangeRates;
