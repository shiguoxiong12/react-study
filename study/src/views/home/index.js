import React,{Component,Suspense,lazy} from 'react'
import './home.css'
import { Route,Link } from 'react-router-dom';
import { Spin } from 'antd';
import BookTab from './bookTab.js'

class Home extends Component{
    render(){
        const withSuspense = (Component) => {
            return (props) => (
                <Suspense fallback={<Spin />}>
                    <Component {...props} />
                </Suspense>
            )
        }
        const NEW = withSuspense(lazy(() => import("../new/index")))
const HOT = withSuspense(lazy(() => import("../hot/index")))
      let {match}=this.props;
      console.log(match)
        return(

            <div id="home" style={{backgroundColor:'#fff'}}>
               {/* 我是
               <BookTab/> */}
               {/* <ul>
                    <li><Link to="/">click NEW</Link></li>
                    <li><Link to="/HOT">cliock HOT</Link></li>
                </ul> */}
                <Route exact path={match.url} component={NEW} />
                {/* <Route exact path={`/HOT`}  component={HOT} /> */}
                {/* <Route path={`/timeline/:tagType`} render={(props) => <div><HOT/></div>}/> */}
            </div>
        )
    }
}
export default Home