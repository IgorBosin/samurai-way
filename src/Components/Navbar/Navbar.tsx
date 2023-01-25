import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

function NavbarItem(props: any) {
    return (
        <div className={s.item}>
            <NavLink to={`/${props.item}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

function Navbar(props: any) {
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