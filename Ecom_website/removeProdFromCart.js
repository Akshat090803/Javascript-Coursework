import { billAmount } from "./billAmount";
import { getCartProducts } from "./getCartProducts";
import { itemInCart } from "./itemInCarts";
import { showToast } from "./showToast";

export const removeProdFromCart=(id)=>{
    let cartProducts = getCartProducts();
    cartProducts=cartProducts.filter((curr)=>{
        return curr.id != id;
    })
    localStorage.setItem("cartProductsLS",JSON.stringify(cartProducts));

    let removediv=document.getElementById(`card${id}`);
    // removediv.innerHTML="";
   
    
// to remove div on click
    if(removediv){

        removediv.remove();

        // show toast on removinng product
        showToast("delete",id);
    }
    // used dom crud operation\\

    // update cartItem No
    itemInCart(cartProducts);
    // ! bill amunt update
    billAmount();

    console.log(cartProducts);

}