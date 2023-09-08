import s from './Users.module.css'
import avatarDefault from '../../assets/images/avatarDefault.png'
import {UsersPageType} from "../../Redux/usersReducer";
import React from "react";
import Pagination from "../common/Pagination/Pagination";
import {Link} from "react-router-dom";

type UsersComponentType = {
    users: UsersPageType
    unfollowToUser: (userId: number, isFollow: boolean) => void
    followToUser: (userId: number, isFollow: boolean) => void
    getAnotherPage: (currentPage: number) => void
    getMoreUsers: () => void
}

export const Users = (props: UsersComponentType) => {

    const totalPages = Math.ceil(props.users.totalCount / props.users.pageSize)

    const unfollowToUser = (userId: number, isFollow: boolean) => {
        props.unfollowToUser(userId, isFollow)
    }
    const followToUser = (userId: number, isFollow: boolean) => {
        props.followToUser(userId, isFollow)
    }

    const setUsers = () => {
        props.getMoreUsers()
    }
    const changePage = (currentPage: number) => {
        props.getAnotherPage(currentPage)
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
                                        disabled={el.isFollowing}
                                        className={s.buttonFollow}
                                        onClick={() => unfollowToUser(el.id, false)}>Unfollow
                                    </button>
                                    : <button
                                        disabled={el.isFollowing}
                                        className={s.buttonFollow}
                                        onClick={() => followToUser(el.id, true)}>Follow
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

