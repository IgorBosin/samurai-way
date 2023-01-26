import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props: any) {
    return (
        <div>
            <NavLink to={`/dialog/${props.id}`} className={s.dialog}
                     activeClassName={s.active}>{props.dialogName}</NavLink>
        </div>
    )
}

function Message(props: any) {
    return (
        <div className={s.message}>{props.dialogMessages}</div>
    )
}

function Dialogs(props: any) {

    let dialogs = [
        {id: 1, name: 'Maha'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Miha'},
        {id: 4, name: 'Yura'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Bye'}
    ];

    let dialogsElements = dialogs.map(d => <DialogItem dialogName={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message dialogMessages={m.message}/>)

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