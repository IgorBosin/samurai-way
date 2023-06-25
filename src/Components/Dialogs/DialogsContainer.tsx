import React from "react";
import {
    addMessageAC,
    dialogsType,
    messagesType,
    updateNewMessageTextAC
} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogs: dialogsType[]
    messages: messagesType[]
    newMessageText: string
}

type MapDispatchPropsType = {
    addMessage: () => void
    changeMessage: (value: string) => void
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addMessage: () => {
            dispatch(addMessageAC())
        },
        changeMessage: (value: string) => {
            let action = updateNewMessageTextAC(value)
            dispatch(action)
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
