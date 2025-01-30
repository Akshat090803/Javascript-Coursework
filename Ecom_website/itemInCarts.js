import { getCartProducts } from "./getCartProducts";

export const itemInCart=(cart)=>{
    let totalItemsDisplay=document.querySelector('#itemsInCart');
    // here we are getting data from localstorage as an array


    // let totalCartArray=JSON.parse(localStorage.getItem("cartProductsLS"));
                         // !or
    // let totalCartArray=getCartProducts();
   
    // using array length to get length of array in order to get No.of items
    let totalCart=cart.length;
    
    totalItemsDisplay.innerText=totalCart;

    console.log(totalCart)

}