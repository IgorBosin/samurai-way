import {getUsersResponsType} from "../Components/Users/UsersContainer";

const initialState: UsersPageType = {
    items: [],
    error: '',
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
    isFetching: false
}

export const usersReducer = (state: UsersPageType = initialState, action: UsersReducerActionType): UsersPageType => {
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
                items: [...state.items, ...action.users],
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
                ...state, items: [...state.items, ...action.users], currentPage: state.currentPage + 1
            }
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
}

export const followToUserAC = (id: string, isFollow: boolean) => ({
    type: 'FOLLOW_TO_USER',
    id,
    isFollow,
} as const)
export const unfollowToUserAC = (id: string, isFollow: boolean) => ({
    type: 'UNFOLLOW_TO_USER',
    id,
    isFollow,
} as const)
export const setUsersAC = (users: UsersType[], totalCount: number) => ({
    type: 'SET_USERS',
    users,
    totalCount,
} as const)
export const changePageUsersAC = (users: UsersType[], currentPage: number) => ({
    type: 'CHANGE-PAGE-USERS',
    users,
    currentPage
} as const)
export const setMoreUsersAC = (users: UsersType[]) => ({
    type: 'SET_MORE_USERS',
    users,
} as const)
export const isFetchingAC = (isFetching: boolean) => ({type: 'TOGGLE-IS-FETCHING', isFetching} as const)

export type UsersType = {
    id: string,
    name: string,
    status: string,
    photos: {
        small: any,
        large: any
    },
    followed: boolean
}

export type UsersPageType = getUsersResponsType & {
    pageSize: number
    currentPage: number
    isFetching: boolean
}
export type UsersReducerActionType = FollowToUserACType
    | ShowMoreUsersACType
    | UnfollowToUserACType
    | ChangePageUsersACType
    | SetMoreUsersACType
    | ToggleFetchingACType

type FollowToUserACType = ReturnType<typeof followToUserAC>
type UnfollowToUserACType = ReturnType<typeof unfollowToUserAC>
type ShowMoreUsersACType = ReturnType<typeof setUsersAC>
type ChangePageUsersACType = ReturnType<typeof changePageUsersAC>
type SetMoreUsersACType = ReturnType<typeof setMoreUsersAC>
type ToggleFetchingACType = ReturnType<typeof isFetchingAC>