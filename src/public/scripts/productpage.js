
  window.addEventListener("load", function () {
    let count = JSON.parse(localStorage.getItem("cart")).length;
    let notify = document.getElementById("lblCartCount");
    notify.innerText = count;

    let countw = JSON.parse(localStorage.getItem("wishlist")).length;
    let notifyw = document.getElementById("lblwishlistCount");
    notifyw.innerText = countw;
  });

  var sizebtn = document.getElementsByClassName("sizebtn");
  var btnid = document.getElementById("forbutton");
  var i;

  for (i = 0; i < sizebtn.length; i++) {
    let divdisply = document.createElement("div");
    sizebtn[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this;
      if (content.style.backgroundColor == "white") {
        content.style.backgroundColor = "black";
        content.style.color = "white";
        divdisply.innerText = "Selected Size Available";
        btnid.append(divdisply);
      } else {
        content.style.backgroundColor = "white";
        content.style.color = "black";
        divdisply.innerText = "";
        btnid.append(divdisply);
      }
    });
  }

  function checkdelivery() {
    let btnD = document.getElementById("deliverybtn");
    let deliveryP = document.getElementById("deliveryadd");

    let div = document.createElement("div");
    div.style.color = "red";

    btnD.onclick = function () {
      let pinD = document.getElementById("deliverypin").value;
      if (pinD == 580001 || pinD == 510001) {
        div.style.color = "green";
        div.innerText = "Standard Delivery within 5-7 days";
      } else if (pinD == "") {
        div.style.color = "red";
        div.innerText = "Invalid Pincode";
      } else {
        div.style.color = "red";
        div.innerText = "Sorry, Delivery option not available";
      }
    };
    deliveryP.append(div);
  }
  checkdelivery();

  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  if (localStorage.getItem("cart") === null) {
    localStorage.setItem("cart", "[]");
  }
  let myTshirts = localStorage.getItem("myTshirts");

  myTshirts = JSON.parse(myTshirts);

  let crtbtn = document.getElementById("cartbtn");

  crtbtn.onclick = function () {
    let count = JSON.parse(localStorage.getItem("cart")).length;
    let tshirts = undefined;
    myTshirts.forEach(function (product, n) {
      if (n == 0) {
        tshirts = product;
      }
    });

    let notify = document.getElementById("lblCartCount");
    count++;
    notify.innerText = count;

    cart = JSON.parse(localStorage.getItem("cart"));

    cart.push(tshirts);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Get the modal
  var modal = document.getElementById("myModal");
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("proimg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // wichlist function

  if (localStorage.getItem("wishlist") === null) {
    localStorage.setItem("wishlist", "[]");
  }

  let wishbtn = document.getElementById("wishlistbtn");

  wishbtn.onclick = function () {
    let countw = JSON.parse(localStorage.getItem("wishlist")).length;
    let tshirts = undefined;
    myTshirts.forEach(function (product, n) {
      if (n == 0) {
        tshirts = product;
      }
    });

    let notifyw = document.getElementById("lblwishlistCount");
    countw++;
    notifyw.innerText = countw;

    wishlist = JSON.parse(localStorage.getItem("wishlist"));

    wishlist.push(tshirts);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  };

  `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link
      rel="shortcut icon"
      type="image/jpg"
      href="https://prodstatic.shoppersstop.com/_ui/responsive/theme-ssl/images/favicon.ico"
    />
    <title>Solid Cotton Slim Fit Mens T-Shirt | Shoppersstop.com</title>
    <link href="./singleprod.css" rel="stylesheet" />
  </head>

  <body>
    <div id="navbar">
      <div id="left">
          <a href="#" class="navcont"><inline><img src="https://image.flaticon.com/icons/png/512/126/126122.png"> </inline>All Stores</a>
          <a href="#" class="navcont"><inline><img src="https://image.flaticon.com/icons/png/512/1034/1034153.png"></inline> Contact Us</a>
          <a href="#" class="navcont"><inline><img src="https://image.flaticon.com/icons/png/512/159/159704.png"></inline> Category</a>
      </div>
      <div id="img">
          <img src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/sslogo.svg" id="logo" onclick="location.href='../home.html'" />
      </div>
      <div id="right">
          <input type="search" placeholder="Search your product" />
          <div>
              <button type="button" onclick="location.href='../wishlist.html'">
          <img src="https://static.thenounproject.com/png/1788381-200.png" />
        </button>
              <span class="badgew badge-warningw" id="lblwishlistCount"> </span>
          </div>
          <div>
              <button type="button" onclick="location.href='../cart.html'">
          <img src="https://static.thenounproject.com/png/4175872-200.png" />
        </button>
              <span class="badge badge-warning" id="lblCartCount"> </span>
          </div>
          <button type="button" onclick="location.href='../sign_in.html'">
        <img src="https://static.thenounproject.com/png/3465520-200.png" />
      </button>
      </div>
  </div>
    <div id="category">
      <p>BARGAINS</p>
      <p>WOMEN</p>
      <p>KIDS</p>
      <p>BEAUTY</p>
      <p>MEN</p>
      <p>HOMESTOP</p>
      <p>CROSSWORD</p>
      <p>BRANDS</p>
      <p>GIFTS</p>
      <p>DISCOVER</p>
    </div>
    <div id="direc">
      Home > Men > Clothing > T-Shirts & Polos > ${description}
    </div>
    <div id="prodinfo">
      <div id="leftcont">
        <ul id="gallery">
          <img
            style="border: 1px solid gray; border-radius: 4px"
            src="${image-1(main-image_itself)}"
          />
          <img
            src="${image-2}"
          />
          <img
            src="${image-3}"
          />
          <img
            src="${image-4}"
          />
          <img
            src="${image-5}"
          />
        </ul>
        <div id="mainimg">
          <img
            src="${main-iamge}"
            id="proimg"
          />
          <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01" />
            <div id="caption"></div>
          </div>
          <div style="font-size: 10px">Click to zoom in the product</div>
        </div>
      </div>
      <div id="proddescription">
        <div id="rightcont">
          <h3 id="brandname">${brand}</h3>
          <div id="empty"></div>
          <div id="prodspname">${description}</div>
          <div id="empty"></div>
          <p>
            Rs ${paying_price} <inline style="color: #777">MRP</inline>
            <inline style="text-decoration: line-through; color: #777"
              >Rs${MRP_Price}</inline
            >
            <inline style="color: rgb(245, 90, 90) ;"> (${offer_percent}% Off)</inline>
            Includes all taxes
          </p>
          <div id="empty"></div>
          <p style="color: #777">
            <inline style="font-size: 28px">220</inline> People Have Viewed This
            Product Recently!
          </p>
          <div id="empty"></div>
          <div style="font-weight: bold">
            1 OFFERS|<inline style="font-size: 12px"
              >Buy any 1 of <a href="#">Select Mens Wear</a> and Flat 50%
              Off</inline
            >
          </div>

          <div id="empty"></div>
          <div>
            <div id="empty"></div>
            <p>select color</p>
            <div id="empty"></div>
            <img
              id="colorimg"
              src="https://sslimages.shoppersstop.com/sys-master/images/h4e/h7e/16536303566878/S21T-01BA-040WH_WHITE.jpg_276Wx400H"
              style="
                width: 50px;
                height: 60px;
                float: left;
                border-radius: 5px;
                border: 1px solid gray;
              "
              value="orange"
            />
            <div id="empty"></div>
          </div>
          <div id="empty"></div>
          <div id="forbutton">
            <div>SELECT SIZE</div>
            <!-- <div id="empty"></div> -->
            <button type="button" class="sizebtn">LARGE</button>
            <button type="button" class="sizebtn">MEDIUM</button>
            <button type="button" class="sizebtn">SMALL</button>
            <button type="button" class="sizebtn">X-LARGE</button>
            <button type="button" class="sizebtn">X-SMALL</button>
            <button type="button" class="sizebtn">XXL</button>
          </div>
          <div id="empty"></div>
          <button type="button" id="cartbtn">ADD TO BAG</button>
          <div id="empty"></div>
          <button type="button" id="wishlistbtn">ADD TO WISHLIST</button>
          <div style="display: flex; flex-direction: row; gap: 5%">
            <div class="tinycont">
              <inline
                ><img
                  src="https://image.flaticon.com/icons/png/512/4729/4729227.png"
                  style="width: 30px; height: 30px" /></inline
              >100% Authentic products
            </div>
            <div class="tinycont">
              <inline
                ><img
                  src="https://img-premium.flaticon.com/png/512/3796/premium/3796180.png?token=exp=1629873728~hmac=9c0b888af08ab25c490a4e7cd38f9e77"
                  style="width: 30px; height: 30px" /></inline
              >Free shipping
            </div>
            <div class="tinycont">
              <inline
                ><img
                  src="https://img-premium.flaticon.com/png/512/4114/premium/4114865.png?token=exp=1629873966~hmac=02c74d238ea471ddd26664d74bdd1826"
                  style="width: 30px; height: 30px" /></inline
              >Express store pick-up
            </div>
          </div>
          <div id="empty"></div>
          <h3>Delivery Services</h3>
          <div id="empty"></div>
          <div>
            Enter your Pincode to check the delivery time and free pick up
            options
          </div>
          <div id="deliveryadd">
            <input
              type="pincode"
              id="deliverypin"
              placeholder="Enter Pincode"
              style="
                border: 1px solid gray;
                height: 40px;
                width: 200px;
                background-color: rgb(240, 240, 240);
                border-radius: 5px;
              "
            />
            <button
              type="button"
              id="deliverybtn"
              style="
                background-color: white;
                color: rgb(245, 90, 90);
                border: none;
              "
            >
              check
            </button>
          </div>
          <div id="delivery">
            <div>COD might be available</div>
            <a href="#" style="text-decoration: none; color: rgb(245, 90, 90)"
              >click here to know our delivery policy</a
            >
          </div>
          <hr />
          <div id="delivery2">
            <div>EXPRESS STORE PICK UP</div>
            <div>Can't wait for your order? Get it early!</div>
          </div>
          <hr />
          <div id="delivery3">
            <div>14 DAYS EASY RETURNS AND EXCHANGE</div>
            <div>
              We offer free and easy return to get 100% refund and exchange
              through courier pickup or you can exchange most items bought
              online at any of our stores. Click here for our Return and
              Exchange policy
            </div>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="collapsible">
      ADDITIONAL PRODUCT DETAILS & CARE<span>+</span>
    </button>
    <div class="content">
      <div>
        <h4>Product Description</h4>
        <p>
          A must-have in your wardrobe, the Printed Cotton Regular Fit Men's
          T-Shirt indeed ticks all the right boxes. Designed in an attractive
          printed pattern, this coral men’s t-shirt features a crew neck and
          short sleeves. Crafted from soft and lightweight cotton with a regular
          fit, this men’s t-shirt assures comfort all through the wear. You need
          not look any further if you want to buy men’s t-shirt online.
        </p>
        <div>Product code: S21183RNP456C_CORAL</div>
        <div>Need help?<a href="#"> Contact us</a></div>
      </div>
      <div>
        <ul style="list-style-type: none; float: left">
          <li>Country of Origin</li>
          <li>Category</li>
          <li>Sleeves</li>
          <li>Fit</li>
          <li>Neckline</li>
          <li>Pattern</li>
          <li>Fabric</li>
          <li>Pack of</li>
          <li>Occasion</li>
        </ul>
        <ul style="list-style-type: none; float: right">
          <li>India</li>
          <li>T-shirt</li>
          <li>short sleeves</li>
          <li>Regular</li>
          <li>Crew</li>
          <li>Printed</li>
          <li>Cotton</li>
          <li>Single</li>
          <li>Casual</li>
        </ul>
      </div>
      <div>
        <div>
          <h3>CARE INSTRUCTIONS</h3>
          Machine wash
        </div>
        <div id="empty"></div>
        <div>
          <h3>DISCLAIMER:</h3>
          <inline
            >Colors of the product might appear slightly different on digital
            devices.</inline
          >
        </div>
      </div>
    </div>
    <hr />
    <button type="button" class="collapsible">STYLE NOTES<span>+</span></button>
    <div class="content">
      <p>.</p>
    </div>
    <hr />

    <button type="button" class="collapsible">BRAND INFO<span>+</span></button>
    <div class="content">
      <p>
        The Spykar story started way back in 1992, when Mr. Prasad Pabrekar led
        by ambition ventured into fashion apparels and accessories to make use
        of his vast repertoire of technical knowledge in processing of denim
        garments. You can reach out to Brand at: 022-42101900 or
        feedback@spyker.com.
      </p>
    </div>
    <hr />

    <button type="button" class="collapsible">
      REVIEWS & RATINGS<span>+</span>
    </button>
    <div class="content">
      <p><a href="#">Write a review</a></p>
    </div>
    <hr />

    <div id="more">
      <button type="button" class="morebtn">
        <a href="#" style="text-decoration: none; color: rgb(245, 90, 90) ;"
          >MORE T-SHIRTS & POLOS BY LIFE</a
        >
      </button>
      <button type="button" class="morebtn">
        <a href="#" style="text-decoration: none; color: rgb(245, 90, 90)"
          >MORE PRODUCTS BY LIFE</a
        >
      </button>
      <button type="button" class="morebtn">
        <a href="#" style="text-decoration: none; color: rgb(245, 90, 90)"
          >MORE T-SHIRTS AND POLOS</a
        >
      </button>
    </div>

    <div style="height: 150px; width: 100%; background-color: #f5f5f5">
      <img
        src="/img/f1.PNG"
        style="float: left; margin-left: 7%; height: 100%; width: 20%"
      />
      <img
        src="/img/f2.PNG"
        style="float: left; margin-left: 10%; height: 100%; width: 30%"
      />
      <img
        src="/img/f3.PNG"
        style="float: left; margin-left: 15%; height: 100%; width: 10%"
      />
    </div>
    <div style="height: 150px; width: 100%; margin-top: 80px">
      <img
        src="/img/f4.PNG"
        style="width: 20%; height: 100%; margin-left: 7%"
      />
      <img
        src="/img/f5.PNG"
        style="width: 20%; height: 100%; margin-left: 15%"
      />
      <img
        src="/img/f6.PNG"
        style="width: 20%; height: 100%; margin-left: 15%"
      />
    </div>

    <div id="main">
      <ul style="list-style-type: none">
        <p>CUSTOMER</p>
        <li><a href="#">HELP/FAQS</a></li>
        <li><a href="#">TRACK ORDER</a></li>
        <li><a href="#">SIZE GUIDE</a></li>
        <li><a href="#">BUYING GUIDE</a></li>
        <li><a href="#">HOW DO I SHOP?</a></li>
        <li><a href="#">HOW DO I PAY?</a></li>
        <li><a href="#">FIND PLACES WE DELIVER</a></li>
        <li><a href="#">STYLE HUB</a></li>
      </ul>
      <ul style="list-style-type: none">
        <p>POLICIES</p>
        <li><a href="#">TERMS OF USE</a></li>
        <li><a href="#">PRIVACY</a></li>
        <li><a href="#">DELIVERY POLICY</a></li>
        <li><a href="#">EXCHANGES & RETURNS</a></li>
      </ul>
      <ul style="list-style-type: none">
        <p>STORE AND SITES</p>
        <li><a href="#">ABOUT US</a></li>
        <li><a href="#">CONTACT US</a></li>
        <li><a href="#">CORPORATE SITE</a></li>
        <li><a href="#">STORE LOCATOR</a></li>
        <li><a href="#">CAREERS</a></li>
        <li><a href="#">SITEMAP</a></li>
      </ul>
      <ul style="list-style-type: none">
        <p>DELIGHTFUL PROGRAMS</p>
        <li><a href="#">INSTANT GIFTING</a></li>
        <li><a href="#">EXPRESS STORE PICK UP</a></li>
      </ul>
      <ul style="list-style-type: none">
        <p>FIRST CITIZEN</p>
        <li><a href="#">FIRST CITIZEN</a></li>
      </ul>
      <ul style="list-style-type: none">
        <p>REACH US</p>
        <li><a href="#">FOR ANY QUERY PLEASE EMAIL US</a></li>
        <li><a href="#">customercare@shoppersstop.com</a></li>
        <select
          style="
            width: 260px;
            height: 40px;
            background-color: black;
            color: white;
            border-color: white;
            margin-top: 30px;
          "
        >
          <option>BRANDS</option>
          <option>SPYKAR</option>
          <option>LIFE</option>
          <option>ALLEN SOLLY</option>
          <option>BUFFALO</option>
          <option>CROCODILE</option>
          <option>BEING HUMAN</option>
          <option>NIKE</option>
          <option>ADIDAS</option>
          <option>ALCIS</option>
        </select>
      </ul>
    </div>
  </body>
</html>
<script src="./productpage"></script>
`