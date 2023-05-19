const http = require('http');

const express = require('express');

const app = express();

app.use((req,res,next)=>{
   
    console.log(req.header);
    res.send({'key1':' value'});

});

app.use((req,res,next)=>{

    console.log('i am another middleware')


})

app.listen(4000);