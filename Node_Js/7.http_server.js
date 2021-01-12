// how to create http server in node

const http = require('http');

const hostname = '127.0.0.1';
const port = 3001;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.write('Welcome to HTTP server');
    res.end();
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})