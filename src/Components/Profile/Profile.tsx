import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className={classes.content}>
            <div>
                <img
                    src="https://bicsi-singapore.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2016/11/22100215/Banner_04-1200x160.jpg"
                    alt="img"/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    )
}


export default Profile