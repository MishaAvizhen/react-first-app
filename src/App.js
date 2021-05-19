import React from "react";
import './App.css';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Dialogs from "./components/dialogs/Dialogs";
import Profile from "./components/profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/news/News";
import Music from "./components/music/Music";
import Settings from "./components/settings/Settings";


const App = (props) => {
    return (
        <div className='app'>
            <Header/>
            <Navbar/>
            <div className='app-content'>
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatcher={props.dispatcher}/>}/>
                <Route path='/dialogs' render={() => <Dialogs store={props.store}/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    )
}

export default App;
