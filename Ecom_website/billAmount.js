import { getCartProducts } from "./getCartProducts";

 export const  billAmount=()=>{

    const productSubTotal=document.querySelector('.productSubTotal');
    const productFinalTotal=document.querySelector('.productFinalTotal');
    let cart=getCartProducts();
    if(cart.length!=0){
        let subtotal=0;
        subtotal=cart.reduce((acc,curr)=>{

        return Number(acc+=curr.price);

    },0)
    // console.log("sub ",subtotal);
    // console.log("total",50+subtotal)
    productSubTotal.innerText=`₹ ${subtotal.toFixed(2)}`
    productFinalTotal.innerText=`₹ ${(subtotal + 50).toFixed(2)}`
    }

    else{
        productSubTotal.innerText=`0`
        productFinalTotal.innerText=`0`
    }
}


// ! call this function in showAddtocart .js file 
//  in removeProdfrom cart.js so that when we click on remove amount gets updated
//  call in increment decrement .js also 