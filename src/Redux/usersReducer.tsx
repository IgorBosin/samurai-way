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

export const setUsersAC = (users: UsersType[]) => ({
    type: SET_USERS,
    users
} as const)

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

const initialState: UsersType[] = []

export const usersReducer = (state: UsersType[] = initialState, action: dispatchActionsType): UsersType[] => {
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
