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
                fullName: 'Maria Bosina',
                status: 'I like to sleep',
                location: {
                    country: 'Russia',
                    city: 'Perm'
                },
                img: 'https://i.ibb.co/ngzWTmY/maria.jpg',
                followed: true,
            },
            {
                id: v1(),
                fullName: 'Igor Bosin',
                status: 'I love Nutella',
                location: {
                    country: 'Russia',
                    city: 'Perm'
                },
                img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
                followed: true,
            },
            {
                id: v1(),
                fullName: 'Leha Bosin',
                status: 'I like to dota',
                location: {
                    country: 'Russia',
                    city: 'Perm'
                },
                img: 'https://media.istockphoto.com/id/148792864/ru/%D1%84%D0%BE%D1%82%D0%BE/lobster-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=dzCMzhRgreL93wZq5xfYj9P_ZQKvUf81EJKe1MlIUBo=',
                followed: false,
            },
            {
                id: v1(),
                fullName: 'Miha Lucik',
                status: 'I am moving to Israil',
                location: {
                    country: 'Russia',
                    city: 'Perm'
                },
                img: 'data:image/jpeg;base64,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',
                followed: false,
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
