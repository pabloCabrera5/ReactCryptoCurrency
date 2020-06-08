import { useState, useEffect } from 'react'
import { TESTCRYPTOS } from '../services/settings';
import { getCryptos } from '../services/getCryptos';

export default function useCryptos() {
    const [cryptos, setCryptos] = useState(TESTCRYPTOS);

    useEffect(() => {
        

        const intervalId = setInterval(async () => {
            
            let newCryptos = await getCryptos();
            setCryptos(cryptos => {
                // to be able to know if the price is greather or not to set a background color
                // maybe others better approach ?
                cryptos.map((crypto, index) => {
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