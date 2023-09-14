import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPost, postsType, ProfilePageType} from "../../../Redux/profileReducer";
import {AppRootState} from "../../../Redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
    }
}

class MyPostsContainer extends React.Component<PropsType, ProfilePageType> {
    render() {
        return <MyPosts {...this.props}/>;
    }
}

export default connect(mapStateToProps, {addNewPost})(MyPostsContainer)

type PropsType = MapDispatchPropsType & MapStatePropsType
type MapDispatchPropsType = {
    addNewPost: (postMessage: string) => void
}
type MapStatePropsType = {
    posts: postsType[]
}
