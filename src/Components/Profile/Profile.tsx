import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {UserProfileType} from "../../api/api";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type PropsType = {
    profileUser:UserProfileType
}

function Profile(props:PropsType) {

    if (props.profileUser.userId===0) {
        return <div></div>
    }

    return (
        <div>
            <ProfileInfo profileUser={props.profileUser}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile