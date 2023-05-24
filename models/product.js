

const fs= require('fs');
const path = require('path')
const rootDir =require('../path/path');
// const Products = [];
const pt = path.join(rootDir,'data','product.json');

const getFileContent=(cb)=>{

    fs.readFile(pt,'utf-8',(err,data)=>{
        if(err){
            cb([]);
        }
        else
        cb(JSON.parse(data));
    })
}
module.exports = class products{

    constructor(name){
        this.name = name
    }

    save(){
        
      getFileContent(product=>{

        product.push(this);

        fs.writeFile(pt,JSON.stringify(product),(err)=>{

           console.log(err);
        });
      })



}


    static fetchAll(cb){        
        getFileContent(cb);
    }
}