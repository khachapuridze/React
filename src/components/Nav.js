import React, {useEffect, useState} from 'react';
import '../App.css';
import {Link, useHistory} from 'react-router-dom'
import auth from "./auth";

function Nav() {
    const history = useHistory();
    const logOut = () => {
        localStorage.clear();
        auth.logout(() => {
            history.push("/");
        });
    };

    // const onStorage = (data) => {
    //     console.log(data)
    // };
    // if (window.addEventListener) {
    //     window.addEventListener("storage", onStorage, false);
    // } else {
    //     window.attachEvent("onstorage", onStorage);
    // };

    return (
        <nav>
            <h1>Logo</h1>
            <ul>
                <Link to="/">app</Link>
                {auth.authenticated ?   <Link to="/users">Users</Link> : ''}
                {!auth.authenticated ? <Link to="/register">Registration</Link>: '' }
                {!auth.authenticated? <Link to="/login">Login</Link> : ''}
                {auth.authenticated ? <li onClick={logOut}><a href="">Logout</a></li> : ''}
            </ul>
        </nav>
    );
}

export default Nav;
