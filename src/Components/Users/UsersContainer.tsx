import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../Redux/store";
import {
    changePageUsersAC,
    followToUserAC, setMoreUsersAC,
    setUsersAC,
    unfollowToUserAC,
    UsersPageType,
} from "../../Redux/usersReducer";
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

    const users = useSelector<AppRootState, UsersPageType>(state => state.usersPage)
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

    const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        ...settings
    })

    const setUsers = () => {
        instance.get<getUsersResponsType>(`users?count=${users.pageSize}&page=${users.currentPage}`, settings)
            .then((res) => {
                dispatch(setUsersAC(res.data.items, res.data.totalCount))
            })
    }

    const setMoreUsers = () => {
        instance.get<getUsersResponsType>(`users?count=${users.pageSize}&page=${users.currentPage + 1}`, settings)
            .then((res) => {
                dispatch(setMoreUsersAC(res.data.items))
            })
    }

    const changePage = (currentPage: number) => {
        instance.get<getUsersResponsType>(`users?count=${users.pageSize}&page=${currentPage}`, settings)
            .then((res) => {
                dispatch(changePageUsersAC(res.data.items, currentPage))
            })
    }

    return (
        <div>
            <Users
                setMoreUsers={setMoreUsers}
                // users={users.items}
                users={users}
                changePage={changePage}
                // currentPage={users.currentPage}
                followOnUser={followOnUser}
                unfollowOnUser={unfollowOnUser}
                setUsers={setUsers}/>
        </div>
    );
};

export default UsersContainer;
