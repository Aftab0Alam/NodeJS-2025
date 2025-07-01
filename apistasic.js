const http
    = require('http');
     const serever = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello, World!</h1>\nThis is a simple API server using Node.js');   
});
serever.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});