const http= require('http');
const fs=require('fs');
const server = http.createServer((req, res) => {
fs.readFile('frontend/form.html','utf-8',(err,data)=>{
    if(err){
        res.writeHead(500,{'Content-Type':'text/plain'});
        res.write('Internal Server Error');
    
    }
    else if(req.url==='/'){
        res.writeHead(200,{'content-Type':'text/html'});
        res.write(data);
    }
    else if(req.url==='/submit' && req.method==='POST'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<h1>Form submitted successfully!</h1>');
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
    }
    res.end();
})




});
server.listen(4000,()=>{
    console.log('Server running at http://localhost:4000/');
})


