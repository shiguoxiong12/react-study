import React,{Component} from 'react'
import {HashRouter, Switch, Route,Link} from 'react-router-dom';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
class BookTab extends Component{
    constructor(props){
        super(props)
        this.state={
            current:'熱門',
            TABS:[
                {
                    name:'熱門',
                    path:'/HOT'
                },
                {
                    name:'最新',
                    path:'/NEW'
                },
                {
                    name:'熱榜'
                }
            ]
        }
    }
    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    render(){
        return(
            <div style={{fontSize:'3px'}}>
            <Menu onClick={this.handleClick} style={{border:0,float:'left'}} selectedKeys={[this.state.current]} mode="horizontal">
                {
                   this.state.TABS.map(function(item){
                       return (
                      
                        <Menu.Item key={item.name}>
                          <Link to={item.path}>
                            <Icon type="mail" />
                               {item.name}
                            </Link>
                         </Menu.Item>
                      
                       )
                   }) 
                }
             </Menu>
             <HashRouter>
                 
              </HashRouter>
             </div>
        )
    }
}
export default BookTab