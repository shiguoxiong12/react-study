import React, { Component,Suspense, lazy } from 'react';
import {HashRouter, Switch, Route,Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import Home from "../home/index"
import HOT from "../hot/index"
export default class Main extends Component{
    render(){
         // React 16.6 or higher
        // 使用Suspense做Code-Splitting
        //https://github.com/rocky-191/react-juejin/issues/1
        const withSuspense = (Component) => {
            return (props) => (
                <Suspense fallback={<Spin />}>
                    <Component {...props} />
                </Suspense>
            )
        }
        const Home = withSuspense(lazy(() => import("../home/index")))
        const Page = withSuspense(lazy(() => import("../page/index")))
        const NEW = withSuspense(lazy(() => import("../new/index")))
        const HOT = withSuspense(lazy(() => import("../hot/index")))
        const pins = withSuspense(lazy(() => import("../pins/index")))
        const topics = withSuspense(lazy(() => import("../topics/index")))
        const events = withSuspense(lazy(() => import("../events/index")))
        const books = withSuspense(lazy(() => import("../books/index")))
        return (
        
            <Switch>    
                {/* <Redirect from='/' exact to='/HOT'/> */}
                <Route  path="/" exact>
                    <Redirect  to='/index'/>
                </Route>
                <Route  path="/index"  component={Home}/>
           
               <Route    path='/pins' component={pins} />
               <Route   path='/topics' component={topics} />
               <Route   path='/events' component={events} />
               <Route   path='/books' component={books} />
           </Switch>
         
        )
    }
}