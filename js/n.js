var https=require('http');
https.createServer(function(req,res)
{
    res.writeHead('Hello world!');
}).listen(8080);
