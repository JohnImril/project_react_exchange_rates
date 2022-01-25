
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RateItem from './';
//import img from '../images/icon-glass-search.png';

const exchangeRates = () => {

    const [exchangeRates, setExchangeRates] = useState([])
    const getExchangeRates = () => {
        axios.get('http://api.currencylayer.com/live?access_key=9ae101ac288f5d7ff8708572065e06eb')
            .then((response) => {
                setExchangeRates(response.data)
            })
    }
    useEffect(() => {
        getExchangeRates()
    }, [])

    const [value, setValue] = useState('')

    const filteredRates = exchangeRates.filter(quotes => {
        return quotes.name.toLowerCase().includes(value.toLowerCase())
    })

    return (
        <div>
            <div className='form'>
                <form className='search__form'>
                    <input
                        type='text'
                        placeholder='search'
                        className='search__input'
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <img src={img} alt='img' className='search_img' />
                </form>
            </div>
            <div className='rates'>
                {
                    filteredRates.map((quotes, index) => {
                        return (
                            <RateItem quotes={quotes} key={index} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default exchangeRates