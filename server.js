//require packages
var express = require('express');
var app = express();
var fs = require('fs');

//setup directories for server access
app.use(express.static('public'));
app.use(express.static('node_modules'));

//DB
var mysql = require('mysql');

  var connect = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'6470464',
    database:'shopDB'
  });



  //load website
  app.get('/', function(req, res){
    res.send("./index.html");
    res.end();
  });




  app.listen(4000, function(){
    console.log("rockenroll 4000");
  });
