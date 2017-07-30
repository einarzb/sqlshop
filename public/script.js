
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
        var selected = $(this).parent();
        var prodID = selected[0].id;
        var selectedName = $(this).parent().data().name;
        addToCart(prodID,selectedName);
      });

      function addToCart(prodID,selectedName){
        //server side
        socket.emit('addtocart', {prodID:prodID});
        //client side
        console.log(selectedName);
        return;
      };
});//end of document ready
