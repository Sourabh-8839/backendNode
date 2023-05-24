
const path = require('path');
const rootDir =require('../path/path');

const Products = require('../models/product');

exports.shophome =(req,res)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));

};


exports.getAddproducts = (req,res,next)=>{

    Products.fetchAll( product=>{
        res.sendFile(path.join(rootDir,'views','add-product.html'))});

 
   
}

exports.postProducts =(req,res,next)=>{

    const product = new Products(req.body.name);
    product.save();
//    Products.push(req.body.name);

//    console.log(req.body.name);
//    console.log(Products);
    res.redirect('/admin/add-product');
}

