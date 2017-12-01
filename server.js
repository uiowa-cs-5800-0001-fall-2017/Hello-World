var express = require('express'),
  app = express(),
  http = require('http'),
  httpServer = http.Server(app);

app.use(express.static(__dirname + '/'));

app.get('/', function(req, res) {
  res.sendfile(__dirname + '/index.html');
});
var port = process.env.PORT || 3000;
app.listen(port);
