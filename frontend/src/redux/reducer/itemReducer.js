import * as actionType from '../constants/itemConstant';


export const getItemReducer =(state={items: []},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return {
                items:action.payload
            }
        case actionType.GET_PRODUCT_FAIL:
            return {
                error:action.payload
            }
        default:
            return state;
    }
} 