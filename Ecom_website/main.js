import './style.css'
import products from './api/products.json'
import { showProductContainer } from './showProductContainer';
// import { showToast } from './showToast';

console.log(products);


let productContainer=document.querySelector('#productContainer');
let productTemplate=document.querySelector('#productTemplate');


showProductContainer(products);

