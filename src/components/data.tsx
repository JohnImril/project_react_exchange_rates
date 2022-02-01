
import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import img from '../images/icon-glass-search.png';
type TExchange = { name: string; count: number }
type TResponseExchange = { quotes: { [K: string]: number } };


const ExchangeRates: React.FC = () => {

    const [exchangeRatesData, setExchangeRates] = useState<TExchange[]>([])
    const [selectedItem, setSelectedItem] = useState<TExchange>()

    const loadExchangeRates = () => {
        axios.get<TResponseExchange>('http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb')
            .then((response) => {
                if (response.data.quotes) {
                    console.log(Object.entries(response.data.quotes))

                    setExchangeRates(Object.entries(response.data.quotes).map(elem => ({ name: elem[0].slice(3), count: elem[1] })))
                }

            })
    }
    useEffect(() => {
        loadExchangeRates()
    }, [])

    const [value, setValue] = useState('')

    const filteredRates = exchangeRatesData.filter(quotes => {
        return quotes.name.toLowerCase().includes(value.toLowerCase())
    })

    const clickHandler = ({ name, count }: TExchange) => {
        setSelectedItem({ name, count });
    }
    return (
        <div>
            <div className='form'>
                <form className='search-form'>
                    <input
                        type='text'
                        placeholder='search'
                        className='search__input'
                        onChange={(event) => setValue(event.target.value)}
                    />
                    {/* <img src={'img'} alt='img' className='search_img' /> */}
                </form>
            </div>
            <div className='select'>
                <ul>
                    {
                        filteredRates.map(({ name, count }, index) => (<li>
                            <span className='select-rate' key={index} onClick={() => clickHandler({ name, count })}>{name}</span>
                        </li>)
                        )
                    }
                </ul>
            </div>
            <div className='detail'>
                {selectedItem?.name}
                {selectedItem?.count}
            </div>
        </div>
    )
}

export default ExchangeRates