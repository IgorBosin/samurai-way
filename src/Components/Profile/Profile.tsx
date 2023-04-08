import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";

type ProfilePropsType = {
    posts: ProfilePageType
    dispatch: (action: { type: string, newText:string })=>void
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
}

function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                dispatch={props.dispatch}
            // updateNewPostText={props.updateNewPostText}
                newPostText={props.posts.newPostText}
                // addPost={props.addPost}
                posts={props.posts.posts}/>
        </div>
    )
}

export default Profile