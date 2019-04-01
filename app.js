var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')

var app = express();

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'front-end', 'dist', 'front-end')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'dist', 'front-end','index.html'));
});

app.post('/account/create/test', (req, res) => {
  console.log(req.body)
});


app.listen(8080);

module.exports = app;
