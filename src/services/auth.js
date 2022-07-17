import { BASE_URL, AUTH_URL } from "../constants";

export async function login(username, password) {

    const url = BASE_URL + AUTH_URL + "/signin";

    let body = {
        "username": username,
        "password": password
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"

    })

    if ((await response.status) % 100 === 2) {
        return await response.json();
    }

    return null;

}

export async function lougout() {
    const url = BASE_URL + AUTH_URL + "/signout";


    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "mode": "cors"
    })

    return (await response.status) % 100 === 2 ? true : false;

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
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"

    })

    if ((await response.status) % 100 === 2) {
        return await response.json();
    }

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
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"

    })

    if ((await response.status) % 100 === 2) {
        return await response.json();
    }

    return null;
}