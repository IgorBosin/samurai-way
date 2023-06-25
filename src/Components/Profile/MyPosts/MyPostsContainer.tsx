import React from "react";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppRootState} from "../../../Redux/store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: ProfilePageType
}

type MapDispatchPropsType = {
    addPost: () => void
    onPostChange: (value: string) => void
}

export type MyPostsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (value: string) => {
            let action = updateNewPostTextAC(value)
            dispatch(action)
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
