import React from "react";
import s from './Header.module.css';
import {Link} from "react-router-dom";

function Header({isAuth}: { isAuth: boolean }) {

    const login = isAuth ? 'LogOut' : 'Login'

    return (
        <header className={s.header}>
            <img
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                alt="logo"/>
            <Link to="/login">
                {login}
            </Link>
        </header>
    )
}

export default Header