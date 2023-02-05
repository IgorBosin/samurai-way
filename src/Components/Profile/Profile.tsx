import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type postsType = {
    id: number
    message: string
    name: string
    likesCount: number
    img: string
}

type ProfileType = {
    posts: postsType[]
}

function Profile(props: ProfileType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    )
}

export default Profile