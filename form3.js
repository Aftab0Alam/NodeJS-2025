const http=require ("http");
const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=="/"){
 resp.write(`<form  action ="/submit" method="post">


    <input type="text name="name" placeholder="enetr your name" required>
    <br>
    <input type ="email" name="email" placeholder="enter your email" required>
    <br>
    <button type="sunmit">submit</button>
    </form>`)
 }
 else if(req.url=="/submit"){
    resp.write('<h1>Form submitted successfully!</h1>');
 }
else{
    resp.write('<h1>404 Not Found</h1>');
    resp.write('<p>The page you are looking for does not exist.</p>');
}
    resp.end();


});
server.listen(3035,()=>{
    console.log('Server running at http://localhost:3035/');
});