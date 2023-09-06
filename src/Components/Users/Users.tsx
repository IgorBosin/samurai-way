import s from './Users.module.css'
import avatarDefault from '../../assets/images/avatarDefault.png'
import {UsersPageType} from "../../Redux/usersReducer";
import React from "react";
import Pagination from "../common/Pagination/Pagination";
import {Link} from "react-router-dom";
import axios from "axios";

type UsersComponentType = {
    users: UsersPageType
    followOnUser: (userId: string, isFollow: boolean) => void
    unfollowOnUser: (userId: string, isFollow: boolean) => void
    changePage: (currentPage: number) => void
    setMoreUsers: () => void
    isFetching: (isFetching: boolean) => void

}

type SubscriptionResponseType = {
    resultCode: number
    messages: String[],
    data: {}
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
})

const Users = (props: UsersComponentType) => {


    const followOnUser = (userId: string) => {
        props.isFetching(true)
        instance.post<SubscriptionResponseType>(`/follow/${userId}`)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    props.followOnUser(userId, true)
                    props.isFetching(false)
                }
            })
    }

    const unfollowOnUser = (userId: string) => {
        props.isFetching(true)
        instance.delete<SubscriptionResponseType>(`/follow/${userId}`)
            .then((res) => {
                if (res.data.resultCode === 0) {
                    props.followOnUser(userId, false)
                    props.isFetching(false)
                }
            })
    }

    const setUsers = () => {
        props.setMoreUsers()
    }

    const changePage = (currentPage: number) => {
        props.changePage(currentPage)
    }

    const totalPages = Math.ceil(props.users.totalCount / props.users.pageSize)
    return (
        <div className={s.usersContainer}>
            <Pagination currentPage={props.users.currentPage} totalPages={totalPages} onPageChange={changePage}/>
            {props.users.items.map(el => {
                return (
                    <div key={el.id}>
                        <div className={s.usersListContainer}>
                            <div className={s.imgAndFollowcontainer}>
                                <Link to={`/profile/${el.id}`}>
                                    <img className={s.img} src={el.photos.small
                                        ? el.photos.small
                                        : avatarDefault}
                                         alt="avatar"/>
                                </Link>
                                {el.followed
                                    ? <button
                                        className={s.buttonFollow}
                                        onClick={() => unfollowOnUser(el.id)}>Unfollow
                                    </button>
                                    : <button
                                        className={s.buttonFollow}
                                        onClick={() => followOnUser(el.id)}>Follow
                                    </button>}
                            </div>
                            <div className={s.discriptionContainer}>
                                <div className={s.nameAndTitle}>
                                    <div className={s.name}>{el.name}</div>
                                    <span className={s.title}>{el.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <button className={s.buttonMore} onClick={setUsers}>MORE USERS</button>
        </div>
    );
}

export default Users;
