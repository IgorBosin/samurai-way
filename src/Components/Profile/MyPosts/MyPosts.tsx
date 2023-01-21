import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}

export default MyPosts