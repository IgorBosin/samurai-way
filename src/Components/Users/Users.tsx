import s from './Users.module.css'
import avatarDefault from '../../assets/images/avatarDefault.png'
import {UsersType} from "../../Redux/usersReducer";
import React from "react";

type UsersComponentType = {
    users: UsersType[]
    followOnUser: (userId: string, isFollow: boolean) => void
    unfollowOnUser: (userId: string, isFollow: boolean) => void
    setUsers: () => void
}

class Users extends React.Component<UsersComponentType, UsersType[]> {

    constructor(props: any) {
        super(props);
        console.log('render constructor')
        this.props.setUsers()
    }

    followOnUser = (userId: string) => {
        this.props.followOnUser(userId, false)
    }

    unfollowOnUser = (userId: string) => {
        this.props.unfollowOnUser(userId, true)
    }

    setUsers = () => {
        this.props.setUsers()
    }

    render() {
        console.log('render users')
        return (
            <div className={s.usersContainer}>
                {
                    this.props.users.map(el => {
                        return (
                            <div key={el.id}>
                                <div className={s.usersListContainer}>
                                    <div className={s.imgAndFollowcontainer}>
                                        <img className={s.img} src={el.photos.small ? el.photos.small : avatarDefault}
                                             alt="avatar"/>
                                        {el.followed
                                            ? <button
                                                className={s.buttonFollow}
                                                onClick={() => this.followOnUser(el.id)}>Follow
                                            </button>
                                            : <button
                                                className={s.buttonFollow}
                                                onClick={() => this.unfollowOnUser(el.id)}>Unfollow
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
                <button className={s.buttonMore} onClick={this.setUsers}>MORE USERS</button>
            </div>
        );
    }
}

export default Users;
