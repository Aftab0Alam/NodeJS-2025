const http=require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(req.url);
    if(req.url=='/'){
    res.write(`
        
    <form action="/submit" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>  
        <br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <br>    
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea> 
        <br>
        <button type="submit">Submit</button>   
    </form>

        `);}
    else if(req.url=='/submit'){
        res.write('<h1>Form submitted successfully!</h1>');
    }
    else{   
        res.write('<h1>404 Not Found</h1>');
        res.write('<p>The page you are looking for does not exist.</p>');
    }   
    res.end();
});
server.listen(3010, () => {
    console.log('Server running at http://localhost:3010/');
});