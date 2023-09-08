import React from "react";
import {
    followToUser,
    getAnotherPage,
    getMoreUsers,
    getUsers,
    unfollowToUser,
    UsersPageType
} from "../../Redux/usersReducer";
import {AppRootState} from "../../Redux/store";
import {Users} from "./Users";
import {connect} from "react-redux";

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        users: state.usersPage
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
            <Users
                users={this.props.users}
                unfollowToUser={this.props.unfollowToUser}
                followToUser={this.props.followToUser}
                getAnotherPage={changePage}
                getMoreUsers={setMoreUsers}/>
        )
    }
}

export default connect(mapStateToProps,
    {unfollowToUser, followToUser, getUsers, getMoreUsers, getAnotherPage})(UsersContainer)

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