import { BASE_URL, STOCK_URL } from "../constants";

export async function searchForStock(stock) {

    const url = BASE_URL + STOCK_URL + "/search?stockName=" + stock;

    const response = await fetch(url, {
        "method": "GET",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "mode": "cors"

    })

    if ((await response.status) % 100 === 2) {
        return await response.json();
    }

    return null;

}

export async function getStock(symbol) {

    const url = BASE_URL + STOCK_URL + "/stock?symbol=" + symbol;

    const response = await fetch(url, {
        "method": "GET",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "mode": "cors"
    })

    if ((await response.status) % 100 === 2) {
        return await response.json();
    }

    return null;

}