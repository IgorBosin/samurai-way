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
            message: 'Hi Igor',
            name: 'Maria',
            likesCount: 666,
            img: 'https://i.ibb.co/ngzWTmY/maria.jpg',
        },
        {
            id: v1(),
            message: 'Masha koza',
            name: 'Igor',
            likesCount: 777,
            img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
        },
    ],
    newPostText: ''
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case "UPDATE-NEW-POST-TEXT": {
            return {...state, newPostText: action.newText}
        }
        case "ADD-POST": {
            if (state.newPostText) {
                const newPost = {
                    id: v1(),
                    message: state.newPostText,
                    name: 'Igor',
                    likesCount: 777,
                    img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
                }
                return {...state, posts: [newPost, ...state.posts], newPostText: ''}
            } else return state
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
export const addNewPost = () => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (textPost: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: textPost} as const)
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
    | UpdateNewPostTextActionType
    | SetUserProfileActionType
    | UpdateStatusType
    | SetUserStatusType
type AddPostActionType = ReturnType<typeof addNewPost>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
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
    newPostText: string,
    status: string
}