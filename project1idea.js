
const fs = require('fs');
const { Module } = require('module');



const handler =(req,res)=>{
    const url = req.url;
    const method=req.method;

    if(url==='/'){

        fs.readFile('./content/messageStore.txt','utf-8',(err,data)=>{
        
        if(err){
            console.log(err);
        }
        res.write('<html>')
        res.write('<head><title>this is my first project</title></head>');
        res.write(`<body><p>${data}</p></body>`);
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form></body>');
        res.write('</html>')
       return res.end();
       });

      
    }

    if( url==='/message' && method ==='POST'){
      
        const body=[];
       
        req.on('data', (chunk)=>{
                 body.push(chunk);
        })
        
        return req.on('end', ()=>{

            const bodyParse = Buffer.concat(body).toString();
            const message =bodyParse.split('=')[1];
           
            fs.writeFile('./content/messageStore.txt',message,(err)=>{
                res.write(`<p>${message}</p>`)
                res.statusCode =302;
                res.setHeader('Location','/');
        
                return res.end();
            });
            
        });
        
       
    }
}

module.exports={
    handler:handler,
    sometext:"radhe shyam"
};