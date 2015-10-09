var express = require('express');
var bodyParser = require('body-parser');

var operations = require('./lib/operations')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var port = 8888;

app.post('/', function(req, res){

  var json = req.body;
  if (json !== {}) {
    if (json.op && json.ops) {
      res.json({
        result:operations.operation(json.op, json.ops)
      });
    }
  }

});

var server = app.listen(port);
console.log("App listening in port %s", port)
