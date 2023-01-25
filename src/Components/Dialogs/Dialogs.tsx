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

function DialogMessage(props: any) {
    return (
        <div className={s.message}>{props.dialogMessages}</div>
    )
}

function Dialogs(props: any) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem dialogName={'Maha'} id={1}/>
                <DialogItem dialogName={'Alex'} id={2}/>
                <DialogItem dialogName={'Miha'} id={3}/>
                <DialogItem dialogName={'Yura'} id={4}/>
                <DialogItem dialogName={'Paha'} id={5}/>
            </div>
            <div className={s.messages}>
                <DialogMessage dialogMessages={'Hi'}/>
                <DialogMessage dialogMessages={'How are you?'}/>
                <DialogMessage dialogMessages={'Bye'}/>
            </div>
        </div>
    )
}

export default Dialogs