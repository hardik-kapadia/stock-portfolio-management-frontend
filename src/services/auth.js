import { BASE_URL, AUTH_URL } from "../constants";

/**
 *
 * @param {string} username
 * @param {string} password
 * @returns {Promise<null|any>}
 */
export async function login(username, password) {

    const url = BASE_URL + AUTH_URL + "/signin";

    let body = {
        "username": username,
        "password": password
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "include",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"

    });

    if (response.status / 100 === 2)
        return await response.json();

    return null;
}

/**
 *
 * @returns {Promise<boolean>}
 */
export async function logOut() {

    const url = BASE_URL + AUTH_URL + "/signout";

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "include",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "mode": "cors"
    });

    return response.status / 100 === 2;
}

/**
 *
 * @param {string} username
 * @param {string} password
 * @param {string} name
 * @param {string} email
 * @param {string} accountNumber
 * @param {string} mobileNumber
 * @returns {Promise<null|any>}
 */
export async function signUp(username, password, name, email, accountNumber, mobileNumber) {

    const url = BASE_URL + AUTH_URL + "/signup";

    let body = {
        "username": username,
        "password": password,
        "name": name,
        "email": email,
        "accountNumber": accountNumber,
        "mobileNumber": mobileNumber
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "include",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"
    })
    console.log(response.status)

    if (response.status === 200)

        return await response.json();

    return null;
}

/**
 *
 * @param password
 * @returns {Promise<null|any>}
 */
export async function deleteUser(password) {
    const url = BASE_URL + AUTH_URL + "/delete";

    let body = { "password": password };

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers": new Headers({ 'content-type': 'application/json' }),
        "body": JSON.stringify(body),
        "mode": "cors"
    });

    if (response.status / 100 === 2)
        return await response.json();

    return null;
}