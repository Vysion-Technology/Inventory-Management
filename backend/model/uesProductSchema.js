import mongoose from 'mongoose';

const useProductSchema = new mongoose.Schema({
    itemName:String,
    itemCode:String,
    itemPrice:Number,
    itemQuantity:Number,
    category:String,
    
},{timestamps:true}
)

const Usedproducts = mongoose.model('usedProduct',useProductSchema);

export default Usedproducts;