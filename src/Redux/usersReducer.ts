import {userApi, UsersType} from "api/api";
import {Dispatch} from "redux";
import {isFetching} from "./authReducer";

const initialState: UsersPageType = {
    items: [] as UserStoreType[],
    error: '',
    pageSize: 5,
    totalCount: 0,
    currentPage: 1,
}

export const usersReducer = (state: UsersPageType = initialState, action: ActionType): UsersPageType => {
    switch (action.type) {
        case 'SUBSCRIPTION_TO_USER': {
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

//action creators
export const subscriptionToUser = (id: number, isFollow: boolean) => ({
    type: 'SUBSCRIPTION_TO_USER',
    id,
    isFollow
} as const)
export const setUsers = (users: UsersType[], totalCount: number) => ({type: 'SET_USERS', users, totalCount} as const)
export const setMoreUsers = (users: UsersType[]) => ({type: 'SET_MORE_USERS', users} as const)
export const isFollowing = (id: number, disableButton: boolean) => ({
    type: 'TOGGLE-IS-FOLLOWING',
    id,
    disableButton
} as const)
export const changePageUsers = (users: UsersType[], currentPage: number) => ({
    type: 'CHANGE-PAGE-USERS', users, currentPage
} as const)

//thunk creators
export const followToUser = (userId: number, isFollow: boolean) => (dispatch: Dispatch) => {
    dispatch(isFollowing(userId, true))
    dispatch(isFetching(true))
    userApi.followToUser(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(isFollowing(userId, false))
                dispatch(subscriptionToUser(userId, isFollow))
                dispatch(isFetching(false))
            }
        })
}
export const unfollowToUser = (userId: number, isFollow: boolean) => (dispatch: Dispatch) => {
    dispatch(isFollowing(userId, true))
    dispatch(isFetching(true))
    userApi.unfollowToUser(userId)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(isFollowing(userId, false))
                dispatch(subscriptionToUser(userId, isFollow))
                dispatch(isFetching(false))
            }
        })
}
export const getUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    userApi.getUsers(pageSize, currentPage)
        .then((data) => {
            dispatch(setUsers(data.items, data.totalCount))
            dispatch(isFetching(false))
        })
}
export const getMoreUsers = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    userApi.getUsers(pageSize, currentPage + 1)
        .then((data) => {
            dispatch(setMoreUsers(data.items))
            dispatch(isFetching(false))
        })
}
export const getAnotherPage = (pageSize: number, currentPage: number) => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    userApi.getUsers(pageSize, currentPage)
        .then((data) => {
            dispatch(changePageUsers(data.items, currentPage))
            dispatch(isFetching(false))

        })
}

//types
export type UsersPageType = {
    items: UserStoreType[],
    error: string,
    totalCount: number,
    pageSize: number
    currentPage: number
}
export type UserStoreType = UsersType & { isFollowing: boolean }
type ActionType = SubscriptionToUserType
    | IsFollowingType
    | ShowMoreUsersType
    | ChangePageUsersType
    | SetMoreUsersType
type IsFollowingType = ReturnType<typeof isFollowing>
type SubscriptionToUserType = ReturnType<typeof subscriptionToUser>
type ShowMoreUsersType = ReturnType<typeof setUsers>
type ChangePageUsersType = ReturnType<typeof changePageUsers>
type SetMoreUsersType = ReturnType<typeof setMoreUsers>
