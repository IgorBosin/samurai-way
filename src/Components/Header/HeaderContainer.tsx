import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {AuthInitialStateType, isFetching, setUserData} from "../../Redux/authReducer";
import Preloader from "../common/Preloader/Preloader";
import {authApi, AuthData} from "../../api/api";

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({auth: state.auth})

class HeaderContainer extends React.Component<PropsType, AuthInitialStateType> {
    componentDidMount() {
        this.props.isFetching(true)
        authApi.auth()
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data)
                    this.props.isFetching(false)
                } else {
                    this.props.isFetching(false)
                }
            })
    }

    render() {
        return (
            <>
                {this.props.auth.isFetching && <Preloader/>}
                <Header isAuth={this.props.auth.isAuth}/>
            </>

        )
    }
}

export default connect(mapStateToProps, {setUserData, isFetching})(HeaderContainer)

type PropsType = MapStatePropsType & MapDispatchPropsType
type MapStatePropsType = {
    auth: AuthInitialStateType
}
type MapDispatchPropsType = {
    setUserData: (data: AuthData) => void
    isFetching: (isFetching: boolean) => void
}
