import React from "react";
import s from './Header.module.css';

function Header() {
    debugger
    return (
        <header className={s.header}>
            <img
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                alt="logo"/>
        </header>
    )
}

export default Header