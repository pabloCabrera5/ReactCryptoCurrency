import React, { useEffect } from 'react';
import './tablecryptos.css'
import useCryptos from '../../hooks/useCryptos';

export const TableCryptos = ({ cryptosArray }) => {
    // console.log(Object.keys(cryptosArray[0]), Object.keys(cryptosArray), cryptosArray.keys(), 'table')
    const { cryptos } = useCryptos();
    if(!cryptos.length) return <h3>Loading cryptos...</h3>
    return (
        <div className='table'>
            <table>
                <caption>Cryptos Table in real time</caption>
                <thead>
                    <tr>
                        {Object.keys(cryptos[0]).splice(1).map(key => tableHeaders(key))}
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map(crypto => <Tablecontent crypto={crypto} />)}
                </tbody>
            </table>
        </div>
    )
}

const tableHeaders = (key) => {
    return (
        <th id={key}>
            {key}
        </th>
    )
}
const Tablecontent = ({ crypto }) => {

    useEffect(() => {
        // to clear the timeout if we click in a card and go to the detail,  and dont have errors
        let timeout = setTimeout(() => {
            
            document.getElementById(crypto.id).classList.remove("neutral")
            document.getElementById(crypto.id).classList.remove("flash-red")
            document.getElementById(crypto.id).classList.remove("flash-green")
        }, 1500)
        return () => clearTimeout(timeout)
    })
    let val = 'neutral'
    if (crypto.update === 'negative') {
        val = 'flash-red'
        //document.getElementById(props.id).classList.add('flash-red')
    } else if (crypto.update === 'positive') {
        val = 'flash-green'
        //document.getElementById(props.id).classList.add('flash-green')   
    }
    return (
        // decide to use .entries to have both key/value in the row to be able to display the symbol when its the symbol
        // before use .entries to only have the value
        <tr className={val} id={crypto.id}>
            {Object.entries(crypto).splice(1).map(element => tablerow(element))}
        </tr>
    )
}
const tablerow = ([title, value]) => {
    let source;
    if (title === 'symbol') {
        try {
            source = require(`../../../public/cryptos/${value.toLowerCase()}.svg`)
        } catch (err) {
            // default image
            source = `/cryptos/btc.svg`
        }
        return (
            <td>
                <img className='cardicon' alt='cryptoimg' src={source}></img><br />
                {isNaN(value) ? value : parseFloat(value).toFixed(2)}
            </td>
        )
    }

    return (
        <td>
            {isNaN(value) ? value : parseFloat(value).toFixed(2)}
        </td>
    )
}