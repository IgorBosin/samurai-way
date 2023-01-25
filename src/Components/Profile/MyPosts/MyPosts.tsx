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

    let postData = [
        {id: 1, message: 'Hi Igor', name:'Maria', likesCount: 3},
        {id: 2, message: 'Hi Maria', name:'Igor', likesCount: 21},
    ];

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
                <PostInProfile messages={postData[0].message} name={postData[0].name} likesCount={postData[0].likesCount}/>
                <PostInProfile messages={postData[1].message} name={postData[1].name} likesCount={postData[1].likesCount}/>
            </div>
        </div>
    )
}

export default MyPosts