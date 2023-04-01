import axios from 'axios';
import * as action from '../constants/itemConstant';

const url = 'http://localhost:8000';


export const getItems = () => async(dispatch)=>{
    try{
        const { data } = await axios.get(`${url}/getProducts`);
        console.log(data); 
        dispatch({type: action.GET_PRODUCT_SUCCESS, payload: data })
    }catch (error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload:error.message});
    }
};

export const usedItem = () => async(dispatch)=>{
    try{
        const { data } = await axios.get(`${url}/getUseProducts`);
        console.log(data); 
        dispatch({type: action.GET_USE_PRODUCT_SUCCESS, payload: data })
    }catch (error){
        dispatch({type: action.GET_USE_PRODUCT_FAIL, payload:error.message});
    }
};
