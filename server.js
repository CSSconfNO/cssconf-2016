var express = require('express');
var app = express();

app.use(express.static('dist'));

var port = process.env.PORT || 9000;
app.listen(port, function() {
  console.log('CSSconf Nordic 2016 website running at http://localhost:' + port + '/');
});