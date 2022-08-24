import React from "react";
import { useState } from "react";
import { login } from "../services/auth";


const LoginForm = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {
        login(username, password).then(() => {
            props.updateUserDeets();
        }, e => console.log(e))
    }
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <div id="login-form" className="user-login d-flex flex-column justify-content-center align-items-center">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input value={username} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input value={password} type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)} />
                </div>
                <button onClick={signIn} type="submit" className="btn btn-primary mb-2">Submit</button>
                <p>Not a user?
                    <input className="boderless-button" type="button" value="Sign up" onClick={props.switchToSignUp} />
                </p>
            </div>
        </div>
    )
}

const SignupForm = (props) => {
    return (
        <div className="user-signup">
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <input type="button" value="login" onClick={() => props.switchToLogIn()} />
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
                    <input type="button" value="Logout" onClick={logout} />
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