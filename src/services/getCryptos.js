import { URI } from "./settings";

export const getCryptos = async () => {
  let resp = await fetch(URI, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  let cryptos = await resp.json();
  return cryptos.data;
}