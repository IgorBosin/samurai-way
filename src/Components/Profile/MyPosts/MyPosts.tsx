import React, {ChangeEvent, LegacyRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsType, ProfilePageType} from "../../../App";
import {dispatchActionsType} from "../../../Redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";

type MyPostsType = {
    posts: postsType[]
    newPostText: string
    addPost: () => void
    onPostChange: (value: string) => void
}

function MyPostsContainer(props: MyPostsType) {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    let postsElements = props.posts.map((p: { message: string; name: string; likesCount: number; img: string; }) =>
        <Post messages={p.message} name={p.name} likesCount={p.likesCount} img={p.img}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}/>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPostsContainer