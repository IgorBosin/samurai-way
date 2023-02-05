import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";

type dialogsType = {
    id: number
    name: string
}

type messagesType = {
    id: number
    message: string
}

type DialogsType = {
    dialogs: dialogsType[]
    message: messagesType[]
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogs.map((d: { name: string; id: number; }) =>
        <DialogItem dialogName={d.name} id={d.id}/>)
    let messagesElements = props.message.map((m: { message: string }) =>
        <Message dialogMessages={m.message}/>)

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