import express from 'express';
import {productUpload,getProduct,upDateProduct,deleteProduct} from '../controller/product_controller.js';

const router = express.Router();

router.post('/products',productUpload);

router.get('/getProducts',getProduct);

router.put('/products/:id',upDateProduct);

router.delete('/products/:id',deleteProduct);

export default router;