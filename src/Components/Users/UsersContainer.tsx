import React from 'react';
import {
    changePageUsersAC,
    followToUserAC,
    setMoreUsersAC,
    setUsersAC,
    unfollowToUserAC,
    UsersPageType,
    UsersType
} from "../../Redux/usersReducer";
import {AppRootState} from "../../Redux/store";
import axios from "axios";
import {Dispatch} from "redux";
import Users from "./Users";
import {connect} from "react-redux";

export type getUsersResponsType = {
    items: UsersType[]
    totalCount: number
    error: string
}
type UsersAPIType = MapDispatchPropsType & MapStatePropsType

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

class UsersAPI extends React.Component<UsersAPIType, UsersPageType> {
    componentDidMount() {
        instance.get<getUsersResponsType>(`users?count=${this.props.users.pageSize}&page=${this.props.users.currentPage}`)
            .then((res) => {
                this.props.setUsers(res.data.items, res.data.totalCount)
            })
    }

    render() {
        const setMoreUsers = () => {
            instance.get<getUsersResponsType>(`users?count=${this.props.users.pageSize}&page=${this.props.users.currentPage + 1}`)
                .then((res) => {
                    this.props.setMoreUsers(res.data.items)
                })
        }
        const changePage = (currentPage: number) => {
            instance.get<getUsersResponsType>(`users?count=${this.props.users.pageSize}&page=${currentPage}`)
                .then((res) => {
                    this.props.changePage(res.data.items, currentPage)
                })
        }
        return (
            <Users
                users={this.props.users}
                followOnUser={this.props.followOnUser}
                unfollowOnUser={this.props.unfollowOnUser}
                changePage={changePage}
                setMoreUsers={setMoreUsers}/>
        )
    }
}

type MapStatePropsType = {
    users: UsersPageType
}
type MapDispatchPropsType = {
    followOnUser: (userId: string, isFollow: boolean) => void
    unfollowOnUser: (userId: string, isFollow: boolean) => void
    setUsers: (items: UsersType[], totalCount: number) => void
    setMoreUsers: (items: UsersType[]) => void
    changePage: (items: UsersType[], currentPage: number) => void
}

const mapStateToProps = (state: AppRootState): MapStatePropsType => {
    return {
        users: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        followOnUser: (userId: string, isFollow: boolean) => {
            dispatch(followToUserAC(userId, isFollow))
        },
        unfollowOnUser: (userId: string, isFollow: boolean) => {
            dispatch(unfollowToUserAC(userId, isFollow))
        },
        setUsers: (items: UsersType[], totalCount: number) => {
            dispatch(setUsersAC(items, totalCount))
        },
        setMoreUsers: (items: UsersType[]) => {
            dispatch(setMoreUsersAC(items))
        },
        changePage: (items: UsersType[], currentPage: number) => {
            dispatch(changePageUsersAC(items, currentPage))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)
