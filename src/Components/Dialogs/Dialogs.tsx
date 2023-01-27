import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";

type DialogsPropsType = {
    dialogs: String;
    messages: String
}

function Dialogs(props: any) {

    let dialogsElements = props.dialogs.map((d: { name: any; id: any; }) => <DialogItem dialogName={d.name} id={d.id}/>)
    let messagesElements = props.message.map((m: { message: any }) => <Message dialogMessages={m.message}/>)

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