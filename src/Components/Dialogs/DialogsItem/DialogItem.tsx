import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";

type DialogItemType = {
    id: number
    dialogName: string
    avatar: string
}

export function DialogItem(props: DialogItemType) {
    debugger
    return (
        <div>
            <img style={{width:'15px'}} src={props.avatar} alt=""/>
            <NavLink to={`/dialog/${props.id}`}
                     className={s.dialog}
                     activeClassName={s.active}>{props.dialogName}
            </NavLink>
        </div>
    )
}