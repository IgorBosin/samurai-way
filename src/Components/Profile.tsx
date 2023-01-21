import React from "react";
import classes from "./Profile.module.css";

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
            <div>
                My post
                <div>
                    New posts
                </div>
                <div className='posts'>
                    <div className={classes.item}>
                        post1
                    </div>
                    <div className={classes.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Profile