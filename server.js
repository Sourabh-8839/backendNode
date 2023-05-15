
const http = require('http');

const server =http.createServer((req,res)=>{

 
   if(req.url==="/"){
      res.end('radhe');
      
   }
   if(req.url==='/about'){
      res.end('this our short page');
   }

    res.end(`<h1>Oops</h1>
      <p>we can't find that you seem it</p>
      <a href="/">back to homepage</a>
   `);

});

server.listen(4000);