import {BASE_URL, AUTH_URL} from "../constants";

function printCookies() {
    const cookieArr = document.cookie.split(";");
    console.log("all cks: ", document.cookie);
    for (let i = 0; i < cookieArr.length; i++) {
        const cookiePair = cookieArr[i].split("=");
        console.log(`${cookiePair[0]} -> ${cookiePair[1]}`)
    }
    return null;
}


export async function login(username, password) {

    const url = BASE_URL + AUTH_URL + "/signin";

    let body = {
        "username": username,
        "password": password
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "include",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify(body),
        "mode": "cors"

    })
    console.log(`response: ${response}`);
    console.log(`status: ${response.status}`)

    console.log("cookies: ", printCookies())

    if (response.status / 100 === 2) {
        const r = await response.json();
        console.log(r)
        return r;
    }

    return null;

}

export async function lougout() {

    const url = BASE_URL + AUTH_URL + "/signout";


    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers": new Headers({'content-type': 'application/json'}),
        "mode": "cors"
    })

    return response.status % 100 === 2;

}

export async function signUp(username, password, name, email, accountnumber, mobilenumber) {

    const url = BASE_URL + AUTH_URL + "/signup";

    let body = {
        "username": username,
        "password": password,
        "name": name,
        "email": email,
        "accountnumber": accountnumber,
        "mobilenumber": mobilenumber
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify(body),
        "mode": "cors"

    })

    if (response.status % 100 === 2)
        return await response.json();


    return null;
}

export async function deleteUser(password) {
    const url = BASE_URL + AUTH_URL + "/delete";

    let body = {
        "password": password
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers": new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify(body),
        "mode": "cors"

    })

    if (response.status % 100 === 2)
        return await response.json();


    return null;
}