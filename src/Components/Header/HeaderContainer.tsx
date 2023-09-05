import React from "react";
import axios from "axios";
import Header from "./Header";
import {connect} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {AuthInitialStateType, isFetching, setUserData} from "../../Redux/authReducer";
import Preloader from "../common/Preloader/Preloader";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

class HeaderContainer extends React.Component<PropsType, AuthInitialStateType> {
    componentDidMount() {
        this.props.isFetching(true)
        instance.get<GetAuthMeResponseType>('auth/me')
            .then((res) => {
                if (res.data.resultCode === 0) {
                    this.props.setUserData(res.data.data)
                    this.props.isFetching(false)
                }
            })
    }

    render() {
        return(
            <>
                {this.props.auth.isFetching && <Preloader/>}
                <Header isAuth={this.props.auth.isAuth}/>
            </>

        )
    }
}

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({auth: state.auth})

export default connect(mapStateToProps, {setUserData, isFetching})(HeaderContainer)

type GetAuthMeResponseType = {
    resultCode: number
    messages: string[],
    data: AuthData
}
export type AuthData = {
    id: number | null,
    email: string | null,
    login: string | null
}

type PropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    auth: AuthInitialStateType
}

type MapDispatchPropsType = {
    setUserData: (data: AuthData) => void
    isFetching: (isFetching: boolean) => void
}
