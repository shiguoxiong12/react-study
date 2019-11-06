/*
 * @Author: shiguoxiong
 * @Date: 2019-09-20 20:33:11
 * @Description: 
 */
import React,{Component} from 'react';
import { Input,Button,List, Typography  } from 'antd';
import 'antd/dist/antd.css';
import store from './store'
import {changeValue,changeList,deleteListOne} from './store/actionCreators.js'
class Todolist extends Component{
    constructor(props){
       super(props)
       this.state=store.getState()
       this.changeValue=this.changeValue.bind(this)
       this.storeChange=this.storeChange.bind(this)
       this.handlerClick=this.handlerClick.bind(this)
       this.deleteItem=this.deleteItem.bind(this)
       store.subscribe(this.storeChange) //訂閱store的改變 ,每次store 變化 就觸發一次
       //console.log(store.getState())
    }
    storeChange(){
        this.setState(store.getState())  //每次store 改變 ，觸發這個方法改變組件state
    }
    deleteItem(val){
        store.dispatch(deleteListOne(val))
    }
    handlerClick(){
        let val=this.state.inputValue;
        
        store.dispatch(changeList(val))
    }
    changeValue(e){
        let val=e.target.value;
        
        store.dispatch(changeValue(val))
    }
    render(){
        return(
                <div style={{marginTop:"10px",marginLeft:"10px"}}>
                    <Input value={this.state.inputValue} placeholder="請輸入" style={{width:"300px",marginRight:"10px"}}
                    onChange={this.changeValue}
                    />
                    <Button type="primary" onClick={this.handlerClick}>提交</Button>
                    {this.state.inputValue}
                    <List style={{width:"300px",marginTop:"20px"}}
      bordered
      dataSource={this.state.list}
      renderItem={item => (
        <List.Item onClick={this.deleteItem.bind(this,item)}>
            <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
                </div>
        )
    }
}
export default Todolist