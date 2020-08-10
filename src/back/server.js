var express = require('express');


var app = express();

app.get('/scores', function(req, res) {
    res.send('Salut');
});

app.use(function(req, res, next){
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
