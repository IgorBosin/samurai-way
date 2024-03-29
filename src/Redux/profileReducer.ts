import {v1} from "uuid";
import {profileApi, UserResponseType} from "../api/api";
import {Dispatch} from "redux";
import {isFetching} from "./authReducer";

const initialState: ProfilePageType = {
    status: '',
    userProfile: {
        aboutMe: '',
        contacts: {
            facebook: '',
            website: '',
            vk: '',
            twitter: '',
            instagram: '',
            youtube: '',
            github: '',
            mainLink: ''
        },
        lookingForAJob: true,
        lookingForAJobDescription: '',
        fullName: '',
        userId: 0,
        photos: {
            small: '',
            large: ''
        }
    },
    posts: [
        {
            id: v1(),
            message: 'Masha koza',
            name: 'Igor',
            likesCount: 777,
            img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
        },
        {
            id: v1(),
            message: 'Hi Igor',
            name: 'Maria',
            likesCount: 666,
            img: 'https://i.ibb.co/ngzWTmY/maria.jpg',
        },
    ],
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "ADD-POST": {
            const newPost = {
                id: v1(),
                message: action.postMessage,
                name: 'Igor',
                likesCount: 0,
                img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
            }
            return {...state, posts: [newPost, ...state.posts]}
        }
        case "SET-USER-PROFILE": {
            return {...state, userProfile: {...action.userProfile}}
        }
        case "UPDATE-USER-STATUS": {
            return {...state, status: action.status}
        }
        case "SET-USER-STATUS": {
            return (action.status)
                ? {...state, status: action.status}
                : {...state, status: 'Статус отсутствует'}
        }
        default:
            return state
    }
}

//action creators
export const addNewPost = (postMessage: string) => ({type: 'ADD-POST', postMessage} as const)
export const setUserProfile = (userProfile: UserResponseType) => ({
    type: 'SET-USER-PROFILE',
    userProfile
} as const)
export const updateUserStatus = (status: string) => ({type: 'UPDATE-USER-STATUS', status} as const)
export const setUserStatus = (status: string) => ({type: 'SET-USER-STATUS', status} as const)

//thunk creators
export const changeUserStatus = (status: string) => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    profileApi.changeStatus(status)
        .then((res) => {
            if (res.data.resultCode === 0) {
                dispatch(isFetching(false))
                dispatch(updateUserStatus(status))
            }
        })
}
export const getUserStatus = (userId: string) => (dispatch: Dispatch) => {
    dispatch(isFetching(true))
    profileApi.getUserStatus(userId)
        .then((res) => {
            dispatch(isFetching(false))
            dispatch(setUserStatus(res.data))
        })
}

//types
type ActionType =
    AddPostActionType
    | SetUserProfileActionType
    | UpdateStatusType
    | SetUserStatusType
type AddPostActionType = ReturnType<typeof addNewPost>
type UpdateStatusType = ReturnType<typeof updateUserStatus>
type SetUserStatusType = ReturnType<typeof setUserStatus>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type postsType = {
    id: string
    message: string
    name: string
    likesCount: number
    img: string
}
export type ProfilePageType = {
    userProfile: UserResponseType
    posts: postsType[]
    status: string
}