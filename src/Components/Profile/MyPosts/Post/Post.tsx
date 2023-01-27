import React from "react";
import s from "./Post.module.css";

function Post(props: any) {
    debugger

    return (
        <div className={s.item}>
            <div className={s.name}>
                {props.name}
            </div>
            <div>
                <img src={props.img} alt=""/>
            </div>
            <div className={s.messagePost}>
                {props.messages}
            </div>
            <div>
                <span>{props.likesCount} Likes </span>
            </div>

        </div>
    )
}

export default Post