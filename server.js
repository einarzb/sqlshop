//require packages
var express = require('express');
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

var fs = require('fs');
var mysql = require('mysql');

//global var
var sendresult = [];
var prodID;
//setup directories for server access
app.use(express.static('public'));
app.use(express.static('node_modules'));

/******************** DB connection *************************/

  var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'6470464',
    database:'shopDB'
  });

  /******************** pull catagories *******************/
con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM categories", function(err, result, fields){
      if(err)throw err;

      //export data as script file to client side
      result = "var catagories= " + JSON.stringify(result);
      fs.writeFile("./public/" + 'cat.js', result, "utf8", function(err, data){
        if(err){
          console.log(err);
        }
      });
    });
});


/******************** let's move it *******************/

//load html
app.get('/', function(req, res){
  res.redirect("/index.html");
  res.end();
});


/******************** load products by Catagory id *******************/

app.get('/catagories', function(req, res) {
   var href = req.query;

   con.query('select * from products where categories_id=' + href.product + ';', function(err, result, fields) {
       if (err) throw err;
       console.log(href.product);
       sendresult = result;
       io.on('connection', function(socket) {
           console.log("Listening To Click")
           socket.emit('once', { sendresult: sendresult });
       });
   });

/******************** sending products to cart *******************/
io.on('connection', function(socket) {
        console.log("Listening To cart")
        //save prod_id from client
        socket.on('addtocart', function(data){
           prodID = data.prodID;
           //send prod_id to cart with qty 1
           con.query('INSERT INTO cart (product_id, qty) values (' + prodID + ', 1);', function(err, result, fields) {
               if (err) throw err;
               console.log("added product id " + prodID + " to cart");
               //add here if else for qty increment
           });
        });
}); //end connection

/******************** emiting inner join to get full data by cart product id *******************/

con.query('SELECT * FROM products INNER JOIN cart ON products.id = cart.product_id;', function(err, sendresult, fields) {
         if (err) throw err;
        //  console.log("successss");
        //  console.log(sendresult);

         io.on('connection', function(socket) {
                 console.log("EMITING inner join")
                 socket.emit('loadCartFromSql', {sendresult:sendresult});
         });
 });


/******************** building cart filled with products *******************/
io.on('connection', function(socket) {
        console.log("gonna fill the cart")
        socket.on('loadCartFromSql', function(data){
          console.log("im data");
          console.log(data);
          //  prodToCart = data.prodID;
           //send prod_id to cart with qty 1
          //  con.query('select * from cart (product_id);', function(err, result, fields) {
          //      if (err) throw err;
          //      console.log("added product id " + prodID + " to cart");
          //      //add here if else for qty increment
          //  });
        });
}); //end connection


    res.redirect("/products.html");
    res.end();
})

/******************** rockenroll *******************/

  server.listen(8000, function(){
    console.log("rockenroll 8000");
  });
