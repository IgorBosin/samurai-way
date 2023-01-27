import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Post from "./MyPosts/Post/Post";

export let posts = [
    {
        id: 1,
        message: 'Hi Igor',
        name: 'Maria',
        likesCount: 3,
        img: 'https://i.ibb.co/ngzWTmY/maria.jpg',
    },
    {
        id: 2,
        message: 'Hi Maria',
        name: 'Igor',
        likesCount: 21,
        img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
    },
];

export let postsElements = posts.map(p => <Post messages={p.message} name={p.name} likesCount={p.likesCount} img={p.img}/>)


function Profile() {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}


export default Profile