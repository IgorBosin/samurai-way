import React, {ChangeEvent, LegacyRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsType, ProfilePageType} from "../../../App";
import {dispatchActionsType} from "../../../Redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

type MyPostsType = {
    posts: ProfilePageType
    dispatch: (action: dispatchActionsType) => void
}

function MyPostsContainer(props: MyPostsType) {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        // let text = newPostElement.current?.value
        // if(text){props.addPost(text)}
        // if(newPostElement.current?.value) newPostElement.current.value = ''
        props.dispatch(addPostAC())
        // props.updateNewPostText('')
    }

    const onPostChange = (value: string) => {
        let action = updateNewPostTextAC(value)
        props.dispatch(action)
    }

    return (
        <div>
            <MyPosts posts={props.posts.posts}
                     newPostText={props.posts.newPostText}
                     addPost={addPost}
                     onPostChange={onPostChange}/>
        </div>
    )
}

export default MyPostsContainer