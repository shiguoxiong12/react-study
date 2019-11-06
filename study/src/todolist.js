/*
 * @Author: shiguoxiong
 * @Date: 2019-09-13 14:32:14 
 * @Description: 
 * Charles实现本地数据mock
 */
import React,{Fragment} from 'react'
import ListItem from './listitem'
class Todolist extends React.Component {
  constructor(props){
    super(props);
     this.state = {
        value: "",
        todolist:[]
    };
  }
  add(){
    
   // this.setState({  寫法1
    //    todolist:[...this.state.todolist,this.state.value]  //類似於push功能
   // })
   this.setState((prevState) => ({
      todolist:[...prevState.todolist,prevState.value]  //寫法2
   }),()=>{
     console.log(this)
     console.log(this.url.querySelectorAll("div").length)
   })
   
  }
  handleChange(v){
    console.log(v.target.value)
    this.setState({
      value:v.target.value
    })
  }
  delete(index){
    const list=[...this.state.todolist]
    list.splice(index,1);  //刪除數組指定下標的一項
    this.setState({
         todolist:list
    })
  }
  render(){
    return (
      <Fragment>
      <div className="Todolist">
          <label htmlFor="user">用戶</label>
          <input id="user" type='text'
           value={this.state.value} 
           onChange={this.handleChange.bind(this)}
           ref={(input) => {this.input=input}}
           />
          <button onClick={this.add.bind(this)}>提交</button>
      </div>
          <ul ref={(url)=>{this.url=url}}>
            { 
              this.state.todolist.map((val,index)=>{ 
                  return (
                  
                        <ListItem key={index} name={val} index={index} delteItem={this.delete.bind(this)}/>
                    )
              }) 
            } 
          </ul>
      </Fragment>
    );
    }
  }
 
  export default Todolist;