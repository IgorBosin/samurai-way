import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootState} from '../../Redux/store';
import {UsersPageType} from '../../Redux/usersReducer';
import Profile from './Profile';
import {setUserProfile} from "../../Redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

class ProfileContainer extends React.Component<PropsType, UsersPageType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) userId = '2';
        instance.get<GetUserProfileResponseType>(`profile/` + userId)
            .then((res) => {
                this.props.setUserProfile(res.data)
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

const mapStateToProps = (state: AppRootState): MapStatePropsType => ({
    userProfile: state.profilePage.userProfile
})

const WithUrlDataContainerComponent = withRouter(ProfileContainer) // сначала оборач в withRouter и получ доп.св-ва

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type PathParamsType = {
    userId: string
}
type OwnPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: GetUserProfileResponseType | null
}
type MapDispatchPropsType = {
    setUserProfile: (userProfile: GetUserProfileResponseType) => void
}
export type GetUserProfileResponseType = {
    aboutMe: string,
    contacts: {
        facebook: string,
        website: string,
        vk: string,
        twitter: string,
        instagram: string,
        youtube: string,
        github: string,
        mainLink: string
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}
