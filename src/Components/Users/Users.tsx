import s from './Users.module.css'
import {UsersPageType} from "../../Redux/usersReducer";

type UsersType = {
    users: UsersPageType
    followOnUser: (userId: string, isFollow: boolean) => void
    unfollowOnUser: (userId: string, isFollow: boolean) => void
    setUsers: () => void
}

const Users = (props: UsersType) => {

    if (props.users.length === 0) {
        props.setUsers()
    }

    const followOnUser = (userId: string) => {
        props.followOnUser(userId, false)
    }

    const unfollowOnUser = (userId: string) => {
        props.unfollowOnUser(userId, true)
    }

    const setUsers = () => {
        props.setUsers()
    }

    return (
        <div className={s.usersContainer}>
            {props.users.map(el => {
                return (
                    <div key={el.id}>
                        <div className={s.usersListContainer}>
                            <div className={s.imgAndFollowcontainer}>
                                <img className={s.img} src={el.img} alt="avatar"/>
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
                                    <div className={s.name}>{el.fullName}</div>
                                    <span className={s.title}>{el.status}</span>
                                </div>
                                <div className={s.locationContainer}>
                                    <span>{el.location.country}</span>
                                    <span>{el.location.city}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
            <button className={s.buttonMore} onClick={setUsers}>MORE USERS</button>
        </div>
    );
};

export default Users;