/*
 * @Author: shiguoxiong
 * @Date: 2019-09-20 20:55:26
 * @Description: 
 */
import { createStore } from 'redux'
import reducer from './reducer.js'
const store=createStore(reducer)
export default store