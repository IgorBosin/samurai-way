import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    posts: ProfilePageType
    addPost: (postMessage: string)=>void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.posts.posts}/>
        </div>
    )
}

export default Profile