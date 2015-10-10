var express = require('express');
var bodyParser = require('body-parser');

var operations = require('./lib/operations')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = 8888;

app.post('/', function(req, res){

  var json = JSON.parse(req.body.query);

  if (json) {
    if (json.op && json.ops) {
      var result = String(operations.operation(json.op, json.ops));
      res.send(result);
    } else {
      res.send("null")
    }
  } else {
    res.send("null")
  }

});

var server = app.listen(port);
console.log("App listening in port %s", port)
