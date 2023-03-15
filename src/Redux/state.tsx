import {v1} from "uuid";
import {Render} from "../Render";

export const state = {
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
    },
    sidebar: [
        {id: v1(), name: 'Maria', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        {id: v1(), name: 'Leha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
    ]
}

export const addPost = (postMessage: string) => {
    const newPost = {
        id: v1(),
        message: postMessage,
        name: 'Igor',
        likesCount: 777,
        img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
    }
    state.profilePage.posts.unshift(newPost)
    Render(state)
}

