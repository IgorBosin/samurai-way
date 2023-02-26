import React, {LegacyRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsType} from "../../../App";

type MyPostsType = {
    posts: postsType[]
}

function MyPosts(props: MyPostsType) {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const onClickHandler = () => {
        let text = newPostElement.current?.value
        alert(text)
    }

    let postsElements = props.posts.map((p: { message: any; name: any; likesCount: any; img: any; }) =>
        <Post messages={p.message} name={p.name} likesCount={p.likesCount} img={p.img}/>)

    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea ref={newPostElement}></textarea>
                <div>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts