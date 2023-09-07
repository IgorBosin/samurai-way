import {UsersType} from "../api/api";

const initialState: UsersPageType = {
    items: [] as UserStoreType[],
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
                items: [...action.users.map(el => ({...el, isFollowing: false}))],
                totalCount: action.totalCount,
            }
        }
        case "CHANGE-PAGE-USERS": {
            return {
                ...state,
                items: [...action.users.map(el => ({...el, isFollowing: false}))],
                currentPage: action.currentPage
            }
        }
        case "SET_MORE_USERS": {
            return {
                ...state,
                items: [...state.items, ...action.users.map(el => ({...el, isFollowing: false}))],
                currentPage: state.currentPage + 1,
                pageSize: state.pageSize + 5
            }
        }
        case "TOGGLE-IS-FOLLOWING": {
            return {
                ...state, items: state.items.map(el => el.id === action.id
                    ? {...el, isFollowing: action.disableButton}
                    : el)
            }
        }
        default:
            return state
    }
}

export const followToUser = (id: number, isFollow: boolean) => ({type: 'FOLLOW_TO_USER', id, isFollow} as const)
export const unfollowToUser = (id: number, isFollow: boolean) => ({type: 'UNFOLLOW_TO_USER', id, isFollow} as const)
export const setUsers = (users: UsersType[], totalCount: number) => ({type: 'SET_USERS', users, totalCount} as const)
export const setMoreUsers = (users: UsersType[]) => ({type: 'SET_MORE_USERS', users} as const)
export const isFollowing = (id: number, disableButton: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING',
    id,
    disableButton
} as const)
export const changePageUsers = (users: UsersType[], currentPage: number) => ({
    type: 'CHANGE-PAGE-USERS',
    users,
    currentPage
} as const)
export type UsersPageType = {
    items: UserStoreType[],
    error: string,
    totalCount: number,
    pageSize: number
    currentPage: number
}
type UserStoreType = UsersType & { isFollowing: boolean }
type ActionType = FollowToUserType
    | isFollowingType
    | ShowMoreUsersType
    | UnFollowToUserType
    | ChangePageUsersType
    | SetMoreUsersType
type isFollowingType = ReturnType<typeof isFollowing>
type FollowToUserType = ReturnType<typeof followToUser>
type UnFollowToUserType = ReturnType<typeof unfollowToUser>
type ShowMoreUsersType = ReturnType<typeof setUsers>
type ChangePageUsersType = ReturnType<typeof changePageUsers>
type SetMoreUsersType = ReturnType<typeof setMoreUsers>
