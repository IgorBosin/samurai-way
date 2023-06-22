import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import {dispatchActionsType} from "./Redux/state";
import {DialogsContainer} from "./Components/Dialogs/DialogsContainer";
import {StoreContext} from "./StoreContext";
import {store} from "./Redux/store";

export type messagesType = {
    id: string
    message: string
}

export type dialogsType = {
    id: string
    name: string
    avatar: string
}

export type postsType = {
    id: string
    message: string
    name: string
    likesCount: number
    img: string
}

export type ProfilePageType = {
    posts: postsType[]
    newPostText:string
}

export type DialogsPageType = {
    messages: messagesType[]
    dialogs: dialogsType[]
    newMessageText: string
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:dialogsType[]
}

export type AppType = {
    state: StateType
    dispatch: (action: dispatchActionsType)=> void
    // addPost:(postMessage: string)=>void
    // updateNewPostText: (newText: string) => void
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile  posts={props.state.profilePage} dispatch={props.dispatch}/>}/>
                    <Route path='/dialog' render={() => <DialogsContainer data={props.state} dispatch={props.dispatch}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

