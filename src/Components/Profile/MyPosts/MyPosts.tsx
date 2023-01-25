import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function PostInProfile(props: any) {
    return (
        <div>
            <Post message={props.messages} name={props.name} numberOfLikes={props.numberOfLikes}/>
        </div>
    )
}

function MyPosts(props: any) {
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
                <PostInProfile messages='Hi Igor' name='Maria' numberOfLikes={3}/>
                <PostInProfile messages='Hi Maria' name='Igor' numberOfLikes={21}/>
            </div>
        </div>
    )
}

export default MyPosts