/*
 * @Author: shiguoxiong
 * @Date: 2019-09-20 20:58:48
 * @Description: 
 */
import {change_value,change_list,delete_list_one} from './actionTypes.js'
const defaultState={
    inputValue:'shi',
    list:[1,2]
}

//reducer 裡面不允許改變state 所以必須先拷貝一份出來
export default (state=defaultState,action)=>{
   switch(action.type){
       case change_value:
          const newStore=JSON.parse(JSON.stringify(state)) //深拷備數據
          newStore.inputValue=action.val;
          console.log(state)
          return newStore;
       case change_list:
            const newStore2=JSON.parse(JSON.stringify(state)) //深拷備數據
            newStore2.list=[...newStore2.list,action.val];
            newStore2.inputValue=""
            console.log(state)
            return newStore2;
       case delete_list_one:
            const newStore3=JSON.parse(JSON.stringify(state)) //深拷備數據
            newStore3.list.splice(newStore3.list.findIndex(item => item===action.val),1)
            return newStore3;
       default:
          return state;

   }
     
  // return state;
}