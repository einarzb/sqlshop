
$(document).ready(function(){

  var socket = io.connect('http://localhost:8000/');

  socket.on('once', function(data){
  fillcart(data);
  socket.off();
  return;
  });

/********************************* general functions ****************************************************/

  //display cart from main Cart Icon
  $("body").on('click', ".openCart", function () {
     $('#cart').toggle();
  });

  //add-to-cart
  $("body").on('click', ".addToCart", function () {
    $('#cart').css('display','block');
    var selectedItem = $(this).parent();
    addToCart(selectedItem);
  });




});//end of document ready
