const http = require("http");
 
const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader("content-text","plane/test");
    res.end("start programming");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("server start at port ",8000)
});