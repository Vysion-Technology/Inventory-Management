import express from 'express';
import {productUpload,getProduct,upDateProduct,deleteProduct} from '../controller/product_controller.js';
import {usedProductUpload,getUsedProduct} from '../controller/useproduct_controller.js'

const router = express.Router();

router.post('/products',productUpload);

router.post('/useProducts',usedProductUpload);

router.get('/getProducts',getProduct);

router.get('/getUseProducts',getUsedProduct);

router.put('/products/:id',upDateProduct);

router.delete('/products/:id',deleteProduct);

export default router;