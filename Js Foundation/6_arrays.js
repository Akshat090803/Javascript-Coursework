//* ======================================
//* ARRAYS IN JAVASCRIPT
//* =====================================

//! Iterable - object where you can use the for-of loop
//! Array-like object - Any object with length property and use indexes to access items
//! Arrays as Objects:  Arrays in JavaScript are a specific type of object that has numeric keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements from the array.
//! typeof Operator: The typeof operator in JavaScript returns "object" for both arrays and regular objects.

//* JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects, and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

//* ======================================
//*  Creating Arrays:
//* =====================================

//? Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).

//? Using Array constructor
// let arr=new Array('akshat','jain');
// console.log(arr);
// let arr=new Array();
// console.log(arr)//empty arr
// let arr=new Array(NaN);
// console.log()//error

// let arr=new Array(null);
// console.log(arr)//[null]

//? Using array literal

// let arr=['akshat','jain'];
// console.log(arr);

// let arr=new Array(undefined);
// console.log(arr)//[undefined]



//? we can also create an empty array
// let arr=[];
// console.log(arr);


//* ======================================
//*  Accessing Elements:
//* =====================================
//?👉 Accessing Elements:  Array elements are accessed using zero-based indices.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr[2]+arr[0]);

//* ======================================
//*  Modifying Elements:
//* =====================================
//?👉  Modifying Elements: You can modify array elements by assigning new values to specific indices.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr);
// arr[0]=10;
// console.log(arr);

//* =============================================
//*  Array Traversal / Iterating Over Arrays
//* ============================================
//?👉 Array Traversal / Iterating Over Arrays
//? 1: for of loop , also known as iterable
//* for...of Loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.
// let arr=[1,3,5,7,9,11,13];
// for(let x of arr){
//     console.log(x);
// }
//? 2: for in loop
//* for...in Loop: The for...in loop is used to iterate over the properties (including indices) of an object.
// let arr=[1,3,5,7,9,11,13];
// for(let x in arr){
//     console.log(x);
// }
// ? 3: forEach Method
//* The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.
// let arr=[1,3,5,7,9,11,13];
// arr.forEach((curr,idx,array)=>{
//     console.log(curr,idx,array);
// })
// ? 4: map function
//* map() creates a new array from calling a function for every array element. map() does not change the original array.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr);

// let updatedarr=arr.map(
//     (currEle,idx,array)=>{
//         return currEle*5;
//     }
    
// )
// console.log(updatedarr);
// console.log(arr);
//todo Practice Time
//! write a program to Multiply each element with 2
// const numbers = [1, 2, 3, 4, 5];
// forEach -  Performs an action on each element
// map -  Creates a new array with transformed elements

//* ==========================================================================
//*  How to Insert, Add, Replace and Delete Elements in Array(CRUD) - p1
//* ==========================================================================

//? 👉 How to Insert, Add, Replace and Delete Elements in Array(CRUD)

//? 1: push(): Method that adds one or more elements to the end of an array.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr);
// arr.push(222);
// arr.push(78,90,67);
// console.log(arr);


//? 2: pop(): Method that removes the last element from an array.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr);
// arr.push(222);
// console.log(arr);
// console.log(arr.pop());
// console.log(arr);
//? 3: unshift(): Method that adds one or more elements to the beginning of an array.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr);
// arr.unshift(132);
// console.log(arr);
//? 4: shift(): Method that removes the first element from an array.
// let arr=[1,3,5,7,9,11,13];
// console.log(arr);
// arr.unshift(132);
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);

//* ==========================================================================
//*  what if, we want to add or remove anywhere in an elements - p2
//* ==========================================================================

//? The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place

//* syntax
//? splice(start, deleteCount, item1, item2, /* …, */ itemN)
//  let fruits = ["apple", "orange", "banana", "mango"];
//  console.log(fruits);
// //  !if i want to add grapes at idnex 1 than...
//  fruits.splice(1,0,'grapes');
//  console.log(fruits);
// //  ! now i want to replace banana with starwberry than....     
// // fruits = ["apple","grapes", "orange", "banana", "mango"];
// fruits.splice(3,1,'strawberry');
// console.log(fruits);



// //! what if you want to add the element at the end
// fruits.splice(fruits.length,0,"muskmellon");
// console.log(fruits);

//todo Challenge time
// 1: Add Dec at the end of an array?
// 2: What is the return value of splice method?
// 3: Update march to March (update)?
// 4: Delete June from an array?

// const months = ["Jan", "march", "April", "June", "July"];

//* =========================================
//*  Searching in an Array
//* =========================================
//?👉  Searching and Filter in an Array

//? For Search we have - indexOf, lastIndexOf & includes
//  const numbers = [1,55, 2, 3, 4, 5, 6,9,7, 8, 9,10];
//  console.log(numbers.indexOf(9));
//  console.log(numbers.indexOf(9,8));// indexOf(searchElement: number, fromIndex?: number):


//?1: indexOf Method: The indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax
// indexOf(searchElement);
// indexOf(searchElement, fromIndex);

//? 2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// const numbers = [1,55, 2, 3, 4, 5, 6,9,7, 8, 9,10];
// console.log(numbers.lastIndexOf(9));

//? 3: The includes method checks whether an array includes a certain element, returning true or false.
// Syntax
// includes(searchElement)
// includes(searchElement, fromIndex)
// const numbers = [1,55, 2, 3, 4, 5, 6,9,7, 8, 9,10];
// console.log(numbers.includes(9));
// console.log(numbers.includes(91));



//* =========================================
//*  Filter in an Array
//* =========================================
//? Search +  Filter
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//? 1: find Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.find((Ele)=>Ele>6));
// console.log(numbers.find((Ele)=>{
//     return Ele>9 //undefined
// }));

//? 2: findIndex Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(numbers.findIndex((Ele)=>Ele==8));
// console.log(numbers.findIndex((Ele)=>{
//     return Ele>9
// }));
//* 3:  filter Method: The filter method creates a new array with all elements that pass the test implemented by the provided function.
// syntax:
//? filter(callbackFn)
//? filter(callbackFn, thisArg)
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filtered=numbers.filter((ele)=>{
//     return ele>5;
// });
// console.log(filtered);

// UseCase: In E-commerce website when we want to Remove or delete any product from addToCart page.
//! Ex. le'ts say user wants to delete value 6.
// let value = 6;
//  const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
//  console.log(numbers);
//  numbers.splice(numbers.findIndex((ele)=>ele===6),1);
//  console.log(numbers);

// ! removing all 6 from array
// let numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let afterRemove6=numbers.filter((curr)=>{
//     return curr!=6
// })
// console.log(numbers);
// console.log(afterRemove6)
// numbers=afterRemove6
// console.log(numbers);




// Practice time
// !Example 2: Filtering Products by Price
// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// // Filter products with a price less than or equal to 500
// let filtered=products.filter((ele)=>{
//     return ele.price<=500;
// });
// console.log(filtered);

// !this code will give unique elements + display ele which are
// ! present more than once only 1 time for eg if [1,3,3,2]=>[1,3,2]
// const numbers = [1,3,3,2];
// let filtered=numbers.filter((ele,idx)=>{
    
//     return idx===numbers.indexOf(ele);
    
// });
// console.log(filtered);


// ! Js code to give only unique elements those are present only once for eg [1,3,3,2]=>[1,2]
// const num=[1,3,3,2]
// let unique=num.filter((curr,index,arr)=>{
//    return num.indexOf(curr)==num.lastIndexOf(curr)
  
// })
// console.log(num)
// console.log(unique)

// !way 2
// console.log([...new Set(numbers)]);




// !------------------------------------
//* =========================================
//*  How to Sort and Compare an Array
//* =========================================
//? How to Sort and Compare an Array
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "z","Orange", "Mango"];
// console.log(fruits.sort());

const numbers = [10,3,4,5,1];
    // console.log(numbers.sort((a,b)=>a-b));
//     console.log(numbers)

//     // !in descendinng order
    // console.log(numbers.sort((a,b)=>b-a));


// let sorted_arr=numbers.sort((a,b)=>{
//     if(a>b) return 1;
//     else if (b>a) return -1;
//     else  return 0; // a and b have the same sorting order
// });
// console.log(sorted_arr);

// // !for descending order
// let desc_sorted=numbers.sort((a,b)=>{
//     if(a>b) return -1;  //change return value from 1 to -1
//     else if (b>a) return 1; //change return value from -1 to 1
//     else  return 0; // a and b have the same sorting order
// });
// console.log(desc_sorted);


//!toSorted() returns soretd copy of an array
// const numbers = [10,3,4,5,1];
// const copy=numbers.toSorted();
// console.log(copy);//soretd order
// console.log(numbers)//remains same

//!toReversed() returns reversed copy of an array
// const numbers = [10,3,4,5,1];
// const copy=numbers.toReversed();
// console.log(copy);//soretd order
// console.log(numbers)//remains same

//!toSpliced()  similar to splice but don'yt do changes on original array instead return a modified array

//* =========================================
//*  Very Important Array Methods
//* =========================================

//? Map(), Filter(), Reduce(),
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

//? Map(), Reduce(), Filter()
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// Original array of numbers
// const numbers = [1, 2, 3, 4, 5];

// Using map to square each number and create a new array

//? Reduce method
// The reduce method in JavaScript is used to accumulate or reduce an array to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. The reduce method takes a callback function as its first argument and an optional initial value for the accumulator as the second argument.
// syntax
// array.reduce(function callback(accumulator, currentValue, index, array) {
//   // Your logic here
//   // Return the updated accumulator value
// }, initialValue);

// callback: A function that is called once for each element in the array.
// accumulator: The accumulated result of the previous iterations.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed.
// array (optional): The array reduce was called upon.
// initialValue (optional): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulator value.


// const numbers=[2,3,4,5,6,7,8,9,10];
// let total=numbers.reduce((accumulate,ele)=>{
//    return accumulate+=ele;
// },0);
// console.log(total);

// !IMPORTANT Array.from()
// In JavaScript, the `from` method is used to create a new array from an array-like or iterable object. It allows you to create an array from:
// - Array-like objects (objects with a length property and indexed elements)
// - Iterable objects (objects where you can get iterator objects)
 
// Here's an example to illustrate the use of `from` in JavaScript:

// // Using from to create an array from a string
// const str = 'hello';

// const strArray = Array.from(str);

// console.log(strArray); // Output: ['h', 'e', 'l', 'l', 'o']
// console.log([...str]); //using spread operator [ 'h', 'e', 'l', 'l', 'o' ] same result

// Using from to create an array from a Set
// const set = new Set([1, 2, 3]); //return an object (Set(3) { 1, 2, 3 })
// console.log(set)
// const setArray = Array.from(set);

// console.log(setArray); // Output: [1, 2, 3]


// const obj={aks:"ajs" , jain:"aks"};
// let ads=Array.from(obj);
// console.log(ads) //empty arr as obj is not iteratble

// console.log([...obj])//error obj is not iterable

// let abc=[3,4,5,6,7,8];
// let [first,second,...remain] =abc
// console.log(first,second,remain);

// let bbc={one:"as",second:"that",third:"why"};
// let {one,...rem}=bbc;
// console.log(one,rem)

// let ccd=[{aks:"ajs" , jain:"aks"},{one:"as",second:"that",third:"why"}]
// let [...k]=ccd
// console.log(k)


function testAsync(userId){
    return new Promise((resolve,reject)=>{

        if(userId){
            
            setTimeout(()=>{
                 const user={
                    id:userId,
                    name:"Akshat",
                 }
                 resolve(user);
            },3000)

             
        }
        else{
            reject(new Error("not a valid id"));
        }
    })
}

//!Using async await
async function asyncCall(){

   try {
    const result1=await testAsync(1);
    console.log(result1);

    const result2=await testAsync(2);
    console.log(result2);

    const result3=await testAsync(3);
    console.log(result3);

   
    } catch (error) {
       console.log("error: ",error.message);
   }
finally{
    console.log("Wait is over")
}
}

asyncCall();

//!Using promises
// testAsync(23)
// .then((result)=>{
//     console.log(result)
//     return testAsync(24);
// })
// .then((result2)=>{
//     console.log(result2);
//     return testAsync(25);
// })
// .then((result3)=>{
//     console.log(result3);

// })
// .catch((err)=> console.log(err.message))
// .finally(()=>{
//     console.log("Wait is over")
// })



console.log("I am waiting for output...");
