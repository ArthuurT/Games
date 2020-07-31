var express = require('express');
var sudoku = require('sudoku')


var app = express();

app.get('/', function(req, res) {
    res.send(sudoku.makepuzzle().toString());
});

app.use(function(req, res, next){
    res.status(404).send('Page introuvable !');
});

app.listen(8080);
