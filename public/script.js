
$(document).ready(function(){

  var socket = io.connect('http://localhost:8000/');

  socket.on('once', function(data){
  fillcart(data);
  socket.off();
  return;
  });

function fillcart(data){
  //if cart is empty
  if (!data){
    return;
  }

  var prod;

  var productsToCart = data.sendresult;
    for (var i = 0; i < productsToCart.length; i++) {
      var shop = $("#shop");
      // var myProduct = {
      //   "title": productsToCart[i].product_name,
      //   "price": productsToCart[i].product_price,
      //   "image": productsToCart[i].product_picture,
      //   "sku": productsToCart[i].product_sku
      // }
      var id = productsToCart[i].id;
      var title = productsToCart[i].product_name;
      var price = productsToCart[i].product_price;
      var image = productsToCart[i].product_picture;
      var sku = productsToCart[i].product_sku;

      //append object element and styles
      prod = $("<li id=" + id +">" + "<p class=title>"+ title + "</p>" +  "<img class=prod-img src=" + image + ">" + " " + '<p class=sku>' + sku + '</p>' + '<span class="price">' + price +  " $" + '</span>' +  '<button class=addToCart> add </button>' + "</li>");

      //appened object to shop
      $(shop).append(prod);
    }
// socket.disconnect();

};//end fillcart

      //display cart from main Cart Icon
      $("body").on('click', ".openCart", function () {
         $('#cart').toggle();
      });

      //add-to-cart
      $("body").on('click', ".addToCart", function () {
        $('#cart').css('display','block');
        var selected = $(this).parent();
        var prodID = selected[0].id;
        addToCart(prodID);
      });

      function addToCart(prodID){
        socket.emit('addtocart', {prodID:prodID});
        return;
      };
});//end of document ready
