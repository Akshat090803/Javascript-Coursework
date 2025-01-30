import { getCartProducts } from "./getCartProducts";
import { itemInCart } from './itemInCarts';
import { showToast } from "./showToast";



getCartProducts()

export const addToCart=(event,id,stock)=>{

    const currentCard=document.querySelector(`#card${id}`);
    let Quantity=currentCard.querySelector('.productQuantity').innerText;
    let price=currentCard.querySelector('.productPrice').innerText;
    // doing typecasting using Number() and removing Rs sign using slice
    

    price=Number(price.slice(1)); 
   
    
    

    let cart=getCartProducts();

// ! chexking if item exist or not
   console.log("id =",id)
   let existingProd=cart.find((curr)=> curr.id == id);
   
   if(existingProd && Quantity >1){
    Quantity=Number(existingProd.Quantity) + Number(Quantity);
    price=price*Quantity;
    let updatedCart={id,Quantity,price};
    updatedCart = cart.map((currProd)=>{
        return currProd.id==id ? updatedCart:currProd;
    });
    localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));

    // show toast when product added to the cart if quantity >1
    showToast("add", id);

    

   }

   if(existingProd){
    if(Quantity<=1){

        // show toast when product exist 
        showToast("exist", id);
    }
    return false;
   }
    


    console.log(price)
    // console.log(p.slice(1))
    
    
    Quantity=Number(Quantity);
    price=price*Quantity
    cart.push({id,Quantity,price});
    localStorage.setItem("cartProductsLS",JSON.stringify(cart));

   // show toast when product added to the cart if quantity=1
    showToast("add",id);

   
    itemInCart(cart);
    

}

// getCartProducts()

// -----------------------------------------------------
// to add the data into localStorage
// --------------------------------------------------------
// export const addToCart = (event, id, stock) => {
//   let arrLocalStorageProduct = getCartProducts()

//   const currentProdElem = document.querySelector(`#card${id}`);
//   let quantity = currentProdElem.querySelector(".productQuantity").innerText;
//   let price = currentProdElem.querySelector(".productPrice").innerText;
//   //   console.log(quantity, price);
//   price = price.replace("₹", "");

//   let existingProd = arrLocalStorageProduct.find(
//     (curProd) => curProd.id === id
//   );

//   console.log(existingProd);

//   if (existingProd && quantity > 1) {
//     quantity = Number(existingProd.quantity) + Number(quantity);
//     price = Number(price * quantity);
//     let updatedCart = { id, quantity, price };

//     updatedCart = arrLocalStorageProduct.map((curProd) => {
//       return curProd.id === id ? updatedCart : curProd;
//     });
//     console.log(updatedCart);

//     localStorage.setItem("cartProductsLS", JSON.stringify(updatedCart));
  //  // show toast when product added to the cart
    // showToast("add", id);
//   }

//   if (existingProd) {
//     // alert("bhai duplicate hai");
//     return false;
//   }

  
//   price = Number(price * quantity);
//   quantity = Number(quantity);

//   arrLocalStorageProduct.push({ id, quantity, price });
//   localStorage.setItem("cartProductsLS", JSON.stringify(arrLocalStorageProduct));

//   //update the cart button value
//   itemInCart(arrLocalStorageProduct);

//   //show toast when product added to the cart
// //   showToast("add", id);
// };
