import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";
import {ProfilePageType} from "Redux/profileReducer";

type PropsType = {
    userProfile: ProfilePageType
    changeUserStatus: (status: string) => void
}

export function ProfileInfo(props: PropsType) {
    return (
        <div>
            <div>
                <ProfileStatus changeUserStatus={props.changeUserStatus} status={props.userProfile.status}/>
            </div>
            <div className={s.descriptionBlock}>
                <span>{props.userProfile.userProfile.fullName}</span>
                <img src={props.userProfile.userProfile.photos.large} alt="large photo"/>
                {props.userProfile.userProfile.aboutMe}
            </div>
        </div>

    )
}

export default ProfileInfo