var http = require('http');
var fs = require('fs');
var express = require("express");
var gd_app = express();

gd_app.post("/create", function(req, res){
  console.log('------------------');
  console.dir(req);
  res.redirect('/');
});

var app = http.createServer(function(request,response){
    url = '/participation_application.html';
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(3000);