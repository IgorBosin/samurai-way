import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPost, postsType, ProfilePageType, updateNewPostText} from "../../../Redux/profileReducer";
import {AppRootState} from "../../../Redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

class MyPostsContainer extends React.Component<PropsType, ProfilePageType> {
    render() {
        return <MyPosts {...this.props}/>;
    }
}

export default connect(mapStateToProps, {addNewPost, updateNewPostText})(MyPostsContainer)

type PropsType = MapDispatchPropsType & MapStatePropsType
type MapDispatchPropsType = {
    addNewPost: () => void
    updateNewPostText: (value: string) => void
}
type MapStatePropsType = {
    posts: postsType[]
    newPostText: string
}
