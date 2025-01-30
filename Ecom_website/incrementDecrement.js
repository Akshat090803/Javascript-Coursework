import { billAmount } from "./billAmount";
import { getCartProducts } from "./getCartProducts";
// import { updateCartProductTotal } from "./updateCartProductTotal";


export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  //   ----------------------------------------
  //   Get the data from localStorage
  //   ----------------------------------------
  let localCartProducts = getCartProducts();
  let existingProd = localCartProducts.find((curProd) => curProd.id === id);

  if (existingProd) {
    quantity = Number(existingProd.Quantity);  //make Q capital in existing.Quantity
    localStoragePrice = Number(existingProd.price);
  } else {
    localStoragePrice = price;
    price = price;
  }
console.log(localStoragePrice);
console.log('price',price)
if(event.target.classList.contains('cartIncrement')){
    if(quantity<stock){
      quantity++;
      
    }
    if(quantity==stock){
      quantity=stock;
    }
      
  }

  // decrement
  if(event.target.classList.contains('cartDecrement')){
      if(quantity>1){
        quantity--;
       
       
      }
     
        
    }

  //   finally we will update the price in localStorage
  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updatedCart = { id, Quantity:quantity, price: localStoragePrice };

  updatedCart = localCartProducts.map((curProd) => {
    return curProd.id === id ? updatedCart : curProd;
  });
  //   console.log(updatedCart);
  localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

  //   also we need to reflect the changes on the screen too
  productQuantity.innerText = quantity;
  productPrice.innerText = `₹ ${localStoragePrice}`;

  billAmount();

  
  // -----------------------------------------------------
  // calculating the card total in our cartProducts page
  // --------------------------------------------------------
//   updateCartProductTotal();
};
