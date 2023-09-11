import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfilePageType} from "../../Redux/profileReducer";

type PropsType = {
    userProfile: ProfilePageType
    changeUserStatus: (status: string) => void

}

function Profile(props: PropsType) {

    if (props.userProfile.userProfile.userId === 0) {
        return <div></div>
    }

    return (
        <div>
            <ProfileInfo changeUserStatus={props.changeUserStatus} userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile