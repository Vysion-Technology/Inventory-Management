import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    itemName:String,
    itemCode:String,
    itemPrice:Number,
    itemQuantity:Number,
    category:String,
    
},{timestamps:true,}
)

const Products = mongoose.model('product',productSchema);

export default Products;