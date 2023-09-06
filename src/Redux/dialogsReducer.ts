import {v1} from "uuid";

export const addMessage = () => ({type: 'ADD-MESSAGE'} as const)
export const updateNewMessageText = (textMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: textMessage
} as const)

const initialState: DialogsPageType = {
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

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newText}
        }
        case 'ADD-MESSAGE': {
            if (state.newMessageText) {
                const newMessage: MessagesType = {id: v1(), message: state.newMessageText}
                return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
            } else return state
        }
        default:
            return state
    }
}

export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
    newMessageText: string
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    avatar: string
}
type ActionType = AddMessageActionType | UpdateNewMessageTextActionType
type AddMessageActionType = ReturnType<typeof addMessage>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageText>

