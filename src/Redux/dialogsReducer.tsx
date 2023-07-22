import {v1} from "uuid";

export type dialogsReeducerActionsType = AddMessageActionType | UpdateNewMessageTextActionType
type AddMessageActionType = ReturnType<typeof addMessageAC>
type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageTextAC>

export type messagesType = {
    id: string
    message: string
}

export type dialogsType = {
    id: string
    name: string
    avatar: string
}

export const addMessageAC = () => ({
    type: 'ADD-MESSAGE'
} as const)

export const updateNewMessageTextAC = (textMessage: string) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT',
    newText: textMessage
} as const)

const initialState = {
    messages: [
        {id: v1(), message: 'Hi'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'Bye'}
    ] as messagesType[],
    dialogs: [
        {id: v1(), name: 'Maha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Alex', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Yura', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    ] as dialogsType[],
    newMessageText: ''
}
// export type DialogsPageType = {
//     messages: messagesType[]
//     dialogs: dialogsType[]
//     newMessageText: string
// }
export type DialogsPageType = typeof initialState // автомат.типизация. Необходимо типизировать объекты\массивы (as const)

export const dialogsReducer = (state: DialogsPageType = initialState, action: dialogsReeducerActionsType): DialogsPageType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            return {...state, newMessageText: action.newText}
        }
        case 'ADD-MESSAGE': {
            if (state.newMessageText) {
                const newMessage: messagesType = {id: v1(), message: state.newMessageText}
                return {...state, messages: [...state.messages, newMessage], newMessageText: ''}
            } else return state
        }
        default:
            return state
    }
}

