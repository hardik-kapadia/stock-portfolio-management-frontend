import { BASE_URL, USER_URL } from "../constants";

export async function getUserDetails() {

    const url = BASE_URL + USER_URL + "/info";

    const response = await fetch(url, {
        "method": "GET",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "mode": "cors"
    })

    if (response.status % 100 === 2) {
        return await response.json();
    }

    return null;

}

export async function sell(investmentId, quantity, sellingPrice) {

    const url = BASE_URL + USER_URL + "/sell";

    let body = {
        "investmentId": investmentId,
        "quantity": quantity,
        "sellingPrice": sellingPrice
    }

    const response = await fetch(url, {
        "method": "GET",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": body,
        "mode": "cors"
    })

    if (response.status % 100 === 2)
        return await response.json();


    return null;

}

export async function buy(stockSymbol, quantity, buyPrice) {

    const url = BASE_URL + USER_URL + "/buy";

    let body = {
        "stockSymbol": stockSymbol,
        "quantity": quantity,
        "buyPrice": buyPrice
    }

    const response = await fetch(url, {
        "method": "GET",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"
    })

    if (response.status % 100 === 2)
        return await response.json();


    return null;

}