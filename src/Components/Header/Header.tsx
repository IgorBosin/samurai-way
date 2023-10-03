import React from "react";
import s from './Header.module.css';
import {Link} from "react-router-dom";

type PropsType = {
    isAuth: boolean
    logout: () => void
    userName: string
}

function Header(props: PropsType) {

    const login = props.isAuth ? `${props.userName}-LogOut` : 'Login'

    return (
        <header className={s.header}>
            <img
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                alt="logo"/>
            <Link onClick={props.logout} to="/login">{login}</Link>
        </header>
    )
}

export default Header