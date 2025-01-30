const abc = document.getElementsByClassName("qwe");
console.log(abc);
abc[0].textContent = "<b>akshat</b>";
// abc[0].innerHTML = "<b>akshat</b>";


// const abc=document.querySelector(".qwe") //selects first matching class
// console.log(abc.textContent)


const bbc=document.querySelectorAll(".qwe") //selects all matching class
console.log(bbc)

//!Attributes
const image=document.getElementById("im")
image.setAttribute('alt','new image')
console.log(image.getAttribute('alt'))


//!styling change css
const u_id=document.getElementById("uuu")
u_id.style.color='red';
u_id.style.fontSize='22px'


//!Adding / removing / toggle / checking class
const box_=document.getElementById("box");

//adding class
box_.classList.add('red-box');
box_.classList.add('black-box');

//removing class

box_.classList.remove('black-box')

//Toggle -> if class not present than it will add that class and if class is present it will remove that class
box_.classList.toggle('yellow-box'); //add yellow-box classs as it was absent
box_.classList.toggle('yellow-box'); //remove yellow-box classs as it was present

// contains 
if(box_.classList.contains('red-box')){
   box_.style.backgroundColor="red"
}



//!Add / delete an element
const list= document.querySelector('.list')
//create a element
const newItem1=document.createElement('li');
newItem1.textContent="roll 2"
//append the newItem
list.appendChild(newItem1)

//remove child

list.removeChild(list.firstElementChild) //roll 1 delete


//insert Before
const newItem2=document.createElement('li');
newItem2.textContent="roll 6"
list.insertBefore(newItem2,list.firstChild) //roll 6 at inserted at top

//?delete whole ele
// list.remove() ; //whole ul tag will removed


//!form submittion
const form=document.getElementById('fo')

form.addEventListener('submit',(e)=>{
  e.preventDefault()//to prevent default action of form i.e, reloading

  console.log("form submmitted")

  //get form data
  const formData=new FormData(form); 
  console.log("form data: ",formData);

  //just want data of username (consider name attribute of input)
  console.log("username: ",formData.get('username'));

  //!use forloop to print all value
  for(let [key,value]  of formData.entries()){  //formData.entries() gives an arr of key value pair which we destructure [key,value]
    console.log(`${key} : ${value}`);
  }

})

