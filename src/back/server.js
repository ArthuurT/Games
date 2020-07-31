var http = require('http');
var markdown = require('markdown').markdown;

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end(markdown.toHTML('Bienvenue sur la page **Games** !'));
});

server.listen(8080);
