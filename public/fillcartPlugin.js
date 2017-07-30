var socket = io.connect('http://localhost:8000/');

function fillcart(data){
  //if cart is empty
  if (!data){
    return;
  }

  var prod;
  var productsToCart = data.sendresult;

  for (var i = 0; i < productsToCart.length; i++) {
      var shop = $("#shop");

      var myProduct = {
        "title": productsToCart[i].product_name,
        "price": productsToCart[i].product_price,
        "image": productsToCart[i].product_picture,
        "sku": productsToCart[i].product_sku,
        "id" :productsToCart[i].id
      }

      var datas = 'data-price=' + myProduct.price + ' ' + 'data-name="' + myProduct.title + '" ';

      prod = $("<li id=" + myProduct.id + " " + datas + ">" + "<p class=title>" + myProduct.title + "</p>" + "<img class=prod-img src=" + myProduct.image + ">" + " " + '<p class=sku>' + myProduct.sku + '</p>' + '<span class="price">' + myProduct.price +  " $" + '</span>' +  '<button class=addToCart> add </button>' + "</li>");
      //appened object to shop
      $(shop).append(prod);
  }
};//end fillcart


function addToCart(selectedItem){

  //client side
    var prodID = selectedItem[0].id;
    var selectedName = selectedItem.data().name;
    var selectedPrice = selectedItem.data().price;
    var counter = 1;

    //create object
    var item = {
      selectedName:selectedName,
      selectedPrice:selectedPrice,
      counter:counter
    }
    //invoke functions
    checkCart(item);
    fillCart(item);

    //server side
    socket.emit('addtocart', {prodID:prodID});
    return;
};

function checkCart(item){
  console.log("im in checkCart function");
  console.log(item);
  return;
}

function fillCart(item){
  console.log("im in fillcart function");
  console.log(item);
  return;
}
