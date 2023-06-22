import React, {ChangeEvent, LegacyRef} from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postsType} from "../../../App";
import {dispatchActionsType} from "../../../Redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/profileReducer";

type MyPostsType = {
    posts: postsType[]
    // addPost: (postMessage: string) => void
    // updateNewPostText: (newText: string) => void
    newPostText: string
    dispatch: (action: dispatchActionsType) => void
}

function MyPosts(props: MyPostsType) {

    const newPostElement: LegacyRef<HTMLTextAreaElement> = React.createRef()

    const addPost = () => {
        // let text = newPostElement.current?.value
        // if(text){props.addPost(text)}
        // if(newPostElement.current?.value) newPostElement.current.value = ''
        props.dispatch(addPostAC())
        // props.updateNewPostText('')
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let action = updateNewPostTextAC(e.currentTarget.value)
        props.dispatch(action)
    }

    let postsElements = props.posts.map((p: { message: string; name: string; likesCount: number; img: string; }) =>
        <Post messages={p.message} name={p.name} likesCount={p.likesCount} img={p.img}/>)

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