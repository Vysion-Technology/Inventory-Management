import express from 'express';
import Products from '../model/productSchema.js';

// import fs from
export const productUpload = async(req,res)=>{
    try{
        // const exit = await Products.findOne({itemcode:req.body.itemcode});
        // console.log(req.body);
        // if(exit){
        //     return res.status(401).send("already exited");
        // }

        // const data = fs.readFileSync(SampleData)
        // console.log(data);

        // console.log("controller working");
        // const newProduct = new Products(item);
        // await newProduct.save();

        const item = req.body;
        await Products.insertMany(item);
        // console.log(0)
        res.status(200).send(`CSV file data has been stored in database..... `)
    }catch(error){
        console.log("error while inserting data to database....",error.message);
    }
}




export const getProduct = async(req,res)=>{
    try{
        
        const data = await Products.find();
        console.log(data);
        res.status(200).json(data);
    }catch (error){
        console.log("error while getting product",error.message);
        res.status(200).send("server error");
    }
}

export const upDateProduct = async(req,res)=>{
    try{
        const product = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true});
        if(!product){
            res.status(404).send("product not found");
        }
        res.status(200).json({message:"product updated successfully"})
    }catch (error){
        console.log("error while updating product",error.message);
        res.status(500).send("server error");
    }
}


export const deleteProduct = async(req,res)=>{
    const Id = req.params.id;
    try{
        await Products.findByIdAndDelete(Id);
        res.status(200).json({message:"product deleted successfully"})
    }catch (error){
        console.log("error while deleting product",error.message);
        res.status(500).send("server error");
    }
}
