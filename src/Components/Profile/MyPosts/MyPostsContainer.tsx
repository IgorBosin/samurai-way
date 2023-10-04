import React from 'react';
import MyPosts from "./MyPosts";
import {addNewPost, postsType, ProfilePageType} from "Redux/profileReducer";
import {AppRootStateType} from "Redux/store";
import {connect} from "react-redux";
import {userPostsSelector} from "Redux/profileSelectors";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        posts: userPostsSelector(state),
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
