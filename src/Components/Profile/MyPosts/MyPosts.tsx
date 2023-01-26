import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function PostInProfile(props: any) {
    return (
        <div>
            <Post message={props.messages} name={props.name} likesCount={props.likesCount}/>
        </div>
    )
}

function MyPosts(props: any) {

    let posts = [
        {id: 1, message: 'Hi Igor', name: 'Maria', likesCount: 3},
        {id: 2, message: 'Hi Maria', name: 'Igor', likesCount: 21},
    ];

    let postsElements = posts.map(p => <PostInProfile messages={p.message} name={p.name} likesCount={p.likesCount}/>)

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