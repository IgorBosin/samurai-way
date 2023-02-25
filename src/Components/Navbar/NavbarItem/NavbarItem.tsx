import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type NavbarItemType = {
    item: string
    name: string
}

export function NavbarItem(props: NavbarItemType) {
    return (
        <div className={s.item}>
            <NavLink to={`/${props.item}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}