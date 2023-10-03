import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AuthInitialStateType, logout} from "Redux/authReducer";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";
import {AppRootStateType} from "Redux/store";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({auth: state.auth})

class HeaderContainer extends React.Component<PropsType, AuthInitialStateType> {
    render() {
        return (
            <>
                {this.props.auth.isFetching && <Preloader/>}
                {this.props.auth.isAuth && <Redirect to={'/profile'}/>}
                <Header logout={this.props.logout} isAuth={this.props.auth.isAuth} userName={this.props.auth.login}/>
            </>
        )
    }
}

export default connect(mapStateToProps, {logout})(HeaderContainer)

type PropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    auth: AuthInitialStateType

}
type MapDispatchPropsType = {
    logout: () => void
}
