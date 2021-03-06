import React from 'react';

import './Login.css';

import image from '../pic.jpg';

import { auth, provider } from '../firebase';

function Login() {

    const handleSignin = () =>{

        console.log('SIGNUP CLICKED');
        auth.signInWithPopup(provider).catch( (error)=> alert(error.message));

    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src={image} alt="THIS IS IMAGE"/>
            </div>

            <h1>i-Message</h1>

            <button onClick={handleSignin} >SignIn</button>

        </div>
    )
}

export default Login
