import React from "react";
import s from './Header.module.css';

function Header({isAuth}: { isAuth: boolean }) {

    const login = isAuth ? 'Login' : 'LogOut'

    return (
        <header className={s.header}>
            <img
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                alt="logo"/>
            <a href="">
                {login}
            </a>
        </header>
    )
}

export default Header