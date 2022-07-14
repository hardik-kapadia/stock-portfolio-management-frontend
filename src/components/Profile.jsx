import React from "react";
import { useState } from "react";


const LoginForm = (props) => {
    return (
        <div className="user-login">
            login form
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
        if (signedUp) {
            return <LoginForm switchToSignUp={() => setSignedUp(false)} />
        } else {
            return <SignupForm switchToLogIn={() => setSignedUp(true)} />
        }
    }
}

export default Profile;