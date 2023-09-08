import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../Redux/store';
import Profile from './Profile';
import {ProfilePageType} from "../../Redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {toggleIsFetching} from "../../Redux/authReducer";
import {UserProfileType} from "../../api/api";

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
})

class ProfileContainer extends React.Component<PropsType, ProfilePageType> {
    componentDidMount() {
        this.props.toggleIsFetching(this.props.match.params.userId)
    }

    render() {

        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <div>
                <Profile profileUser={this.props.userProfile}/>
            </div>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer) // сначала оборач в withRouter и получ доп.св-ва

export default connect(mapStateToProps, {toggleIsFetching})(WithUrlDataContainerComponent)

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: UserProfileType
    isAuth: boolean
}
type MapDispatchPropsType = {
    toggleIsFetching: (userId: string) => void
}

