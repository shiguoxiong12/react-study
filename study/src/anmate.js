/*
 * @Author: shiguoxiong
 * @Date: 2019-09-14 18:48:24
 * @Description: 
 */
import React,{Fragment} from 'react'
import './style.css'
class Amate extends React.Component{
    constructor(props){
        super(props)
        this.state={
            show:true
        }
    }
    render(){
        return(
            <Fragment>
            <div className={this.state.show ? 'show' : 'hide'}>hello</div>
              <button onClick={()=> {
                  this.setState({
                  show:!this.state.show
                 })  }}
              >toogle</button>
            </Fragment>
        )
    }
}
export default Amate