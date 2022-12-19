const http = require("http");
 
const server = http.createServer((req,res)=>{
    console.log(req.method,req.url)
    res.statusCode = 200;
    res.setHeader("content-text","plane/test");
    if(req.url === ("/")){
        res.end("home");
    }
    else if (req.url === "/about")
{
    res.end("about");
}
    
    else
    res.end("error");
    
    
});

server.listen(5000,"127.0.0.1",()=>{
    console.log("server start at port ",5000)
});
