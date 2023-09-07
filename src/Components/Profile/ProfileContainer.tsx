import React from 'react';
import {connect} from 'react-redux';
import {AppRootState} from '../../Redux/store';
import Profile from './Profile';
import {ProfilePageType, setUserProfile} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {isFetching} from "../../Redux/authReducer";
import {profileApi, UserProfileType} from "../../api/api";

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile
})

class ProfileContainer extends React.Component<PropsType, ProfilePageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2';
        this.props.isFetching(true)
        profileApi.getUserProfile(userId)
            .then(res => {
                console.log(res.status, 'status')
                this.props.setUserProfile(res.data)
                this.props.isFetching(false)
            })
    }

    render() {
        return (
            <div>
                <Profile profileUser={this.props.userProfile}/>
            </div>
        )
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainer) // сначала оборач в withRouter и получ доп.св-ва

export default connect(mapStateToProps, {setUserProfile, isFetching})(WithUrlDataContainerComponent)

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: UserProfileType
}
type MapDispatchPropsType = {
    setUserProfile: (userProfile: UserProfileType) => void
    isFetching: (isFetching: boolean) => void
}

