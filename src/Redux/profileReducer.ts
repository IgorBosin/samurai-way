import {v1} from "uuid";
import {UserProfileType} from "../api/api";

export const addNewPost = () => ({type: 'ADD-POST'} as const)
export const updateNewPostText = (textPost: string) => ({type: 'UPDATE-NEW-POST-TEXT', newText: textPost} as const)
export const setUserProfile = (userProfile: UserProfileType) => ({
    type: 'SET-USER-PROFILE',
    userProfile
} as const)

const initialState: ProfilePageType = {
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
            return {...state, userProfile: action.userProfile}
        }
        default:
            return state
    }
}

type ActionType = AddPostActionType | UpdateNewPostTextActionType | SetUserProfileActionType
type AddPostActionType = ReturnType<typeof addNewPost>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostText>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
export type postsType = {
    id: string
    message: string
    name: string
    likesCount: number
    img: string
}
export type ProfilePageType = {
    userProfile: UserProfileType
    posts: postsType[]
    newPostText: string
}