export const homeQuantityToggle=(event ,id,stock)=>{

    const currentCard=document.querySelector(`#card${id}`);
    const productQuantity=currentCard.querySelector('.productQuantity');
    let quantity=productQuantity.getAttribute("data-quantity") || 1;
    // console.log(productQuantity)
    // console.log(event.target.innerText)
    // console.log(event.target)

    // increment
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

      productQuantity.innerText=`${quantity}`;
      productQuantity.setAttribute("data-quantity",quantity);
   

   
}

