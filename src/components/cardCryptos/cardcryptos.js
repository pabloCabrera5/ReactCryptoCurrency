import React, { useEffect } from 'react';
import './cardcryptos.css';
import { Link } from 'react-router-dom';
// import icons from '../../../node_modules/cryptocurrency-icons/svg/color/btc.svg';
import useCryptos from '../../hooks/useCryptos';
// import btc from '/assets/images/btc.svg'


export const CardCryptos = () => {

    
    const { cryptos } = useCryptos();
    if(!cryptos.length) return <h3>Loading cryptos...</h3>
    return (
        <div className='cardlist'>
            {cryptos.map(crypto => <Card key={crypto.id} crypto={crypto} />)}
        </div>
    )
}

const Card = ({ crypto }) => {
    
    const cryptoClicked = (event) => {
        //alert(event)
    }
    //let prevCrypto = useRef();
    useEffect(() => {
        // to clear the timeout if we click in a card and go to the detail and dont have errors
        let timeout = setTimeout(() => {
            
            document.getElementById(crypto.id).classList.remove("neutral")
            document.getElementById(crypto.id).classList.remove("flash-red")
            document.getElementById(crypto.id).classList.remove("flash-green")
        }, 1500)
        return () => clearTimeout(timeout)
    },)
    let source;
    // if we have the img of the crypto we get it, otherwise bitcoin default img
    try {
        source = require(`../../../public/cryptos/${crypto.symbol.toLowerCase()}.svg`)
    } catch (err) {
        source = `/cryptos/btc.svg`
    }
    // setting different background color dpeending on the price update
    let val = 'neutral'
    if (crypto.update === 'negative') {
        val = 'flash-red'
        //document.getElementById(crypto.id).classList.add('flash-red')
    } else if (crypto.update === 'positive') {
        val = 'flash-green'
        //document.getElementById(crypto.id).classList.add('flash-green')   
    }


    return (
        <Link className={`card ${val}`} id={crypto.id} to={`/card/${crypto.id}`} onClick={() => cryptoClicked(crypto.id)}>
            <img className='cardicon' alt={crypto.id} src={source}>
            </img>
            <img alt={crypto.id} src="https://img.icons8.com/cute-clipart/64/000000/bitcoin.png" />
            <h5 className='cardtitle'>
                {crypto.name}
            </h5>
            <p>
                <i>Rank</i>: {crypto.rank} <br />
                <i>Symbol</i>: {crypto.symbol}<br />
                <i>Price</i>: {(crypto.priceUsd) < 0 ? parseFloat(crypto.priceUsd).toFixed(7) : parseFloat(crypto.priceUsd).toFixed(3)}<br />
                <i>Change %</i>: {parseFloat(crypto.changePercent24Hr).toFixed(4)}<br />
            </p>
        </Link>
    )
}