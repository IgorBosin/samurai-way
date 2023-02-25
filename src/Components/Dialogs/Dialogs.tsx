import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsType = {
    data: DialogsPageType
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.data.dialogs.map((d: { name: string; id: number; avatar:string }) =>
        <DialogItem
            dialogName={d.name}
            id={d.id}
            avatar={d.avatar}/>)
    let messagesElements = props.data.messages.map((m: { message: string }) =>
        <Message
            dialogMessages={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs