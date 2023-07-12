import {dispatchActionsType} from "./state";

const FOLLOW_TO_USER = 'FOLLOW_TO_USER';
const UNFOLLOW_TO_USER = 'UNFOLLOW_TO_USER';
const SET_USERS = 'SET_USERS';

export type UsersReducerActionType = FollowToUserACType | ShowMoreUsersACType | UnfollowToUserACType

type FollowToUserACType = ReturnType<typeof followToUserAC>
type UnfollowToUserACType = ReturnType<typeof unfollowToUserAC>
type ShowMoreUsersACType = ReturnType<typeof setUsersAC>

export const followToUserAC = (id: string, isFollow: boolean) => ({
    type: FOLLOW_TO_USER,
    id,
    isFollow,
} as const)

export const unfollowToUserAC = (id: string, isFollow: boolean) => ({
    type: UNFOLLOW_TO_USER,
    id,
    isFollow,
} as const)

export const setUsersAC = (users:UsersPageType) => ({
    type: SET_USERS,
    users
} as const)

export type usersType = {
    id: string
    fullName: string
    status: string
    location: {
        country: string
        city: string
    }
    img: string
    followed: boolean
}

export type UsersPageType = usersType[]

const initialState: UsersPageType = []


export const usersReducer = (state: UsersPageType = initialState, action: dispatchActionsType): UsersPageType => {
    switch (action.type) {
        case FOLLOW_TO_USER: {
            return state.map(el => el.id === action.id ? {...el, followed: action.isFollow} : el)
        }
        case UNFOLLOW_TO_USER: {
            return state.map(el => el.id === action.id ? {...el, followed: action.isFollow} : el)
        }
        case SET_USERS: {
            return [...state, ...action.users]
        }
        default:
            return state
    }
}
