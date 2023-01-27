import s from "../Navbar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export function NavbarItem(props: any) {
    return (
        <div className={s.item}>
            <NavLink to={`/${props.item}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}