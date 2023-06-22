import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
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
            <MyPostsContainer
                dispatch={props.dispatch}
                // updateNewPostText={props.updateNewPostText}
                // addPost={props.addPost}
                posts={props.posts}/>
        </div>
    )
}

export default Profile