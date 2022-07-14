const BASE_URL = "http://localhost:8080"

const AUTH_URL = "/api/auth"

export async function login(username, password) {

    const url = BASE_URL + AUTH_URL + "/signin";

    let body = {
        "username": username,
        "password": password
    }

    const response = await fetch(url, {
        "method": "POST",
        "credentials": "same-origin",
        "headers":new Headers({'content-type': 'application/json'}),
        "body": JSON.stringify(body),
        "mode":"cors"

    })

    const userSmall = await response.json();

    console.log(userSmall);

}