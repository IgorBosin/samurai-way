import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";

type DialogItemType = {
    id: number
    dialogName: string
}

export function DialogItem(props: DialogItemType) {
    debugger
    return (
        <div>
            <NavLink to={`/dialog/${props.id}`}
                     className={s.dialog}
                     activeClassName={s.active}>{props.dialogName}
            </NavLink>
        </div>
    )
}