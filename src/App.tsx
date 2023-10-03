import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import Music from "./Components/Music/Music";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import {Login} from "Components/Login/Login";
import {connect} from "react-redux";
import {appInitialized, AppInitialStateType} from "Redux/appReducer";
import {compose} from "redux";
import {AppRootStateType} from "Redux/store";
import Preloader from "Components/common/Preloader/Preloader";

const mapStateToProps = (state: AppRootStateType): MapStatePropsType => {
    return {
        isInitialized: state.app.isInitialized
    }
}

class App extends React.Component<PropsType, AppInitialStateType> {
    componentDidMount() {
        this.props.appInitialized()
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader/>
        }
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
}

export default compose<React.ComponentType>(
    withRouter, // сначала оборач в withRouter и получ доп.св-ва (id в строке браузера)
    connect(mapStateToProps, {appInitialized}),
)(App)

type PropsType = MapDispatchPropsType & MapStatePropsType
type MapDispatchPropsType = {
    appInitialized: () => void
}
type MapStatePropsType = {
    isInitialized: boolean
}

