import React, {ChangeEvent, LegacyRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsType, messagesType} from "../../App";


type DialogsType = {
    dialogs: dialogsType[]
    messages: messagesType[]
    newMessageText: string
    changeMessage: (value: string) => void
    addMessage: () => void
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.dialogs.map((d: { name: string; id: string; avatar: string }) =>
        <DialogItem
            dialogName={d.name}
            id={d.id}
            avatar={d.avatar}/>)
    let messagesElements = props.messages.map((m: { message: string }) =>
        <Message
            dialogMessages={m.message}/>)

    const addMessages: LegacyRef<HTMLInputElement> = React.createRef()

    const onMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeMessage(e.currentTarget.value)
    }

    const addMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <input value={props.newMessageText} onChange={onMessageChange} ref={addMessages}/>
                <button onClick={addMessage}>Add messages</button>
            </div>
        </div>
    )
}

export default Dialogs