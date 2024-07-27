const http = require('http');

const server = http.createServer((req, res) => {

    res.write('<html>');
    res.write('<title>My page</title>');
    res.write('<body>');

    if( req.url === '/home'){
        
        res.write('<body><h1>Welcome home</h1></body>')
        
    }

    if( req.url === '/about'){
        
        res.write('<h1>Welcome to About Us page</h1>')
        
    }
    
    if( req.url === '/node'){
        
        res.write('<h1>Welcome to my Node Js project</h1>')
        
    }

    res.write('</body>');
    res.write('</html>');
});

server.listen(4000);