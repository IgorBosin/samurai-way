import s from "../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    dialogMessages: String;
}

export function Message(props: MessagePropsType) {
    return (
        <div
            className={s.messages}>{props.dialogMessages}
        </div>
    )
}