import React from "react";
import './cryptoDetail.css'
import { Link } from "react-router-dom";

export const DetailCrypto = (crypto) => {

    let source;
    try {
        source = require(`../../../public/cryptos/${crypto.symbol.toLowerCase()}.svg`)
    } catch(err) {
        source = `/cryptos/btc.svg`
    }
    return (
        <>
        <Link to='/card'>Cryptos</Link>
        <h3>UNDER CONSTRUCTION</h3>
        <div className='card'>
            <img className='cardicon' alt='img' src={source}>
            </img>
            <img alt='img' src="https://img.icons8.com/cute-clipart/64/000000/bitcoin.png" />
            <h5 className='cardtitle'>
                {crypto.name}
            </h5>
            <p>
                <i>Rank</i>: {crypto.rank} <br />
                <i>Symbol</i>: {crypto.symbol}<br />
                <i>Price</i>: {(crypto.priceUsd) < 0 ? parseFloat(crypto.priceUsd).toFixed(7) : parseFloat(crypto.priceUsd).toFixed(3)}<br />
                <i>Change %</i>: {parseFloat(crypto.changePercent24Hr).toFixed(4)}<br />
            </p>
        </div>
        </>
    )
}