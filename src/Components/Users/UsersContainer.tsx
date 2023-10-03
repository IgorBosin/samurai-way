import React from "react";
import {
    followToUser,
    getAnotherPage,
    getMoreUsers,
    getUsers,
    unfollowToUser,
    UsersPageType,
    UserStoreType
} from "Redux/usersReducer";
import {Users} from "./Users";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootStateType} from "Redux/store";
import {currentPageSelector, pageSizeSelector, totalCountSelector, usersListsSelector} from "Redux/usersSelectors";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        currentPage: currentPageSelector(state),
        pageSize: pageSizeSelector(state),
        totalCount: totalCountSelector(state),
        usersList: usersListsSelector(state)
    }
};

class UsersContainer extends React.Component<UsersPropsType, UsersPageType> {
    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }

    render() {
        return (
            <div>
                <Users {...this.props}/>
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {unfollowToUser, followToUser, getUsers, getMoreUsers, getAnotherPage}),
)(UsersContainer)

// types
export type UsersPropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    currentPage: number
    pageSize: number
    totalCount: number
    usersList: UserStoreType[]
}
type MapDispatchPropsType = {
    unfollowToUser: (userId: number, isFollow: boolean) => void
    followToUser: (userId: number, isFollow: boolean) => void
    getMoreUsers: (pageSize: number, currentPage: number) => void
    getAnotherPage: (pageSize: number, currentPage: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}