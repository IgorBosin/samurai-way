import React from "react";
import s from './Navbar.module.css'
import {NavbarItem} from "./NavbarItem/NavbarItem";
import Friends from "./Friends/Friends";
import {dialogsType} from "../../App";

type NavbarType = {
    sidebar:dialogsType[]
}

function Navbar(props:NavbarType) {
    return (
        <div className={s.nav}>
            <NavbarItem item='profile' name='Profile'/>
            <NavbarItem item='dialog' name='Messages'/>
            <NavbarItem item='news' name='News'/>
            <NavbarItem item='music' name='Music'/>
            <NavbarItem item='settings' name='Settings'/>
            <Friends sidebar={props.sidebar} />
        </div>
    )
}

export default Navbar