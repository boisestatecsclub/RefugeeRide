var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'front-end', 'dist', 'front-end')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'dist', 'front-end','index.html'));
});

app.listen(8080);

module.exports = app;
