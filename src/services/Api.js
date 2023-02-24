// import react from 'react';
import axios from 'axios';

const url = 'http://localhost:8000'

export const addProduct = async (product) => {
    try{
        return await axios.post(`${url}/products`,product);
    }catch(error){
        console.log("error while calling api",error.message);
    }
} 
 
export const getProduct = async () => {
    try{
        const response = await axios.get(`${url}/getProducts`);
        console.log(response);
        return response;
    }catch(error){
        console.log("error while calling api",error.message);
    }
} 
