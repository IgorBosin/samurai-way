import React from 'react';

const UsersFc = () => {
    return (
        <div>
            
        </div>
    );
};

export default UsersFc;
// import s from './Users.module.css'
// import avatarDefault from '../../assets/images/avatarDefault.png'
// import {UsersType} from "../../Redux/usersReducer";
// import {useEffect} from "react";
//
// type UsersComponentType = {
//     users: UsersType[]
//     followOnUser: (userId: string, isFollow: boolean) => void
//     unfollowOnUser: (userId: string, isFollow: boolean) => void
//     setUsers: () => void
// }
//
// const UsersFC = (props: UsersComponentType) => {
//
//     useEffect(()=>{
//         console.log('render useEffect')
//         props.setUsers()
//     },[])
//
//     const followOnUser = (userId: string) => {
//         props.followOnUser(userId, false)
//     }
//
//     const unfollowOnUser = (userId: string) => {
//         props.unfollowOnUser(userId, true)
//     }
//
//     const setUsers = () => {
//         props.setUsers()
//     }
//
//     return (
//         <div className={s.usersContainer}>
//             {props.users.map(el => {
//                 return (
//                     <div key={el.id}>
//                         <div className={s.usersListContainer}>
//                             <div className={s.imgAndFollowcontainer}>
//                                 <img className={s.img} src={el.photos.small ? el.photos.small : avatarDefault } alt="avatar"/>
//                                 {el.followed
//                                     ? <button
//                                         className={s.buttonFollow}
//                                         onClick={() => followOnUser(el.id)}>Follow
//                                     </button>
//                                     : <button
//                                         className={s.buttonFollow}
//                                         onClick={() => unfollowOnUser(el.id)}>Unfollow
//                                     </button>}
//                             </div>
//                             <div className={s.discriptionContainer}>
//                                 <div className={s.nameAndTitle}>
//                                     <div className={s.name}>{el.name}</div>
//                                     <span className={s.title}>{el.status}</span>
//                                 </div>
//                                 <div className={s.locationContainer}>
//                                     <span>Russia</span>
//                                     <span>Perm</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )
//             })}
//             <button className={s.buttonMore} onClick={setUsers}>MORE USERS</button>
//         </div>
//     );
// };
//
// export default UsersFC;