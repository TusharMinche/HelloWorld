const http = require('http');

const server = http.createServer((req, res) => console.log('Tushar'));

server.listen(4000);