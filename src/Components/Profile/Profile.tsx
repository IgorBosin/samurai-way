import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../App";
import {dispatchActionsType} from "../../Redux/state";

type ProfilePropsType = {
    posts: ProfilePageType
    dispatch: (action: dispatchActionsType) => void
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