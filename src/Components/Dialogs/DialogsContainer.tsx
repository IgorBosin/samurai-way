import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {
    addMessage,
    DialogsPageType,
    DialogsType,
    MessagesType,
    updateNewMessageText,
} from "../../Redux/dialogsReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: AppRootState): DialogsPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

class DialogsContainer extends React.Component<PropsType, DialogsPageType> {
    render() {
        return <Dialogs {...this.props}/>;
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage, updateNewMessageText}),
    WithAuthRedirect
)(DialogsContainer)

// types
type PropsType = MapDispatchPropsType & MapStatePropsType
type MapDispatchPropsType = {
    addMessage: () => void
    updateNewMessageText: (value: string) => void
}
type MapStatePropsType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}