import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./Redux/store";

const rerenderEntireTree = () => {
    debugger
    ReactDOM.render(
        <App state={store.getState()}
             dispatch={store.dispatch.bind(store)}/>,
        document.getElementById('root')
    );
};

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
