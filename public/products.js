var mysql = require('mysql');

var products = [
  {
   cat_id:"1",
  "items": [{
      "name": "Juice Ocean Spray Cranberry",
      "price": 6.8,
      "image": "https://i5.walmartimages.com/asr/7e005b10-8b96-4ecb-815d-0043f20d74c8_1.b28b6ea931ceb30657ae47adcaa5551f.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "sku": "3334"
    },
    {
      "name": "Rye Special Old",
      "price": 3.8,
      "image": "https://www.whiskyauctioneer.com/sites/default/files/IMG_4802_3.jpg",
      "sku": "3334"

    }, {
      "name": "Salmon - Atlantic, Skin On",
      "price": 9.2,
      "image":"https://thumb1.shutterstock.com/display_pic_with_logo/2615302/287243993/stock-photo-fresh-salmon-fillet-on-isolated-white-287243993.jpg",
      "sku": "3334"

    }, {
      "name": "Bar Granola Trail Mix Fruit Nut",
      "price": 8.0,
      "image":"http://www.taquitos.net/im/sn/Quaker-Trail-CPR.jpg",
      "sku": "3334"

    }, {
      "name": "Flour - All Purpose",
      "price": 8.6,
      "image":'http://www.kingarthurflour.com/products/all-purpose-flour/images/ap-flour-hero.jpg',
      "sku": "3334"

    }, {
      "name": "Butter Sweet",
      "price": 9.3,
      "image": 'https://0bb8856ba8259ec33e3d-a40599a114f3a4c6d0979c3ffe0b2bf5.ssl.cf2.rackcdn.com/0075450085150_CL_hyvee_default_large.jpeg',
      "sku": "3334"

    }, {
      "name": "Sugar - Monocystal / Rock",
      "price": 9.8,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN_6-bZp3kzGepoDtGbFuSBerYqNBoJKyS_cALXXu-OpYoDthG",
      "sku": "3334"

    }, {
      "name": "Ocean Spray - Ruby Red",
      "price": 8.7,
      "image":'https://i5.walmartimages.com/asr/bff06943-6a51-4a83-bd14-d1a1d2600c80_1.53cafa323ec3c9d46f20261108b05925.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
      "sku": "3334"

    }, {
      "name": "Mix Pina Colada",
      "price": 9.9,
      "image":'https://www.nestleprofessional.us/sites/g/files/gfb131/f/styles/product/public/media/sunsational-pina-colada-32oz-nestle-professional-food-service-380x380.png?itok=R0qpn6Kl',
      "sku": "3334"

    }
]},
{
 cat_id:"2",
"items": [{
      "name": "Cookies - Oreo, 4 Pack",
      "price": 7.6,
      "image":"https://cdn.shopify.com/s/files/1/0675/9787/products/9300650022652-M4.jpg?v=1481139325",
      "sku": "3334"

    }, {
      "name": "Mayonnaise",
      "price": 6.7,
      "image":"http://www.hellmanns.com/Images/380/380-1307401-Mayonnaise_Real_TG_300_335.png",
      "sku": "3334"

    }, {
      "name": "Turnip - White, Organic",
      "price": 8.0,
      "image":"https://thepaleomomcom-xt0mxgicgroc.stackpathdns.com/wp-content/uploads/2016/07/Turnips.jpg",
      "sku": "3334"

    }, {
      "name": "Bread - Dark Rye",
      "price": 1.7,
      "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh0REZuRwa7iZOMwewJt3siOYviCL2UBRX-ZEdcoGMbV6piIO",
      "sku": "3334"

    }, {
      "name": "Noodles - Cellophane, Thin",
      "price": 8.0,
      "image":"https://i5.walmartimages.com/asr/07940510-f7b7-4cb6-8e24-ecabe85648c4_1.e8336a3aa090033cece9e988ea4b140c.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "sku": "3334"

    }, {
      "name": "Crab - Dungeness, Whole, live",
      "price": 4.7,
      "image":"https://i5.walmartimages.com/asr/eb551b99-0327-4c41-9b67-56533be1feda_1.48e90b86a96500ee888f48b71b0f7cd3.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
      "sku": "3334"

    }, {
      "name": "Flour - Corn, Fine",
      "price": 4.0,
      "image":"https://img.tesco.com/Groceries/pi/823/5013531212823/IDShot_540x540.jpg",
      "sku": "3334"

    }, {
      "name": "Crab - Blue, Frozen",
      "price": 3.7,
      "image":"https://www.panamei.com/wp-content/uploads/2017/02/blue-crab-646x700.png",
      "sku": "3334"

    },
     {
      "name": "Wine - Winzer Krems Gruner",
      "price": 3.3,
      "image":"https://wine-searcher1.global.ssl.fastly.net/images/labels/72/91/weingut-winzer-krems-kremser-weinzierl-gruner-veltliner-kremstal-austria-10557291.jpg",
      "sku": "3334"

    }, {
      "name": "Fudge - Chocolate Fudge",
      "price": 2.5,
      "image":"https://wowprodmedia002aae.azureedge.net/content/wowproductimages/large/225676.jpg",
      "sku": "3334"

    },
    {
      "name": "Flour - Fast / Rapid",
      "price": 6.6,
      "image":"http://bakingbites.com/wp-content/uploads/2007/08/selfrising.jpg",
      "sku": "3334"

    },
     {
      "name": "Bread Bowl Plain",
      "price": 2.0,
      "image":"https://target.scene7.com/is/image/Target/13282447?wid=520&hei=520&fmt=pjpeg",
      "sku": "3334"


    }
   ]
 },//end cat id 2
  {
  cat_id:"3",
  "items": [
      {
        "name": "Potatoes - Fingerling 4 Oz",
        "price": 9.4,
        "image":"https://i5.walmartimages.com/asr/356c2e25-e7d8-4bbe-8ee4-63e0817e3603_1.33c82c6b6ccee901bce3d3b02ca484a7.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF",
        "sku": "3334"


      }, {
        "cat":"food",
        "name": "Peach - Halves",
        "price": 4.6,
        "image":"https://sc01.alicdn.com/kf/HTB1tLcBKpXXXXcrXXXXq6xXFXXXk/American-Delight-Canned-Peach-Halves.jpg",
        "sku": "3334"

      }, {
        "cat":"food",
        "name": "Pork - Ground",
        "price": 10,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUZQQo5CaaKbfs_a-7L_bghNYLcUg5t5g1phhDIqB2FNUB0_GTIQ",
        "sku": "3334"


      },
       {
       "cat":"food",
        "name": "Table Cloth 54x54 Colour",
        "price": 43,
        "image":"http://www.joleetablecloths.co.uk/ekmps/shops/jolee/images/red-and-white-gingham-pvc-vinyl-tablecloth-2224-p.jpg",
        "sku": "3334"


      }, {
        "name": "Cake Circle, Foil, Scallop",
        "price": 8.3,
        "image":"https://ae01.alicdn.com/kf/HTB1gwhHMpXXXXX7XpXXq6xXFXXXh/Free-Shipping-100pcs-8-Colorful-font-b-Foil-b-font-Disposable-Paper-Plates-Party-font-b.jpg",
        "sku": "3334"

      }, {
        "name": "Bols Melon Liqueur",
        "price": 8.7,
        "image":"http://www.aries-wineny.com/wp-content/uploads/2015/08/bols-melon-liqueur.png",
        "sku": "3334"


      }, {
        "name": "Bread - Raisin Walnut Oval",
        "price": 2.1,
        "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp4qFUaESpgKRvgX1TgpUYT_GIRtgcIvx3DGuQsko6LVt52NARDw",
        "sku": "3334"

      }, {
        "name": "Corn Kernels - Frozen",
        "price": 2.7,
        "image":"https://i5.walmartimages.com/asr/6aea438d-f810-41b4-a0ad-764f7f71cdb4_1.59c30bf62e11d3eb91123fb8da04a9e7.jpeg",
        "sku": "3334"

      }, {
        "name": "Beer - Sleeman Fine Porter",
        "price": 6.5,
        "image":"https://cdn.justwineapp.com/assets/beer/bottle/fernie-brewing-co-sap-sucker-maple-porter_1479423121.png",
        "sku": "3334"


      }, {
        "name": "Coffee - Dark Roast",
        "price": 7.0,
        "image":"https://images-na.ssl-images-amazon.com/images/I/81tV2cjE0AL._SY550_.jpg",
        "sku": "3334"
      }
    ]
  } //end cat 3
];

/***************************************************************************************************************/

  var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'6470464',
    database:'shopDB'
  });

function convert(products){

  con.connect(function(err){
      if(err) throw err;
          for (var i = 0; i < products.length; i++) {

          var item = products[i].items; //catagories

          for (var j = 0; j < item.length; j++) {
            var product = item[j];
            //push data
            var send = `INSERT INTO products(categories_id,product_name,product_price,product_picture,product_sku) VALUES
               (` + products[i].cat_id + ',"' + product.name + '","' + product.price + '","' + product.image + '",' + product.sku + ');'

            con.query(send, function(err) {
              if (err) throw err; })
            }
           }
      });
   }//end func

convert(products);
