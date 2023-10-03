import React from "react";
import {followToUser, getAnotherPage, getMoreUsers, getUsers, unfollowToUser, UsersPageType} from "Redux/usersReducer";
import {Users} from "./Users";
import {connect} from "react-redux";
import {compose} from "redux";
import {AppRootStateType} from "Redux/store";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        users: state.usersPage,
    }
};

class UsersContainer extends React.Component<PropsType, UsersPageType> {
    componentDidMount() {
        this.props.getUsers(this.props.users.pageSize, this.props.users.currentPage)
    }

    render() {
        const setMoreUsers = () => {
            this.props.getMoreUsers(this.props.users.pageSize, this.props.users.currentPage)
        }

        const changePage = (currentPage: number) => {
            this.props.getAnotherPage(this.props.users.pageSize, currentPage)
        }

        return (
            <div>
                <Users
                    users={this.props.users}
                    unfollowToUser={this.props.unfollowToUser}
                    followToUser={this.props.followToUser}
                    getAnotherPage={changePage}
                    getMoreUsers={setMoreUsers}/>
            </div>
        )
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {unfollowToUser, followToUser, getUsers, getMoreUsers, getAnotherPage}),
    // WithAuthRedirect,
)(UsersContainer)

// types
type PropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    users: UsersPageType
}
type MapDispatchPropsType = {
    unfollowToUser: (userId: number, isFollow: boolean) => void
    followToUser: (userId: number, isFollow: boolean) => void
    getMoreUsers: (pageSize: number, currentPage: number) => void
    getAnotherPage: (pageSize: number, currentPage: number) => void
    getUsers: (pageSize: number, currentPage: number) => void
}