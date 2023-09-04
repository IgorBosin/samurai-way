import React from 'react';
import {
    changePageUsersAC,
    followToUserAC,
    isFetchingAC,
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
import Preloader from "../common/Preloader/Preloader";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})


class UsersContainer extends React.Component<UsersAPIType, UsersPageType> {
    componentDidMount() {
        this.props.isFetching(true)
        instance.get<getUsersResponsType>(`users?count=${this.props.users.pageSize}&page=${this.props.users.currentPage}`)
            .then((res) => {
                this.props.setUsers(res.data.items, res.data.totalCount)
                this.props.isFetching(false)
            })
    }

    render() {
        const setMoreUsers = () => {
            this.props.isFetching(true)
            instance.get<getUsersResponsType>(`users?count=${this.props.users.pageSize}&page=${this.props.users.currentPage + 1}`)
                .then((res) => {
                    this.props.setMoreUsers(res.data.items)
                    this.props.isFetching(false)
                })
        }
        const changePage = (currentPage: number) => {
            this.props.isFetching(true)
            instance.get<getUsersResponsType>(`users?count=${this.props.users.pageSize}&page=${currentPage}`)
                .then((res) => {
                    this.props.changePage(res.data.items, currentPage)
                    this.props.isFetching(false)
                })
        }
        return (
            <>
                {this.props.users.isFetching && <Preloader/>}
                <Users
                    users={this.props.users}
                    followOnUser={this.props.followOnUser}
                    unfollowOnUser={this.props.unfollowOnUser}
                    changePage={changePage}
                    setMoreUsers={setMoreUsers}/>
            </>

        )
    }
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
        },
        isFetching: (isFetching: boolean) => {
            dispatch(isFetchingAC(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)

export type getUsersResponsType = {
    items: UsersType[]
    totalCount: number
    error: string
}
type UsersAPIType = MapDispatchPropsType & MapStatePropsType
type MapStatePropsType = {
    users: UsersPageType
}
type MapDispatchPropsType = {
    followOnUser: (userId: string, isFollow: boolean) => void
    unfollowOnUser: (userId: string, isFollow: boolean) => void
    setUsers: (items: UsersType[], totalCount: number) => void
    setMoreUsers: (items: UsersType[]) => void
    changePage: (items: UsersType[], currentPage: number) => void
    isFetching: (isFetching: boolean) => void
}