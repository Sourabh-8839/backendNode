const express = require('express');

const path =require('path');
const router = express.Router();

const productController =require('../controllers/addProduct');

router.get('/add-product',productController.getAddproducts)

router.post('/add-product',productController.postProducts);


module.exports=router;