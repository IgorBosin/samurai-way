import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppRootState} from '../../Redux/store';
import {UsersPageType} from '../../Redux/usersReducer';
import Profile from './Profile';
import {setUserProfile} from "../../Redux/profileReducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

class ProfileContainer extends React.Component<ProfileContainerType, UsersPageType> {
    componentDidMount() {
        // instance.get<GetUserProfileResponseType>(`profile/${this.props.userProfile.userId}`)
        instance.get<GetUserProfileResponseType>(`profile/2`)
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

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
type ProfileContainerType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    userProfile: GetUserProfileResponseType
}
type MapDispatchPropsType = {
    setUserProfile: (userProfile: GetUserProfileResponseType) => void
}