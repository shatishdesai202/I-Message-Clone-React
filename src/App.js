import React, { useEffect } from 'react';

import {  Provider, useDispatch, useSelector } from 'react-redux';

import store from './store';

import Imessage from './Component/Imessage';

import Login from './Component/Login';

import { auth } from './firebase';

import {login, logout} from './REDUX/ACTION/userAction';

//Import CSS File
import './App.css';

function App() {

    const user =  useSelector( (state) => state.users.userX );

    console.log(user);

    const dispatch = useDispatch();

    useEffect(() => {
        
        auth.onAuthStateChanged( authUser =>{
            if(authUser){
                // user is Login
                dispatch(login({
                    uid:authUser.uid,
                    photo:authUser.photoURL,
                    email:authUser.email,
                    displayName:authUser.displayName
                }))
            }else{
                // user is Logout
                dispatch(logout())
            }
        } )

    }, []);


    return (
        
        <div className="app">
    
            { user ? (<Imessage />) : ( <Login /> )}
        
        </div>

        // <Imessage/>

    )
}

export default App
