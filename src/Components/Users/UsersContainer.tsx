import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {followToUserAC, setUsersAC, unfollowToUserAC, UsersType} from "../../Redux/usersReducer";
import axios from "axios";
import Users from "./Users";

type getUsersResponsType = {
    items: [
        {
            id: string,
            name: string,
            status: string,
            photos: {
                small: any,
                large: any
            },
            followed: boolean
        }
    ],
    totalCount: number,
    error: any
}

const UsersContainer = () => {

    const users = useSelector<AppRootState, UsersType[]>(state => state.usersPage)
    const dispatch = useDispatch()

    const followOnUser = (userId: string, isFollow: boolean) => {
        dispatch(followToUserAC(userId, isFollow))
    }

    const unfollowOnUser = (userId: string, isFollow: boolean) => {
        dispatch(unfollowToUserAC(userId, isFollow))
    }

    const settings = {
        withCredentials: true,
    }

    const setUsers = () => {
        axios.get<getUsersResponsType>('https://social-network.samuraijs.com/api/1.0/users?count=3', settings)
            .then((res) => {
                dispatch(setUsersAC(res.data.items))
            })
    }
    return (
        <div>
            <Users
                users={users}
                followOnUser={followOnUser}
                unfollowOnUser={unfollowOnUser}
                setUsers={setUsers}/>
        </div>
    );
};

export default UsersContainer;
