import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {
        id: 1,
        message: 'Hi Igor',
        name: 'Maria',
        likesCount: 3,
        img: 'https://i.ibb.co/ngzWTmY/maria.jpg',
    },
    {
        id: 2,
        message: 'Hi Maria',
        name: 'Igor',
        likesCount: 21,
        img: 'https://i.ibb.co/6YM5Wht/igor.jpg',
    },
];

let dialogs = [
    {id: 1, name: 'Maha'},
    {id: 2, name: 'Alex'},
    {id: 3, name: 'Miha'},
    {id: 4, name: 'Yura'},
];

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Bye'}
];

ReactDOM.render(
    <App posts={posts} message={messages} dialogs={dialogs}/>,
    document.getElementById('root')
);
