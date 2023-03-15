import React from 'react';
import ReactDOM from "react-dom";
import App, {StateType} from "./App";
import {addPost} from "./Redux/state";

export const Render = (state:StateType) => {
    ReactDOM.render(
        <App state={state} addPost={addPost}/>,
        document.getElementById('root')
    );
};

