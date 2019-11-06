/*
 * @Author: shiguoxiong
 * @Date: 2019-09-13 18:37:16
 * @Description: 
 */
import React from 'react'
import PropTypes from 'prop-types'
class ListItem extends React.Component{
    constructor(props){
        super(props)
        this.deleteItem=this.deleteItem.bind(this)
    }
    
    deleteItem(){
        const {delteItem,index}=this.props;
        delteItem(index)
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.name!==this.props.name){
            return true;
        }else{
            return false;
        }
        
    }
    render(){
        console.log("child render")
       return(
           <div key={this.props.index} onClick={this.deleteItem}>{this.props.name}</div>
       )
   }
   
}
ListItem.propTypes={ //設置傳的props數據的類型
    index:PropTypes.number.isRequired// 必須是數字類型,必填 oneoftype
    //index:PropTypes.oneOfType([PropTypes.number,PropTypes.string])
}
ListItem.defaultProps={  //組件默認的props
    test:"hello word"
}
export default ListItem;