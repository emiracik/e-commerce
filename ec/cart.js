class productItems1{
  productCode = "";
  productImageUrl = "";
  productAlt = "";
  productName = "";
  productPiece= "";
  productPrice= "";
}

var totalPrice = 0;

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

function cartAppend(){

 var c = new productItems1();
 c.productCode = "15432";
 c.productImageUrl = "https://new.axilthemes.com/demo/template/etrade/assets/images/product/fashion/product-17.png";
 c.productAlt = "Fashion";
 c.productName = "MODA Süper Oversize Basic Unisex";
 c.productPiece = "1";
 c.productPrice = "10$";

 totalPrice += parseInt(c.productPrice) * parseInt(c.productPiece);


 var tr = productCreate(c);

 document.getElementById("cart").appendChild(tr);

 document.getElementById("totalprice").innerText = totalPrice + "$";
}