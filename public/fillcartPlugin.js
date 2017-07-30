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
    // checkCart(item);
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
  //client side

  //initialize
  var bill = 0;
  var qty = 0;
  var tr = $('<tr>');

  //create tds
  var productName = "<td class=table-title> " + item.selectedName + "</td>";
  var productPrice = "<td>" + item.selectedPrice + "</td>";
  var productQty = "<td><input type=number" + " " + 'min="1"' + "value=" + item.counter + " "  + "class=qty></input></td>";
  var removeBtn = "<td><a class='removeQuantity' href='#'>-</a></td>";

//calc bill
  bill = (item.counter * item.selectedPrice).toFixed();
  var productBill = "<td>" + bill + "</td>";

  //append everything to tr
  tr.append(productName,productPrice,productQty,productBill,removeBtn);

   //append tr to the cart
   $(".cartTable").append(tr);
   $("#bill").append(bill);
  return;
};
