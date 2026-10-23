const http=require("http");
const server=http.createServer((requ,res)=>
{
   res.writeHead(200,
    {
        "content-type" :"text"

    });
 
 res.end("hello from node.js server!");
}
);

server .listen (3000,() => {

    console.log ("server running at http://localhost:3000");
});