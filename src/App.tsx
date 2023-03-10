import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";

export type messagesType = {
    id: number
    message: string
}

export type dialogsType = {
    id: number
    name: string
    avatar: string
}

export type postsType = {
    id: number
    message: string
    name: string
    likesCount: number
    img: string
}

export type ProfilePageType = {
    posts: postsType[]
}

export type DialogsPageType = {
    messages: messagesType[]
    dialogs: dialogsType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar:dialogsType[]
}

export type AppType = {
    state: StateType
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar sidebar={props.state.sidebar}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.state.profilePage}/>}/>
                    <Route path='/dialog' render={() => <Dialogs data={props.state.dialogsPage}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;

