import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsType} from "../../../Redux/profileReducer";
import {AddTextForm} from "../../common/AddTextForm/AddTextForm";

type PropsType = {
    posts: postsType[]
    addNewPost: (postMessage: string) => void
}

function MyPosts(props: PropsType) {

    const addPost = (postMessage: string) => {
        props.addNewPost(postMessage)
    }

    let postsElements = props.posts.map((p, index) =>
        <Post key={index} messages={p.message} name={p.name} likesCount={p.likesCount} img={p.img}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <AddTextForm title={'Add post'} maxSymbols={20} callback={addPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts





