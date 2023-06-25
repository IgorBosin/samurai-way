import React from "react";
import s from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";
import {BestFriendsContainer} from "./Friends/BestFriendsContainer";

function Navbar() {
    return (
        <div className={s.nav}>
            <NavbarItem item='profile' name='Profile'/>
            <NavbarItem item='dialog' name='Messages'/>
            <NavbarItem item='news' name='News'/>
            <NavbarItem item='music' name='Music'/>
            <NavbarItem item='settings' name='Settings'/>
            <BestFriendsContainer/>
        </div>
    )
}

export default Navbar