import React from "react";
import {addMessageAC, DialogsPageType, updateNewMessageTextAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    addMessage: () => void
    changeMessage: (value: string) => void
}

export type DialogsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
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
