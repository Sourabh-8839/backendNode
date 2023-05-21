
const express = require('express');
const path = require('path')
const router = express.Router();
const rootDir =require('../path/path');


router.get('/contact',(req,res)=>{

    res.sendFile(path.join(rootDir,'views','contactus.html'));
})

router.post('/success',(req,res)=>{



    res.sendFile(path.join(rootDir,'views','success.html'));
    
})


module.exports = router