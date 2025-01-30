import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./quantityToggle";
import { showToast } from "./showToast";



let productContainer=document.querySelector('#productContainer');
let productTemplate=document.querySelector('#productTemplate');


export const showProductContainer=(products)=>{
    if(!products){
        return false;
    }

    products.forEach((currPod) => {
   
    const {id,name,category,branch,price,stock,description,image}=currPod;
    console.log(name);

    const productClone=document.importNode(productTemplate.content , true);
    
    productClone.querySelector('.category').textContent = category;
    productClone.querySelector('.productName').textContent = name;
    productClone.querySelector('.productImage').src = image;
    productClone.querySelector('.productImage').alt = name;
    productClone.querySelector('.productDescription').textContent = description;
    productClone.querySelector('.productStock').textContent = stock;
    productClone.querySelector('.productPrice').textContent = `₹${price}`;
    productClone.querySelector('.productActualPrice').textContent = `₹${Math.round(price*1.5)}`;
    // ! giving all cards unit identity
    productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);

    

    productClone
    .querySelector(".stockElement")
    .addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });
    productClone
      .querySelector(".add-to-cart-button")
      .addEventListener("click", (event) => {
        addToCart(event, id, stock);
        // we can do like this also
        // addToCart(event, id, stock,price);
      });

     

    productContainer.append(productClone);
    
});
}
document.querySelector('.f-mail').addEventListener('submit',(event)=>{
  event.preventDefault();
  showToast("submit");
  document.querySelector('.inputemail').value="";

})
