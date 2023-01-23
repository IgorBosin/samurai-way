import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi Maria' name="Igor" numberOfLikes={20} />
                <Post message='Hi Igor' name='Maria' numberOfLikes={3} />
            </div>
        </div>
    )
}

export default MyPosts