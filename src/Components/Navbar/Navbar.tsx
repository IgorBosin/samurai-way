import React from "react";
import s from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";

function Navbar() {
    return (
        <div className={s.nav}>
            <NavbarItem item='profile' name='Profile'/>
            <NavbarItem item='dialog' name='Messages'/>
            <NavbarItem item='news' name='News'/>
            <NavbarItem item='music' name='Music'/>
            <NavbarItem item='settings' name='Settings'/>
        </div>
    )
}

export default Navbar