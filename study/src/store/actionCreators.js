/*
 * @Author: shiguoxiong
 * @Date: 2019-09-21 12:07:53
 * @Description: 
 */
//統一創建actions
import {change_value,change_list,delete_list_one} from './actionTypes'
export const changeValue=(val)=>({   
        type:change_value,
        val
})
export const changeList=(val)=>({   
    type:change_list,
    val
})
export const deleteListOne=(val)=>({   
    type:delete_list_one,
    val
})