import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {addPost, state, updateNewPostText, subscribe} from "./Redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>,
        document.getElementById('root')
    );
};

rerenderEntireTree()
subscribe(rerenderEntireTree)
