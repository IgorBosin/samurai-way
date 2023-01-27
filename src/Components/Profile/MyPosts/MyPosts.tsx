import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsElements} from "../Profile";

function MyPosts(props: any) {
    return (
        <div className={s.postBlock}>
            {/*<img src={require("./img/igor.jpg")} alt=""/>*/}
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