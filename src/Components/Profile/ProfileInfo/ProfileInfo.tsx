import React from "react";
import s from "./ProfileInfo.module.css";

export function ProfileInfo() {
    return (
        <div>
            <div className={s.content}>
                <img
                    src="https://bicsi-singapore.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2016/11/22100215/Banner_04-1200x160.jpg"
                    alt="img"/>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )
}

export default ProfileInfo