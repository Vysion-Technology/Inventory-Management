import express from 'express';
import {productUpload,getProduct,upDateProduct} from '../controller/product_controller.js';

const router = express.Router();

router.post('/products',productUpload);

router.get('/getProducts',getProduct);

router.put('/products/:id',upDateProduct);

export default router;