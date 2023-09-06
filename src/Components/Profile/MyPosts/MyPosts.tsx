import React, {ChangeEvent, LegacyRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsType} from "../../../Redux/profileReducer";

type PropsType = {
    posts: postsType[]
    newPostText: string
    addNewPost: () => void
    updateNewPostText: (value: string) => void
}

function MyPosts(props: PropsType) {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        props.addNewPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }



    let postsElements = props.posts.map((p, index) =>
        <Post key={index} messages={p.message} name={p.name} likesCount={p.likesCount} img={p.img}/>)

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

export default MyPosts