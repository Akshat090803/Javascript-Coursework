import products from './api/products.json'
export const showToast=(operation,id=0)=>{

       const toast=document.createElement('div');
       toast.classList.add('toast');

       if(operation=="add"){
        let productName=products.find((curr)=>{
            return curr.id===id;
        })
        toast.textContent=`${productName.name} added to the cart`;
       }
       else if(operation=="exist"){
        let productName=products.find((curr)=>{
            return curr.id===id;
        })
        toast.textContent=`${productName.name} already exist`;

       }
       else if(operation=="submit"){
        
        toast.textContent=`Email submitted.`;
        

       }
       else{
        let productName=products.find((curr)=>{
            return curr.id===id;
        })
        toast.textContent=`${productName.name} removed from the cart`;
       }
      
       document.body.append(toast);

       setTimeout(()=>{
        toast.remove();
       },2000);
  
}


// ! call showToast function in addToCart.js and removeProdFromCart.js