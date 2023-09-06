import {getUsersResponseType, UsersType} from "../api/api";

const initialState: UsersPageType = {
    items: [],
    error: '',
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'FOLLOW_TO_USER': {
            return {
                ...state, items: state.items.map(el => el.id === action.id
                    ? {...el, followed: action.isFollow}
                    : el)
            }
        }
        case 'UNFOLLOW_TO_USER': {
            return {
                ...state, items: state.items.map(el => el.id === action.id
                    ? {...el, followed: action.isFollow}
                    : el)
            }
        }
        case 'SET_USERS': {
            return {
                ...state,
                items: [...action.users],
                totalCount: action.totalCount,
            }
        }
        case "CHANGE-PAGE-USERS": {
            return {
                ...state,
                items: [...action.users],
                currentPage: action.currentPage
            }
        }
        case "SET_MORE_USERS": {
            return {
                ...state,
                items: [...state.items, ...action.users],
                currentPage: state.currentPage + 1,
                pageSize: state.pageSize + 5
            }
        }
        default:
            return state
    }
}

export const followToUser = (id: string, isFollow: boolean) => ({type: 'FOLLOW_TO_USER', id, isFollow} as const)
export const unfollowToUser = (id: string, isFollow: boolean) => ({type: 'UNFOLLOW_TO_USER', id, isFollow} as const)
export const setUsers = (users: UsersType[], totalCount: number) => ({type: 'SET_USERS', users, totalCount} as const)
export const setMoreUsers = (users: UsersType[]) => ({type: 'SET_MORE_USERS', users} as const)
export const changePageUsers = (users: UsersType[], currentPage: number) => ({
    type: 'CHANGE-PAGE-USERS',
    users,
    currentPage
} as const)

export type UsersPageType = getUsersResponseType & {
    pageSize: number
    currentPage: number
}
type ActionType = FollowToUserACType
    | ShowMoreUsersACType
    | UnfollowToUserACType
    | ChangePageUsersACType
    | SetMoreUsersACType

type FollowToUserACType = ReturnType<typeof followToUser>
type UnfollowToUserACType = ReturnType<typeof unfollowToUser>
type ShowMoreUsersACType = ReturnType<typeof setUsers>
type ChangePageUsersACType = ReturnType<typeof changePageUsers>
type SetMoreUsersACType = ReturnType<typeof setMoreUsers>
