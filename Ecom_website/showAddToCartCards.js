import products from "./api/products.json";
import { getCartProducts } from "./getCartProducts";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";

import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { billAmount } from "./billAmount";
import { showToast } from "./showToast";
// import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProducts()

let filterProducts = products.filter((curProd) => {
  return cartProducts.some((curElem) => curElem.id === curProd.id);
});

console.log(filterProducts);

// ! ALternative for above code where we are using array.Some()
// let fil=[];
// for(let j=0;j<products.length;j++){

//     for(let i=0;i<cartProducts.length;i++){
//         if(cartProducts[i].id===products[j].id){
//             fil.push(products[j]);
//         }
//        }
// }
// console.log(fil);
// !

// -----------------------------------------------------
// to update the addToCart page
// --------------------------------------------------------
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

const showCartProduct = () => {
  filterProducts.forEach((curProd) => {
    const { category, id, image, name, stock, price } = curProd;

    let productClone = document.importNode(templateContainer.content, true);

    const lSActualData = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;

    productClone.querySelector(".productQuantity").textContent =
      lSActualData.quantity;
    productClone.querySelector(".productPrice").textContent =`₹${lSActualData.price}`;

    // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    // !rmeoving element
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProdFromCart(id));

    cartElement.append(productClone);
  });
};

// -----------------------------------------------------
// Showing the cartProducts
// --------------------------------------------------------
showCartProduct();

// -----------------------------------------------------
// calculating the card total in our cartProducts page
// --------------------------------------------------------
// updateCartProductTotal();
    billAmount();
    document.querySelector('.f-mail').addEventListener('submit',(event)=>{
      event.preventDefault();
      showToast("submit");
      document.querySelector('.inputemail').value="";
  
  })
  