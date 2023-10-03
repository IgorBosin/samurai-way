import {AppRootStateType} from "Redux/store";

export const userProfileSelector = (state:AppRootStateType) => state.profilePage.userProfile
export const userStatusSelector = (state:AppRootStateType) => state.profilePage.status
export const userPostsSelector = (state:AppRootStateType) => state.profilePage.posts
