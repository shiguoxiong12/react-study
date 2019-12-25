import React,{Component} from 'react';
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
class SubNav extends Component{
    constructor(props){
        super(props)
        this.state={
            current: '推荐',
            navs:[
                {
                    name:"推荐",
                    path:"/"
                },
                {
                    name:"后端",
                    path:""
                }, {
                    name:"前端",
                    path:""
                }
                , {
                    name:"Android",
                    path:""
                },
                {
                    name:"iOS",
                    path:""
                },
                {
                    name:"人工智能",
                    path:""
                },
                {
                    name:"开发工具",
                    path:""
                },
                {
                    name:"代码人生",
                    path:""
                },
                {
                    name:"阅读",
                    path:""
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
            <Menu onClick={this.handleClick} style={{border:0,fontSize:'13px'}} selectedKeys={[this.state.current]} mode="horizontal">
                {
                   this.state.navs.map(function(item){
                       return (
                        <Menu.Item key={item.name}>
                            <Icon type="mail" />
                            {item.name}
                         </Menu.Item>
                       )
                   }) 
                }
               
               
             </Menu>
        )
    }
} 
export default SubNav