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

    let dialogsData = [
        {id: 1, name: 'Maha'},
        {id: 2, name: 'Alex'},
        {id: 3, name: 'Miha'},
        {id: 4, name: 'Yura'},
    ];

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Bye'}
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogName={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem dialogName={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem dialogName={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem dialogName={dialogsData[3].name} id={dialogsData[3].id}/>
            </div>
            <div className={s.messages}>
                <Message dialogMessages={messagesData[0].message}/>
                <Message dialogMessages={messagesData[1].message}/>
                <Message dialogMessages={messagesData[2].message}/>
            </div>
        </div>
    )
}

export default Dialogs