import {v1} from "uuid";

type ActionType = {
    type: string
    newText: string
}

export const store = {
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
        },
        sidebar: [
            {id: v1(), name: 'Maria', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
            {id: v1(), name: 'Miha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
            {id: v1(), name: 'Leha', avatar: 'https://postel24.ru/image/cache/no_image-1000x1000.png'},
        ]
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    subscribe(observer: () => void) { // функция вызвалась при загрузке приложения, изменив
        this._callSubscriber = observer // функцию reRenderTree, т.е. заменив её на rerenderEntireTree
    },

    _addPost() {
        const newPost = {
            id: v1(),
            message: this._state.profilePage.newPostText,
            name: 'Igor',
            likesCount: 777,
            img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
        }
        this._state.profilePage.posts.unshift(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber() // вызов из индекс, но индекс сюда не импортируем
    },
    _updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber() // вызов из индекс.тсх, но индекс.тсх сюда не импортируем
    },

    dispatch(action: ActionType) {
        if (action.type === 'ADD-POST') {
            this._addPost()
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._updateNewPostText(action.newText)
            // this._state.profilePage.newPostText = action.newText
            // this._callSubscriber() // вызов из индекс.тсх, но индекс.тсх сюда не импортируем
        }
    },
}





