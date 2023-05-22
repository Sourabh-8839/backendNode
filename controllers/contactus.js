const path = require('path');

const rootDir =require('../path/path');

exports.contactus =(req,res)=>{

    res.sendFile(path.join(rootDir,'views','contactus.html'));
};


exports.successfile=(req,res)=>{
    res.sendFile(path.join(rootDir,'views','success.html'));
    
}