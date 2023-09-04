import React from 'react';
import {
    changePageUsers,
    followToUser,
    isFetching,
    setMoreUsers,
    setUsers,
    unfollowToUser,
    UsersPageType,
    UsersType
} from "../../Redux/usersReducer";
import {AppRootState} from "../../Redux/store";
import axios from "axios";
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
                    this.props.changePageUsers(res.data.items, currentPage)
                    this.props.isFetching(false)
                })
        }
        return (
            <>
                {this.props.users.isFetching && <Preloader/>}
                <Users
                    users={this.props.users}
                    followOnUser={this.props.followToUser}
                    unfollowOnUser={this.props.unfollowToUser}
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

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         followToUser: (userId: string, isFollow: boolean) => {
//             dispatch(followToUser(userId, isFollow))
//         },
//         unfollowToUser: (userId: string, isFollow: boolean) => {
//             dispatch(unfollowToUser(userId, isFollow))
//         },
//         setUsers: (items: UsersType[], totalCount: number) => {
//             dispatch(setUsers(items, totalCount))
//         },
//         setMoreUsers: (items: UsersType[]) => {
//             dispatch(setMoreUsers(items))
//         },
//         changePageUsers: (items: UsersType[], currentPage: number) => {
//             dispatch(changePageUsers(items, currentPage))
//         },
//         isFetching:(isFetch: boolean)=>{
//             dispatch(isFetching(isFetch))
//         }
//     }
// }

export default connect(mapStateToProps,
    {followToUser, unfollowToUser, setUsers, setMoreUsers, changePageUsers, isFetching})(UsersContainer)

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
    followToUser: (userId: string, isFollow: boolean) => void
    unfollowToUser: (userId: string, isFollow: boolean) => void
    setUsers: (items: UsersType[], totalCount: number) => void
    setMoreUsers: (items: UsersType[]) => void
    changePageUsers: (items: UsersType[], currentPage: number) => void
    isFetching: (isFetching: boolean) => void
}