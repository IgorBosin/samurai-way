import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props: any) {
    let postsElements = props.posts.map((p: { message: any; name: any; likesCount: any; img: any; }) => <Post
        messages={p.message} name={p.name} likesCount={p.likesCount}
        img={p.img}/>)
    return (
        <div className={s.postBlock}>
            <h3>My post</h3>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts