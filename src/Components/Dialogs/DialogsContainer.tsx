import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {addMessage, DialogsPageType, DialogsType, MessagesType,} from "../../Redux/dialogsReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: AppRootState): DialogsPageType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    }
}

class DialogsContainer extends React.Component<PropsType, DialogsPageType> {
    render() {
        return <Dialogs {...this.props}/>;
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {addMessage}),
    WithAuthRedirect
)(DialogsContainer)

// types
type PropsType = MapDispatchPropsType & MapStatePropsType
type MapDispatchPropsType = {
    addMessage: (message: string) => void
}
type MapStatePropsType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
}