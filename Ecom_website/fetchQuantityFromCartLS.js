import { getCartProducts } from "./getCartProducts"

export const fetchQuantityFromCartLS=(id,price)=>{
    let cartProducts = getCartProducts();
    let existingProduct=cartProducts.find((curr)=>curr.id==id);
    let quantity=1;
    if(existingProduct){
        price=existingProduct.price;
       quantity=existingProduct.Quantity;
    //  !  note in localstorage key is Quantity not quantity so use Capital Q in existingProduct 
        

    }

    return {quantity,price}
 
}