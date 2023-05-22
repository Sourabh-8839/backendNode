
const express = require('express');

const path =require('path');
const router = express.Router();

const shopController = require('../controllers/addProduct');

router.get('/',shopController.shophome);

router.get('/about',(req,res)=>{
   
    // console.log(req.header);
    console.log('i am first middleware');
    res.send(`<h1>hello express js</h1>`);

});

module.exports=router;