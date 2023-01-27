import s from "../Dialogs.module.css";
import React from "react";

export function Message(props: any) {
    return (
        <div className={s.message}>{props.dialogMessages}</div>
    )
}