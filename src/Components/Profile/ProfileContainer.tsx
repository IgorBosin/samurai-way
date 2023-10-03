import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {changeUserStatus, getUserStatus, ProfilePageType} from "Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {toggleIsFetching} from "Redux/authReducer";
import {compose} from "redux";
import {AppRootStateType} from "Redux/store";
import {userProfileSelector, userStatusSelector} from "Redux/profileSelectors";
import {UserResponseType} from "api/api";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => ({
    userProfile: userProfileSelector(state),
    userStatus: userStatusSelector(state),
    autorizedUserId: state.auth.id
})

class ProfileContainer extends React.Component<PropsType, ProfilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = String(this.props.autorizedUserId);
        if (!userId) this.props.history.push('/login')

        this.props.toggleIsFetching(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile userProfile={this.props.userProfile}
                         userStatus={this.props.userStatus}
                         changeUserStatus={this.props.changeUserStatus}/>
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {toggleIsFetching, getUserStatus, changeUserStatus}),
    withRouter  // сначала оборач в withRouter и получ доп.св-ва (id в строке браузера)
)(ProfileContainer)

// types
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: UserResponseType
    userStatus: string
    autorizedUserId: number
}
type MapDispatchPropsType = {
    toggleIsFetching: (userId: string) => void
    getUserStatus: (userId: string) => void
    changeUserStatus: (status: string) => void
}

