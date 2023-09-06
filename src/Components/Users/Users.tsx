import s from './Users.module.css'
import avatarDefault from '../../assets/images/avatarDefault.png'
import {UsersPageType} from "../../Redux/usersReducer";
import React from "react";
import Pagination from "../common/Pagination/Pagination";
import {Link} from "react-router-dom";
import {userApi} from "../../api/api";

type UsersComponentType = {
    users: UsersPageType
    followToUser: (userId: string, isFollow: boolean) => void
    unfollowToUser: (userId: string, isFollow: boolean) => void
    changePage: (currentPage: number) => void
    setMoreUsers: () => void
    isFetching: (isFetching: boolean) => void
}

export const Users = (props: UsersComponentType) => {

    const totalPages = Math.ceil(props.users.totalCount / props.users.pageSize)

    const followToUser = (userId: string) => {
        props.isFetching(true)
        userApi.followToUser(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.followToUser(userId, true)
                    props.isFetching(false)
                }
            })
    }
    const unfollowToUser = (userId: string) => {
        props.isFetching(true)
        userApi.unfollowToUser(userId)
            .then(res => {
                if (res.data.resultCode === 0) {
                    props.followToUser(userId, false)
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
                                        onClick={() => unfollowToUser(el.id)}>Unfollow
                                    </button>
                                    : <button
                                        className={s.buttonFollow}
                                        onClick={() => followToUser(el.id)}>Follow
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

