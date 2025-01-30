
import { itemInCart } from "./itemInCarts";

export const getCartProducts=()=>{

    const localStorageItems=JSON.parse(localStorage.getItem("cartProductsLS"));
    if(!localStorageItems){
        return [];
    }

    
    itemInCart(localStorageItems);

    return localStorageItems;

}
