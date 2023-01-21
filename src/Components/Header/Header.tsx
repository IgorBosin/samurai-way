import React from "react";
import classes from './Header.module.css';

function Header() {
    return (
        <header className={classes.header}>
            <img
                src="https://www.nasa.gov/sites/default/files/thumbnails/image/nasa-logo-web-rgb.png"
                alt="logo"/>
        </header>
    )
}

export default Header