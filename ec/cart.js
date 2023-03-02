class productItems{
  productCode = "";
  productImageUrl = "";
  productAlt = "";
  productName = "";
  productPiece= "";
  productPrice= "";
}
class Product {
  constructor(product) {
      this.product = product;
  }
}

class productList {
  constructor(){
    this.productList = []
  }
  newProduct(product){
    let p = new Product(product)
    this.productList.push(p)
    return p
  }
  get allProduct(){
    return this.productList
  }
  get numberOfProduct(){
      return this.productList.length
  }
}
var productlist = new productList();

function productCreate(productItems1) {
   var buttonFirst = document.createElement("button");
   buttonFirst.innerText = "-";
   buttonFirst.className = "btn border border-secondary";

   var buttonCenter = document.createElement("button");
   buttonCenter.innerText = productItems1.productPiece;
   buttonCenter.className = "btn border border-secondary";

   var buttonEnd = document.createElement("button");
   buttonEnd.innerText = "+";
   buttonEnd.className = "btn border border-secondary";

   var inputGroup = document.createElement("div");
   inputGroup.className = "input-group p-3";

   inputGroup.appendChild(buttonFirst);
   inputGroup.appendChild(buttonCenter);
   inputGroup.appendChild(buttonEnd);

   var productCodeTd = document.createElement("td");
   productCodeTd.innerText = productItems1.productCode;
   productCodeTd.className = "align-middle";
   productCodeTd.scope = "row";

   var img = document.createElement("img");
   img.src = productItems1.productImageUrl;
   img.alt = productItems1.productAlt;
   img.width = "64";
   img.height = "64";

   var productName = document.createElement("span");
   productName.innerText =productItems1.productName;

   var productTd = document.createElement("td");
   productTd.appendChild(img);
   productTd.appendChild(productName);

   var orderPieceTd = document.createElement("td");
   orderPieceTd.appendChild(inputGroup);

   var orderPriceTd = document.createElement("td");
   orderPriceTd.className = "align-middle text-dark";
   orderPriceTd.innerText = productItems1.productPrice;

   var tr = document.createElement("tr");
   tr.appendChild(productCodeTd);
   tr.appendChild(productTd);
   tr.appendChild(orderPieceTd);
   tr.appendChild(orderPriceTd);
   
   return tr;

}

function setPrice(){
  var totalPrice = 0;

  for (const element of this.productlist.allProduct) {
    var product = element.product;

    totalPrice += parseInt(product.productPrice) * parseInt(product.productPiece);

    document.getElementById("totalprice").innerText = totalPrice + "$";
  }
 
}

function setProduct(){

  var listItem = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : '';

  for (const key in listItem) {
    var product = listItem[key].product

    var tr = productCreate(product);

    document.getElementById("cart").appendChild(tr);
    document.getElementById("cart-lenght").innerText = this.productlist.numberOfProduct;

  }
  setPrice();

}

window.addEventListener('load', (event) => {

    var product1 = new productItems();
    product1.productCode = "15432";
    product1.productImageUrl = "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-17.png";
    product1.productAlt = "Fashion";
    product1.productName = "MODA Süper Oversize Basic Unisex";
    product1.productPiece = "1";
    product1.productPrice = "10$";

    var product2 = new productItems();
    product2.productCode = "15433";
    product2.productImageUrl = "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-18.png";
    product2.productAlt = "Fashion";
    product2.productName = "MODA Süper Oversize Basic";
    product2.productPiece = "2";
    product2.productPrice = "20$";

    var product3 = new productItems();
    product3.productCode = "15434";
    product3.productImageUrl = "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-19.png";
    product3.productAlt = "Fashion";
    product3.productName = "MODA Süper Oversize ";
    product3.productPiece = "5";
    product3.productPrice = "30$";

    this.productlist.newProduct(product1);
    this.productlist.newProduct(product2);
    this.productlist.newProduct(product3);

    localStorage.setItem('product', JSON.stringify(this.productlist.allProduct));

    setProduct();

});