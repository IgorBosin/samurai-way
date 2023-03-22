import React from 'react';
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
import {addPost, updateNewPostText} from "./Redux/state";

export const Render = (state:StateType) => {
    ReactDOM.render(
        <App state={state} updateNewPostText={updateNewPostText} addPost={addPost}/>,
        document.getElementById('root')
    );
};

