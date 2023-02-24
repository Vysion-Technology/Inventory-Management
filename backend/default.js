import SampleData from './defaultPrudoct.js';
import products from './model/productSchema.js'

const defaultData = async() =>{
    try{
        await products.deleteMany({});
        await products.insertMany(SampleData);
        console.log("data stored successfully into database........")
    }catch{
        console.log("error while data storing database......",error.message)
    }
}

export default defaultData;