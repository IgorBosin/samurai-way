import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserResponseType} from "api/api";

type PropsType = {
    userProfile: UserResponseType
    userStatus: string
    changeUserStatus: (status: string) => void

}

function Profile(props: PropsType) {

    if (props.userProfile.userId === 0) {
        return <div></div>
    }

    return (
        <div>
            <ProfileInfo changeUserStatus={props.changeUserStatus}
                         userStatus={props.userStatus}
                         userProfile={props.userProfile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile