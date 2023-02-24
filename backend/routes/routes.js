import express from 'express';
import {productUpload,getProduct} from '../controller/product_controller.js';

const router = express.Router();

router.post('/products',productUpload);

router.get('/getProducts',getProduct);

export default router;