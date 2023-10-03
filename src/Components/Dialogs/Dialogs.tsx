import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "Redux/dialogsReducer";
import {AddTextForm} from "../common/AddTextForm/AddTextForm";

type PropsType = {
    addMessage: (message: string) => void
    messages: MessagesType[]
    dialogs: DialogsType[]
}

export function Dialogs(props: PropsType) {

    const addMessage = (message: string) => {
        props.addMessage(message)
    }

    let dialogsElements = props.dialogs.map((d, index) =>
        <DialogItem
            key={index}
            dialogName={d.name}
            id={d.id}
            avatar={d.avatar}/>)
    let messagesElements = props.messages.map((m, index) =>
        <Message
            key={index}
            dialogMessages={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>{dialogsElements}</div>
            <div className={s.messages}>
                {messagesElements}
                <AddTextForm title={'Send message'} maxSymbols={50} callback={addMessage}/>
            </div>
        </div>
    )
}



