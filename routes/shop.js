
const express = require('express');

const path =require('path');
const router = express.Router();
const rootDir =require('../path/path');
router.get('/',(req,res,next)=>{

    console.log('i am another middleware');
    res.sendFile(path.join(rootDir,'views','shop.html'));

})
router.get('/about',(req,res,next)=>{
   
    // console.log(req.header);
    console.log('i am first middleware');
    res.send(`<h1>hello express js</h1>`);

});

module.exports=router;