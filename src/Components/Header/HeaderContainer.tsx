import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {AuthInitialStateType, getUserData, logout} from "../../Redux/authReducer";
import Preloader from "../common/Preloader/Preloader";
import {Redirect} from "react-router-dom";

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({auth: state.auth})

class HeaderContainer extends React.Component<PropsType, AuthInitialStateType> {
    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return (
            <>
                {this.props.auth.isFetching && <Preloader/>}
                {this.props.auth.isAuth && <Redirect to={'/profile'}/>}
                <Header logout={this.props.logout} isAuth={this.props.auth.isAuth}/>
            </>
        )
    }
}

export default connect(mapStateToProps, {getUserData, logout})(HeaderContainer)

type PropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    auth: AuthInitialStateType
}
type MapDispatchPropsType = {
    getUserData: () => void
    logout: () => void

}
