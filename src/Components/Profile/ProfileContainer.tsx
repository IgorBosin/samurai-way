import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../Redux/store';
import Profile from './Profile';
import {changeUserStatus, getUserStatus, ProfilePageType} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../Redux/authReducer";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    userProfile: state.profilePage
})

class ProfileContainer extends React.Component<PropsType, ProfilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '29291';
        // if (!userId) userId = '1045';
        this.props.toggleIsFetching(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        console.log(this.props.userProfile)
        return (
            <div>
                <Profile userProfile={this.props.userProfile} changeUserStatus={this.props.changeUserStatus}/>
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {toggleIsFetching, getUserStatus, changeUserStatus}),
    WithAuthRedirect,
    withRouter  // сначала оборач в withRouter и получ доп.св-ва (id в строке браузера)
)(ProfileContainer)

// types
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: ProfilePageType
}
type MapDispatchPropsType = {
    toggleIsFetching: (userId: string) => void
    getUserStatus: (userId: string) => void
    changeUserStatus: (status: string) => void
}

