var createError = require('http-errors');
var express = require('express');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'front-end', 'dist', 'front-end')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end', 'dist', 'front-end','index.html'));
});
app.get('/deploy', (req, res) => {
  console.log("Deploy!");
  exec('./deployment-script.sh', (err, out) => {
    if (err) {
      console.error(err);
    } else {
      console.log(out);
    }
  });
});
app.listen(8080);

module.exports = app;
