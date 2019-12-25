/*
 * @Author: shiguoxiong
 * @Date: 2019-09-13 13:54:11
 * @Description: 
 */
import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Todolist from './todolist'
import Login from './views/login'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
//import {HashRouter, Switch, Route } from 'react-router-dom';
import Amate from './anmate'
import Header from './components/header'
import Main from './views/main'
function App() {
  return (
    <div className="App">
         <HashRouter>
            <Header/>
            <Main/>
         </HashRouter>
    </div>
  )
} 

export default App;
