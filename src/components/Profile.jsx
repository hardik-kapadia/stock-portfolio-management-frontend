import React from "react";
import { useState } from "react";
import { login } from "../services/auth";


const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const signin = () => {
        login(username, password).then(() => {

            console.log("Logged in!")
            props.updateUserDeets();
        }, e => console.log(e))
    }
    return (
        <div className="user-login">
            <input type="text" value={username} id="login-username" onChange={e => setUsername(e.target.value)} />
            <input type="password" value={password} id="login-password" onChange={e => setPassword(e.target.value)} />
            <input type="button" value="login"
                onClick={signin} />
            <input type="button" value="Sign up" onClick={() => props.switchToSignUp()} />
        </div>
    )
}

const SignupForm = (props) => {
    return (
        <div className="user-signup">
            Sign up form
            <input type="button" value="Sign up" onClick={() => props.switchToLogIn()} />
        </div>
    )
}


const Profile = (props) => {

    const [signedUp, setSignedUp] = useState(true);

    const { user, logout } = props;

    if (props.user) {
        return (
            <div className="user-data">
                <div className="user-profile">
                    {user.name}
                </div>
                <div className="logout-button">
                    <input type="button" value="Logout" onClick={() => logout()} />
                </div>
            </div>
        )
    } else {
        if (signedUp)
            return <LoginForm updateUserDeets={props.updateUserDeets} switchToSignUp={() => setSignedUp(false)} />
        else
            return <SignupForm switchToLogIn={() => setSignedUp(true)} />

    }
}

export default Profile;