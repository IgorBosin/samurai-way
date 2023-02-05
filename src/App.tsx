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

type messageType = {
    id: number
    message: string
}

type dialogsType = {
    id: number
    name: string
}

type postsType = {
    id: number
    message: string
    name: string
    likesCount: number
    img: string
}

type AppType = {
    message: messageType[]
    posts: Array<postsType>
    dialogs: dialogsType[]
}

function App(props: AppType) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile posts={props.posts}/>}/>
                    <Route path='/dialog' render={() => <Dialogs message={props.message} dialogs={props.dialogs}/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;

