import React from 'react';
import '../App.css';
import {Link, useHistory} from 'react-router-dom'
import auth from "./Auth/authenticate";

function Nav() {
    const history = useHistory();
    const logOut = () => {
        localStorage.setItem("is_authenticated","false")
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
                <li >Hello {localStorage.getItem("first_name")}</li>
                <Link to="/">app</Link>
                {auth.authenticated ?   <Link to="/users">Users</Link> : ''}
                {!auth.authenticated ? <Link to="/register">Registration</Link>: '' }
                {!auth.authenticated? <Link to="/login">Login</Link> : ''}
                {auth.authenticated ? <li onClick={logOut}><a href="/">Logout</a></li> : ''}
            </ul>
        </nav>
    );
}

export default Nav;