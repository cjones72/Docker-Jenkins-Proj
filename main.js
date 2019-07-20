var http = require('http');

var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Project One Docker Jenkins\n");
});

server.listen(8000);
console.log("Server listening at http://172.31.1.18:8000/");