const http = require('http');
const fs = require('fs');
const server=http.createServer((req, res) => {  
  

    fs.readFile('frontend/form.html', 'utf-8', (err, data) => {
        if (err) {

            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Internal Server Error');
        }
        else if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();

        } else if (req.url === '/submit') {
            res.writeHead(200, { 'Content-Type': 'text/html' });
             let databody=[];
            req.on('data', chunk => {
                databody.push(chunk);
            });
            req.on('end', () => {   
                const body = Buffer.concat(databody).toString();
                const formData = new URLSearchParams(body);
                const name = formData.get('name');
                const email = formData.get('email');
                const message = formData.get('message');

                res.write(`<h1>Form submitted successfully!</h1>`);
                res.write(`<p>Name: ${name}</p>`);
                res.write(`<p>Email: ${email}</p>`);
                res.write(`<p>Message: ${message}</p>`);
                res.end();

            });
        }
        
        
        else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write('<h1>404 Not Found</h1>');
            res.write('<p>The page you are looking for does not exist.</p>');
            res.end();

        }


});

});server.listen(5000, () => {
    console.log('Server running at http://localhost' + ':' + 5000 + '/');
});