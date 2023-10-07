import React from "react";
import s from "./ProfileInfo.module.css";
import {UserResponseType} from "api/api";
import {ProfileStatusWithUseState} from "Components/Profile/ProfileInfo/ProfileStatusWithUseState";

type PropsType = {
    userProfile: UserResponseType
    userStatus: string
    changeUserStatus: (status: string) => void
}

export function ProfileInfo(props: PropsType) {
    return (
        <div>
            <div>
                <ProfileStatusWithUseState changeUserStatus={props.changeUserStatus} status={props.userStatus}/>
            </div>
            <div className={s.descriptionBlock}>
                <span>{props.userProfile.fullName}</span>
                <img src={props.userProfile.photos.large} alt="large photo"/>
                {props.userProfile.aboutMe}
            </div>
        </div>

    )
}

export default ProfileInfo