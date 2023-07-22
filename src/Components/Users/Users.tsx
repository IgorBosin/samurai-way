import s from './Users.module.css'
import avatarDefault from '../../assets/images/avatarDefault.png'
import {UsersPageType} from "../../Redux/usersReducer";
import React from "react";

type UsersComponentType = {
    users: UsersPageType
    followOnUser: (userId: string, isFollow: boolean) => void
    unfollowOnUser: (userId: string, isFollow: boolean) => void
    changePage: (currentPage: number) => void
    setMoreUsers: () => void
}

const Users = (props: UsersComponentType) => {


    const followOnUser = (userId: string) => {
        props.followOnUser(userId, false)
    }

    const unfollowOnUser = (userId: string) => {
        props.unfollowOnUser(userId, true)
    }

    const setUsers = () => {
        props.setMoreUsers()
    }

    const changePage = (currentPage: number) => {
        props.changePage(currentPage)
    }

    const pagesToShow = 10;

    const renderPages = () => {
        return Array.from({length: pagesToShow},
            (item, index) => index + props.users.currentPage)
    };

    return (
        <div>
            <div className={s.usersContainer}>
                {props.users.items.map(el => {
                    return (
                        <div key={el.id}>
                            <div className={s.usersListContainer}>
                                <div className={s.imgAndFollowcontainer}>
                                    <img className={s.img} src={el.photos.small
                                        ? el.photos.small
                                        : avatarDefault}
                                         alt="avatar"/>
                                    {el.followed
                                        ? <button
                                            className={s.buttonFollow}
                                            onClick={() => followOnUser(el.id)}>Follow
                                        </button>
                                        : <button
                                            className={s.buttonFollow}
                                            onClick={() => unfollowOnUser(el.id)}>Unfollow
                                        </button>}
                                </div>
                                <div className={s.discriptionContainer}>
                                    <div className={s.nameAndTitle}>
                                        <div className={s.name}>{el.name}</div>
                                        <span className={s.title}>{el.status}</span>
                                    </div>
                                    <div className={s.locationContainer}>
                                        <span>Russia</span>
                                        <span>Perm</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
                <button className={s.buttonMore} onClick={setUsers}>MORE USERS</button>
            </div>
            {renderPages().map(el => (
                <button key={el}
                        disabled={el === props.users.currentPage}
                        onClick={() => changePage(el)}>{el}
                </button>
            ))}
        </div>
    );
}

export default Users;
