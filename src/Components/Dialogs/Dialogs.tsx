import React, {ChangeEvent, LegacyRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType} from "./DialogsContainer";

function Dialogs(props: DialogsType) {
    const addMessages: LegacyRef<HTMLInputElement> = React.createRef()

    let dialogsElements = props.dialogsPage.dialogs.map((d, index) =>
        <DialogItem
            key={index}
            dialogName={d.name}
            id={d.id}
            avatar={d.avatar}/>)
    let messagesElements = props.dialogsPage.messages.map((m, index) =>
        <Message
            key={index}
            dialogMessages={m.message}/>)

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
                <input value={props.dialogsPage.newMessageText} onChange={onMessageChange} ref={addMessages}/>
                <button onClick={addMessage}>Add messages</button>
            </div>
        </div>
    )
}

export default Dialogs