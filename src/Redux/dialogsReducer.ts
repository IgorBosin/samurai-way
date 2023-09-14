import {v1} from "uuid";

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
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            const newMessage: MessagesType = {id: v1(), message: action.message}
            return {...state, messages: [...state.messages, newMessage]}
        }
        default:
            return state
    }
}

//action creators
export const addMessage = (message: string) => ({type: 'ADD-MESSAGE', message} as const)

//thunk creators


//types
export type DialogsPageType = {
    messages: MessagesType[]
    dialogs: DialogsType[]
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
type ActionType = AddMessageActionType
type AddMessageActionType = ReturnType<typeof addMessage>

