import {v1} from "uuid";
import {DialogsPageType} from "../App";
import {dispatchActionsType} from "./state";

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export type dialogsReeducerActionsType = AddMessageActionType | UpdateNewMessageTextActionType

type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>


export const addMessageAC = () => ({
    type: ADD_MESSAGE
} as const)

export const updateNewMessageTextAC = (textMessage: string) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: textMessage
} as const)

const initialState = {
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Bye'}
    ],
    dialogs: [
        {id: v1(), name: 'Maha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Alex', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Yura', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    ],
    newMessageText: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: dispatchActionsType): DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT: {
            state.newMessageText = action.newText
            return state
        }
        case ADD_MESSAGE: {
            const newMessage = {id: v1(), message: state.newMessageText}
            state.messages.unshift(newMessage)
            state.newMessageText = ''
            return state
        }
        default:
            return state
    }
}

