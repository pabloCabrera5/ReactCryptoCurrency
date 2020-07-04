import { useState, useEffect } from 'react'

import { getCryptos } from '../services/getCryptos';

export default function useCryptos() {
    const [cryptos, setCryptos] = useState([]);

    useEffect(() => {
        // to retrieve the data on the first call
        const fetchData = async () => { 
            let newCryptos = await getCryptos();
            setCryptos(newCryptos);
        }
        fetchData();

        // to fetch the data every 10 seconds and update the market value
        const intervalId = setInterval(async () => {
            let newCryptos = await getCryptos();
            setCryptos(cryptos => {
                // to be able to know if the price is greather or not to set a background color
                // maybe others better approach ?
                cryptos.forEach((crypto, index) => {
                    if (crypto.priceUsd < newCryptos[index].priceUsd) {
                        newCryptos[index].update = 'positive';
                    } else if (crypto.priceUsd > newCryptos[index].priceUsd) {
                        newCryptos[index].update = 'negative';
                    } else {
                        newCryptos[index].update = 'same';
                    }
                })
                return newCryptos
            })

        }, 10000);// 60sec*2mins*miliseconds
        return () => clearInterval(intervalId)
    }, [])
    return { cryptos }
}

const getSetCryptos = () => {

}