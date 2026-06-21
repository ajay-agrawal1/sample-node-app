const http = require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello from Jenkins Docker Project');
});

server.listen(3000);

console.log("Application Started");
