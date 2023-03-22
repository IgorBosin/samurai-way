import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./Redux/state";

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             updateNewPostText={store.updateNewPostText.bind(store)}
             addPost={store.addPost.bind(store)}/>,
        document.getElementById('root')
    );
};

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
