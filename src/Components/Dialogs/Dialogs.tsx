import React, {LegacyRef} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogsItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../App";

type DialogsType = {
    data: DialogsPageType
}

function Dialogs(props: DialogsType) {

    let dialogsElements = props.data.dialogs.map((d: { name: string; id: string; avatar: string }) =>
        <DialogItem
            dialogName={d.name}
            id={d.id}
            avatar={d.avatar}/>)
    let messagesElements = props.data.messages.map((m: { message: string }) =>
        <Message
            dialogMessages={m.message}/>)

    const addMessages: LegacyRef<HTMLInputElement> = React.createRef()

    const onClickHandler = () => {
        alert(addMessages.current?.value)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <input ref={addMessages}/>
                <button onClick={onClickHandler}>Add messages</button>
            </div>
        </div>
    )
}

export default Dialogs