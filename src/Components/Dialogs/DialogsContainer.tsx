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

const mapStateToProps = (state: AppRootState): DialogsPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         addMessage: () => {
//             dispatch(addMessage())
//         },
//         updateNewMessageText: (value: string) => {
//             let action = updateNewMessageText(value)
//             dispatch(action)
//         }
//     }
// }

class DialogsContainer extends React.Component<PropsType, DialogsPageType> {
    render() {
        return <Dialogs {...this.props}/>;
    }
}

export default connect(mapStateToProps, {addMessage, updateNewMessageText})(DialogsContainer)

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