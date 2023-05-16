
const http = require('http');

const server =http.createServer((req,res)=>{

   if(req.url==='/'){

      res.write('<html>')
      res.write('<head><title>this is my first project</title></head>');
      res.write('<body><h1>Welcome to my node js project</h1></body>');
      res.write('</html>')

      res.end();
   }

   if(req.url==='/home'){
     return res.end('Welcome home');    
   }
   if(req.url==='/about'){
      return res.end('Welcome to About Us page');
   }

   if(req.url==='/node'){
      return res.end('Welcome to my Node Js project')
   }

   res.end(`<h1>Oops</h1>
      <p>we can't find that you seem it</p>
      <a href="/">back to homepage</a>
   `);

});

server.listen(4000);