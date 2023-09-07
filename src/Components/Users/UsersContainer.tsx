import React from 'react';
import {
    changePageUsers,
    followToUser, isFollowing,
    setMoreUsers,
    setUsers,
    unfollowToUser,
    UsersPageType,
} from "../../Redux/usersReducer";
import {AppRootState} from "../../Redux/store";
import {connect} from "react-redux";
import {isFetching} from "../../Redux/authReducer";
import {userApi, UsersType} from "../../api/api";
import {Users} from "./Users";

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        users: state.usersPage
    }
}

class UsersContainer extends React.Component<PropsType, UsersPageType> {
    componentDidMount() {
        this.props.isFetching(true)
        userApi.getUsers(this.props.users.pageSize, this.props.users.currentPage)
            .then((data) => {
                this.props.setUsers(data.items, data.totalCount)
                this.props.isFetching(false)
            })
    }

    render() {
        const setMoreUsers = () => {
            this.props.isFetching(true)
            userApi.getUsers(this.props.users.pageSize, this.props.users.currentPage + 1)
                .then((data) => {
                    this.props.setMoreUsers(data.items)
                    this.props.isFetching(false)
                })
        }

        const changePage = (currentPage: number) => {
            this.props.isFetching(true)
            userApi.getUsers(this.props.users.pageSize, currentPage)
                .then((data) => {
                    this.props.changePageUsers(data.items, currentPage)
                    this.props.isFetching(false)
                })
        }

        return (
            <>
                <Users
                    isFetching={this.props.isFetching}
                    users={this.props.users}
                    followToUser={this.props.followToUser}
                    unfollowToUser={this.props.unfollowToUser}
                    changePage={changePage}
                    isFollowing={this.props.isFollowing}
                    setMoreUsers={setMoreUsers}/>
            </>
        )
    }
}

export default connect(mapStateToProps,
    {followToUser, unfollowToUser, setUsers, setMoreUsers, changePageUsers, isFetching, isFollowing})(UsersContainer)

type PropsType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    users: UsersPageType
}
type MapDispatchPropsType = {
    followToUser: (userId: number, isFollow: boolean) => void
    unfollowToUser: (userId: number, isFollow: boolean) => void
    setUsers: (items: UsersType[], totalCount: number) => void
    setMoreUsers: (items: UsersType[]) => void
    changePageUsers: (items: UsersType[], currentPage: number) => void
    isFetching: (isFetching: boolean) => void
    isFollowing: (id: number, disableButton: boolean) => void
}