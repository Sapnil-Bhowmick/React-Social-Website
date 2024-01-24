// import './Css.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import React, {
useState,
useEffect
} from "react";

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import  Friends from './Pages/Friends';
import myposts from './Layout/myposts';
import Photos from './Layout/Photos';
import Music from './Pages/Music';









const Navigation=()=> {
  return (
    <Router>
        <Routes>
            <Route exact path="/" Component={Home}/>
            <Route exact path="/myprofile" Component={Profile}/>
            <Route exact path="/friends" Component={Friends}/>
            <Route exact path="/myposts" Component={myposts}/>
            <Route exact path="/photos" Component={Photos}/>
            <Route exact path="/music" Component={Music}/>
        </Routes>
    </Router>
  );
}




export default Navigation;
