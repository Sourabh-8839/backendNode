
const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{

    console.log('i am another middleware');
    res.send('home page');

})
router.get('/about',(req,res,next)=>{
   
    // console.log(req.header);
    console.log('i am first middleware');
    res.send(`<h1>hello express js</h1>`);

});

module.exports=router;