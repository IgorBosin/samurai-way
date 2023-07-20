import {v1} from "uuid";
import {profileReducer, ProfileReducerActionType} from "./profileReducer";
import {dialogsReducer, dialogsReeducerActionsType} from "./dialogsReducer";
import {sidebarReducer, sidebarReducerActionsType} from "./sidebarReducer";
import {usersReducer, UsersReducerActionType} from "./usersReducer";

export const state = {
    _state: {
        profilePage: {
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
        },
        dialogsPage: {
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
        },
        sidebar: [
            {id: v1(), name: 'Maria', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
            {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
            {id: v1(), name: 'Leha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        ],
        usersPage: [
            {
                id: v1(),
                name: 'Igor',
                status: 'Hello',
                photos: {
                    small: null,
                    large: null
                },
                followed: true
            },
        ]
    },
    _callSubscriber() { // эта ф-ция станет rerenderEntireTree(), которая лежит в index.tsx, поэтому когда
    }, // мы делаем вызов _callSubscriber() на самом деле вызываем rerenderEntireTree(), что повлечет перерисовку
       // а т.к. до этого мы изменили стейт в App, то у нас будут рисоваться актуальные данные
    getState() {
        return this._state
    },

    subscribe(observer: () => void) { // функция вызвалась при загрузке приложения, изменив
        this._callSubscriber = observer // функцию reRenderTree, т.е. заменив её на rerenderEntireTree
    },

    dispatch(action: dispatchActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._state.usersPage = usersReducer(this._state.usersPage, action)
        this._callSubscriber()
    },
}

export type dispatchActionsType =
    ProfileReducerActionType
    | dialogsReeducerActionsType
    | sidebarReducerActionsType
    | UsersReducerActionType
