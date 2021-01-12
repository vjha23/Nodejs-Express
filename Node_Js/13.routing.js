const http = require('http');

const routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end('Node routing');
    },
    '/aboutus': function aboutus(request, response) {
        response.end('This is about page');
    }
}

http.createServer(function (req, res) {
    if (req.url in routes) {
        return routes[req.url](req, res);
    }
}).listen(process.env.PORT || 8000);