const http = require('http');
const path = require('path')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const adminRouter= require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact');

app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public','css')))

app.use('/admin',adminRouter);
app.use('/shop',shopRouter);
app.use(contactRouter);
app.use((req,res,next)=>{

    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    
})


app.listen(4000);

