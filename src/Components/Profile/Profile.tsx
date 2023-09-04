import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {GetUserProfileResponseType} from "./ProfileContainer";

type PropsType = {
    profileUser:GetUserProfileResponseType
}

function Profile(props:PropsType) {
    return (
        <div>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile