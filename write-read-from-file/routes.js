const fs = require('fs');

const routesHandler = (req, res) => {
    if(req.url === '/'){
        res.write('<html>');
        res.write('<title>My page</title>');
        res.write('<body>');
        const msg = fs.readFileSync('./msg.txt');
        res.write(msg);
        res.write('<form action="/msg" method="POST"><input type="text" name="msg"/><button type="submit">send</button></form>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }
    
    if(req.url === '/msg' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
    
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
    
            fs.writeFileSync('msg.txt', message);
    
            res.statusCode = 302;
            res.setHeader('Location', '/');
            
            return res.end();
        })
        return;
    }
}

module.exports = routesHandler;