import React,{Component} from 'react'
import { Input,Row, Col } from 'antd';
import Navbar from './nav.js'
import SubNav from './subNav'
import './header.css'
const { Search } = Input;
class Header extends Component{
    render(){
        return(
            <div id="top" style={{backgroundColor:'#fff'}}>
                <Row className="nav-wraper">
                <Col span={4}>
                <img data-v-3732c85f="" src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" class="logo-img"/>
                </Col>
                 <Col span={10}>
                    <Navbar/>
                 </Col>
                 <Col span={10}>
                   <div id="topRight" className="nav-item">
                    <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                    />&nbsp;&nbsp;&nbsp;&nbsp;
                      <span data-v-3732c85f="" class="nav-item submit"><img data-v-3732c85f="" src="https://b-gold-cdn.xitu.io/v3/static/img/submit-icon.53f4253.svg" class="icon"/><span data-v-3732c85f="">写文章</span></span>
                      &nbsp;&nbsp;&nbsp;&nbsp;
                      <span data-v-3732c85f="" class="nav-item auth"><span data-v-3732c85f="" class="login">登录</span><span data-v-3732c85f="" class="register">注册</span></span>
                     </div>
                     </Col>
                    </Row>
                    {/* <Row>
                       <Col span={2}>
                        </Col>
                       <Col span={20}>
                         <SubNav/>
                        </Col>
                        <Col span={2}>
                        </Col>
                    </Row> */}
             </div>
          
        )
    }
} 
export default Header
