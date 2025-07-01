 const http=require ('http');
    const server=http.createServer((req,res) =>{
    
    res.writeHead(200,{'Content-Type': 'text/html'});

    if(req.url=='/'){
    res.write(`
        <form action="/submit" method="post">
        <input type="text" name="name" placeholder="Enter your name" required>
        <br>
        <input type="email" name="email" placeholder="Enter your email" required>
        <br>

        <button type="submit">Submit</button>
        </form>
        `);
    }
        else if(req.url==='/submit'){
            res.write('<h1>Form submitted successfully!</h1>');
        }
        else{
            res.write('<h1>404 Not Found</h1>');
            res.write('<p>The page you are looking for does not exist.</p>');
        }
res.end();
}) ;

server.listen(3020, () => {
    console.log('Server running at http://localhost:3020/');
});