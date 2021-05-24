import React from "react";
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import UsersContainer from "./components/users/UsersContainer";


const App = (props) => {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <div className='app-content'>
                <Route path='/profile' render={() => <Profile store={props.store}/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    )
}

export default App;
