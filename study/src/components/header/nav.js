import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;
class Navbar extends Component{
    constructor(props){
        super(props)
     //   this.state=store.getState()
       // this.changeValue=this.changeValue.bind(this)
      //  this.storeChange=this.storeChange.bind(this)
      //  this.handlerClick=this.handlerClick.bind(this)
      //  this.deleteItem=this.deleteItem.bind(this)
       // store.subscribe(this.storeChange) //訂閱store的改變 ,每次store 變化 就觸發一次
        //console.log(store.getState())
        this.state={
            current: '首页',
            navs:[
                {
                    name:"首页",
                    path:"/"
                },
                {
                    name:"沸点",
                    path:"/pins"
                }, {
                    name:"话题",
                    path:"/topics"
                }
                , {
                    name:"小册",
                    path:"/books"
                },
                {
                    name:"活动",
                    path:"/events"
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
      componentDidMount(){
         console.log(this.props)
      }
    render(){
        return(
            <Menu onClick={this.handleClick} style={{border:0}} selectedKeys={[this.state.current]} mode="horizontal">
                {
                   this.state.navs.map(function(item){
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
        )
    }
} 
export default Navbar