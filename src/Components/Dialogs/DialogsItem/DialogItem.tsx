import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";

export function DialogItem(props: any) {
    return (
        <div>
            <NavLink to={`/dialog/${props.id}`} className={s.dialog}
                     activeClassName={s.active}>{props.dialogName}</NavLink>
        </div>
    )
}