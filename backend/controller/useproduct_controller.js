import Usedproducts from '../model/uesProductSchema.js';

export const usedProductUpload = async(req,res)=>{
    try{
        const item = req.body;
        await Usedproducts.insertMany(item);
        res.status(200).send(`Used data has been stored in database..... `)
    }catch(error){
        console.log("error while inserting data to database....",error.message);
    }
}

export const getUsedProduct = async(req,res)=>{
    try{
        
        const data = await Usedproducts.find();
        console.log(data);
        res.status(200).json(data);
    }catch (error){
        console.log("error while getting product",error.message);
        res.status(200).send("server error");
    }
}