import React from "react";
import s from './Dialogs.module.css'

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>Maha</div>
                <div className={s.dialog}>Alex</div>
                <div className={s.dialog}>Miha</div>
                <div className={s.dialog}>Yura</div>
                <div className={s.dialog}>Paha</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you</div>
                <div className={s.message}>Bye</div>
            </div>
        </div>
    )
}

export default Dialogs