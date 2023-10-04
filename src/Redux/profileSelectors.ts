import {AppRootStateType} from "Redux/store";
import {createSelector} from "reselect";

export const userProfileSelector = (state: AppRootStateType) => state.profilePage.userProfile
export const userStatusSelector = (state: AppRootStateType) => state.profilePage.status

export const userPosts = (state: AppRootStateType) => state.profilePage.posts
export const userPostsSelector = createSelector(userPosts, posts => {
    return posts.filter(el => true)
})

