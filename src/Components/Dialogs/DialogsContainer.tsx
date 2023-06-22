import React from "react";
import {StateType} from "../../App";
import {dispatchActionsType} from "../../Redux/state";
import {addMessageAC, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";

type DialogsContainerType = {
    data: StateType
    dispatch: (action: dispatchActionsType) => void
}

export const DialogsContainer = (props: DialogsContainerType) => {

    const onMessageChange = (value: string) => {
        debugger
        let action = updateNewMessageTextAC(value)
        props.dispatch(action)
    }

    const addMessage = () => {
        props.dispatch(addMessageAC())
    }

    return (
        <div>
            <Dialogs
                dialogs={props.data.dialogsPage.dialogs}
                messages={props.data.dialogsPage.messages}
                newMessageText={props.data.dialogsPage.newMessageText}
                changeMessage={onMessageChange}
                addMessage={addMessage}/>
        </div>
    )
}

