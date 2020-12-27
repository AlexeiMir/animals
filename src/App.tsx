import './scss/app.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from "./pages/Home";
import Profile from "./pages/Profile";


function App() {

    return (
        <div className="wrapper">
            <Sidebar/>
            <Switch>
                <Route path={"/"} component={Home}/>
                <Route path={"/cat/:catId"} component={Profile}/>
            </Switch>
        </div>
    );
}

export default App;
