import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Login from "./Components/Login/Login";

const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/dialog' render={() => <DialogsContainer/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/login' render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;

