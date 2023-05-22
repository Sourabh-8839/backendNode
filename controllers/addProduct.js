
const path = require('path');
const rootDir =require('../path/path');

exports.shophome =(req,res)=>{
    res.sendFile(path.join(rootDir,'views','shop.html'));

};


exports.getAddproducts = (req,res,next)=>{

    res.sendFile(path.join(rootDir,'views','add-product.html'));
}

exports.postProducts =(req,res,next)=>{

   
    res.redirect('/admin/add-product');
}