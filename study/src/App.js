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
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Amate from './anmate'
function App() {
  return (
    //  <div>
    //     <Todolist/>
    //     <Amate/>
    //  </div>
    <Router>
    <Switch>
        {/* <Route exact path="/" render={ () => <Redirect to="/apply" push /> } />
        <Route path="/404" component={ ErrorPage } />
        <Route path="/login" render={() => {
            return this.props.id_token ?  <Redirect to="/" /> : <Login />
        }} />
        <Route render={ () => <IndexLayout /> } /> */}
          {/* <Route path="/" component={ Login } />

    </Switch>
</Router>
  );
} */}

export default App;
