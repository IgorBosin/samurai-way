import React from 'react';
import ReactDOM from "react-dom";
import {AppRootState, store} from "./Redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const rerenderEntireTree = (state: AppRootState) => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
};

rerenderEntireTree(store.getState())
store.subscribe(() => rerenderEntireTree)


