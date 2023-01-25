import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div>
                    <NavLink to='/dialog/1' className={s.dialog} activeClassName={s.active}>Maha</NavLink>
                </div>
                <div>
                    <NavLink to='/dialog/2' className={s.dialog} activeClassName={s.active}>Alex</NavLink>
                </div>
                <div>
                    <NavLink to='/dialog/3' className={s.dialog} activeClassName={s.active}>Miha</NavLink>
                </div>
                <div>
                    <NavLink to='/dialog/4' className={s.dialog} activeClassName={s.active}>Yura</NavLink>
                </div>
                <div>
                    <NavLink to='/dialog/5' className={s.dialog} activeClassName={s.active}>Paha</NavLink>
                </div>
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