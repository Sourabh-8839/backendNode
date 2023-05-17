const http = require('http');

const handler =require('./project1idea');

console.log(handler.sometext);

const server = http.createServer(handler.handler);


server.listen(4000);



