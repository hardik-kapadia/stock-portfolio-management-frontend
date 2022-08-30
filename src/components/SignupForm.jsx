import React, {useState} from 'react';
import {signUp, login} from '../services/auth';

const SignupForm = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [mobileNumber, setMobileNumber] = useState('')

    const register = () => {
        console.log('clicked on register')
        signUp(email, password, name, accountNumber, mobileNumber).then(() => {
            console.log('there is little to no change this will be printed but it is does NICE');
            login(email, password).then(() => {
                props.updateUserDeets();
            }, e => console.log(e))
        }, e => console.log(e));
    }

    return (
        <div className="user-signup">
            <div className="form-outline mb-2 mx-4">
                <label className="form-label" htmlFor="registerName">Name</label>
                <input value={name} onChange={e => setName(e.target.value)} type="text" id="registerName"
                       className="form-control"/>
            </div>

            <div className="form-outline mb-2 mx-4">
                <label className="form-label" htmlFor="registerEmail">Email</label>
                <input value={email} type="email" id="registerEmail" onChange={e => setEmail(e.target.value)}
                       className="form-control"/>
            </div>

            <div className="form-outline mb-2 mx-4">
                <label className="form-label" htmlFor="registerAccountNumber">Account Number</label>
                <input value={accountNumber} type="text" id="registerAccountNumber"
                       onChange={e => setAccountNumber(e.target.value)} className="form-control"/>
            </div>

            <div className="form-outline mb-2 mx-4">
                <label className="form-label" htmlFor="registerMobileNumber">Mobile Number</label>
                <input value={mobileNumber} type="number" id="registerMobileNumber"
                       onChange={e => setMobileNumber(e.target.value)} className="form-control"/>
            </div>

            <div className="form-outline mb-2 mx-4">
                <label className="form-label" htmlFor="registerPassword">Password</label>
                <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                       id="registerPassword" className="form-control"/>
            </div>

            <div className="form-outline mb-2 mx-4">
                <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                <input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} type="password"
                       id="registerRepeatPassword" className="form-control"/>
            </div>

            <button type="submit" onClick={register} className="btn btn-primary btn-block mb-3 mx-4">Register</button>
            <div className='mx-4'>Already have an account?
                <input id='signup-page-login' type="button" value="Login" onClick={() => props.switchToLogIn()}/>
            </div>
        </div>
    )
}

export default SignupForm;