var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.sendFile(__dirname + "/src/index.html");
})

var server = app.listen(3000, function () {
   var host = server.address().address
   var port = server.address().port
})