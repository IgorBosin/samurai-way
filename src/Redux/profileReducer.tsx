import {v1} from "uuid";
import {ProfilePageType} from "../App";
import {dispatchActionsType} from "./state";

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_POST = 'ADD-POST';

export type ProfileReducerActionType = AddPostActionType | UpdateNewPostTextActionType

type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export const addPostAC = () => ({
    type: ADD_POST,
} as const)

export const updateNewPostTextAC = (textPost: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: textPost
} as const)

const initialState: ProfilePageType = {
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

export const profileReducer = (state: ProfilePageType = initialState, action: dispatchActionsType): ProfilePageType => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText
            return state
        }
        case ADD_POST: {
            const newPost = {
                id: v1(),
                message: state.newPostText, // почему из стейта???????
                name: 'Igor',
                likesCount: 777,
                img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        }
        default:
            return state

    }
}
