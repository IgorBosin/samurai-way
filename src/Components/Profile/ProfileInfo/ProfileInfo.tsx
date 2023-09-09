import React from "react";
import s from "./ProfileInfo.module.css";
import {UserProfileType} from "../../../api/api";
import ProfileStatus from "./ProfileStatus";

type PropsType = {
    profileUser: UserProfileType
}

export function ProfileInfo(props: PropsType) {
    return (
        <div>
            <div>
                <ProfileStatus status={'STATUS'}/>
            </div>
            <div className={s.descriptionBlock}>
                <span>{props.profileUser.fullName}</span>
                <img src={props.profileUser.photos.large} alt="large photo"/>
                {props.profileUser.aboutMe}
            </div>
        </div>

    )
}

export default ProfileInfo