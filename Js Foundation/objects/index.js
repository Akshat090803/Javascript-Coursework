//* ==============================
//* Object in JavaScript
//* ==============================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type, including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* ==============================
//* Creating Objects:
//* ==============================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

// const product = {
//   id: 1,
//   pName: "laptop",
// };
// let person = {
//   name: "Vinod",
//   age: 30,
//   isStudent: false,
//   greet: function () {
//     console.log("Welcome to World Best CSS Course");
//   },
// };

// let person = {
//   name: "Vinod",
//   age: 30,
//   "is'Student": false,
//   greet: function () {
//     console.log("Welcome to World Best JavaScript Course");
//   },
// };

//* ==============================
//* Accessing Properties:
//* ==============================
//? You can access object properties using dot notation or square bracket notation:

// console.log(person.age);
// console.log(person.name);
// console.log(person[`is'Student`]);

//* =================================
//* Adding and Modifying Properties:
//* =================================
//? You can add new properties or modify existing ones:
// person["job"] = "web dev";
// // person.age = 18;
// person["age"] = 20;

// console.log(person);

//* =================================
//* Methods:
//* =================================
//? Methods in objects are functions associated with the object. They can be invoked using the same notation as properties:

// person.greet();

//* ========================================
//* We can add dynamic keys in an object
//* ========================================

// let idType = "studentId";

// let student = {
//   [idType]: "A123456", // Dynamic key based on idType
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(

        // `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`

  //   as idtype="studentId" , we can write ${student[idType]} instead of  ${student["studentId"]}

  //   `Hey, my ${idType} is ${student["studentId"]} and my name is ${student.sName}.`
//     );
//   },
// };

// student.greet();

//? useCase: when we want to get the user name and value in react

//* =================================
//* Data Modeling:
//* =================================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username, etc.

// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   start: function () {
//     console.log("Engine started!");
//   },
// };

//* =====================================
//*  Interview Question
//* ======================================

//! Explain the difference between passing objects by reference and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: When passing by value, a copy of the primitive value is created and passed to the function or assigned to a variable. Any changes made to the copy do not affect the original value.

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

//? Object.assign() is used to copy properties from one or more source objects to a target object.

//* =====================================
//* Comparison by Reference:
//* ======================================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

//* =====================================
//* JSON (JavaScript Object Notation):
//* ======================================

//?JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

// let student = {
//   id: 1,
//   sName: "Vinod",
//   sAge: 29,
//   isStudent: false,
//   greet: function () {
//     console.log(
//       `hey my id is ${student.identity} & my name is ${student.sName}`
//     );
//   },
// };

// let jsonData = JSON.stringify(student);
// console.log(jsonData);
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject);

//* =====================================
//* "this" Object
//* ======================================

//? In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// Note
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

// function callme() {
//   console.log(this);
// }

// callme(); // try to run on browser console

//todo  Let's check the this keyword values in an object methods

//* Regular Function Expression:
// const obj = {
//   name: "Kodyfier",
//   greet: function () {
//     console.log(this);
//   },
// };

// obj.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define methods in object literals.
// const obj = {
//   name: "Kodyfier",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

//* Fat Arrow Function
// const obj = {
//   name: "thapa technical",
//   greet: () => {
//     console.log(this);
//   },
// };

// obj.greet();

//* =====================================
//* Objects Useful Methods
//* ======================================

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
//   image: "image link will be added during projects",
// };

//? 1: Object.keys(): Returns an array containing the names of all enumerable own properties of an object.

//? 2: Object.values(): Returns an array containing the values of all enumerable own properties of an object.

//? 3: Object.entries(): Returns an array containing arrays of key-value pairs for each enumerable own property of an object.

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.

//? 6: Object.freeze(): Freezes an object, preventing new properties from being added to it and existing properties from being modified or deleted.

//* =====================================
//* Interview Question - Objects
//* ======================================

//! 1: What will be the output?

//* ===============================================
//* Interview Question - Object Manipulation:
//* ================================================
//! Problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?
// let student={
//   name:"AKshat",
//   age:19,
//   grades:{
//     maths:80,
//     science:99,
//     history:87
//   }
  
// };

// const addSubjectGrade=(obj,sub,marks)=>{
//   if(!student.grades){
//     student.grades={};
//   }

//   return student.grades[sub]=marks;

// }
// addSubjectGrade(student, "computer", 92);
// console.log(student);

//* ===============================================
//* Interview Question - Object Comparison:
//* ================================================
//! Problem: Write a function that compares two objects to determine if they have the same properties and values.

// // Example usage:
//! way 1  way other than way 2 are not totally correct .Only way 2 is totally correct
// Reason => here we are converting obj into string. and checking using includes. suppose two objects are like this
// let objA = { name: "New York", age: 26, city: "Alice" };
// let objB = { name: "Alice", age: 26, city: "New York" ,};
// In obj A name is New york and city is alice whereas in obj B its vice versa
// if run our func which converts object into string and than check using includes 
// If it checks for Newyork (present in Name key in obj A) in Obj B using includes ,it will find it and return true
// But output should be false as they are not present in correct key,value pair
// so only way 2 gives correct output in all cases /scenerios
// same cocept in way 1.2,3,4


//!We cant obj directly so convert its value in string and compare strings

// const areObjectsEqual =(objA, objB)=>{
//   if(JSON.stringify(Object.values(objA))==JSON.stringify(Object.values(objB))){
//       if(JSON.stringify(Object.keys(objA))==JSON.stringify(Object.keys(objB))){
//           return true;
//       }
      
//     }
//     return false;
// }
  
// !way 1.2 way other than way 2 are not totally correct .Only way 2 is totally correct

// const areObjectsEqual =(objA, objB)=>{
//   if(JSON.stringify(Object.entries(objA))==JSON.stringify(Object.entries(objB))){
    
//       return true
//     }
//     return false;
// }

// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" ,};
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false


// !way 2  correct way 100%
const areObjectsEqual=(obj1,obj2)=>{
  let o1=Object.keys(obj1);
  let o2=Object.keys(obj2);
  
  if(o1.length!=o2.length){
    return false;
  }

  for(let id in obj1){
    if(obj1[id]!=obj2[id]){
      return false;
    }
  };

  return true;

  
  }
  

let objA = { name: "Alice", age: 26, city: "New York" };
let objB = { name: "Alice", age: 26, city: "New York" };
let objC = { name: "Bob", age: 30, city: "San Francisco" };

console.log(areObjectsEqual(objA, objB)); // Should return true
console.log(areObjectsEqual(objA, objC)); // Should return false

// ! Way 3  way other than way 2 are not totally correct .Only way 2 is totally correct
// reason=> we are checking element of obj B in objA using arr.includes()
// if it element is presnt in arr(object.keys(objA)) but not in correct key value order ,it will still gives True bcoz
// he found element in obj A key arr no matter at what position
// But correct output should be false as it is not in correct key value pair
// let objA = { name: "New York", age: 26, city: "Alice" };
// let objB = { name: "Alice", age: 26, city: "New York" ,};
//  -----------------------------------------------------------------------
 
//    const areObjectsEqual=(objA, objB)=>{
//     if((Object.keys(objA).length)==(Object.keys(objB).length)){
//         let objA_keys =Object.keys(objA);
//         let objB_keys=Object.keys(objB);
//         let objA_values=Object.values(objA)
//         let objB_values=Object.values(objB)
//          for(let i=0;i<objA_keys.length;i++ ){

//             if(!(objA_keys.includes(objB_keys[i])) || !(objA_values.includes(objB_values[i]))){  
//                 return false           
//             }
            
//          }
//     }
//     else{
//         return false
//     }
//     return true
//    }
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };


// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false


// ! way 4 optimize version of way 3

// const areObjectsEqual=(objA, objB)=>{
//   if((Object.keys(objA).length)==(Object.keys(objB).length)){
//       let objA_entries =Object.entries(objA);
//   let objA_flatEntries=objA_entries.flat();//We conver nested arr objA_entries arr to 1-D flat arr using arr.flat()
//       let objB_entries=Object.entries(objB);
//       let objB_flatEntries= objB_entries.flat();
     
//        for(let curr of objA_flatEntries){

//           if(!(objB_flatEntries.includes(curr)) ){  
//               return false           
//           }
          
//        }
//   }
//   else{
//       return false
//   }
//   return true
//  }
// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// console.log(Object.keys(objA).length)

// console.log(areObjectsEqual(objA, objB)); // Should return true
// console.log(areObjectsEqual(objA, objC)); // Should return false

// console.log(Object.keys(objA).length)

// !NOTE-- To iterate in object use for in loop only

//* ===============================================
//* Interview Question - Object Transformation:
//* ================================================
//! Problem: Write a function that transforms an array of an objects into an object where the keys are the objects' ids.
const arrayToObj=(arr)=>{
  let obj={}
  for(let i=0;i<arr.length;i++){
    // console.log(arr[i].id);
    obj[arr[i].id]=arr[i];


  }
  return obj;

}
// !!way 2
// const arrayToObj=(arr)=>{
//   let obj={};
//   for(let value of arr){
//     // console.log(value);
//     obj[value.id]=value;
//   }
//   return obj;

// }
let inputArray=[{ id: 1, name: 'Alice' },{ id: 2, name: 'Bob' },{ id: 3, name: 'Charlie' }]
console.log(inputArray)

console.log(arrayToObj(inputArray));
// Should print: { '1': { id: 1, name: 'Alice' }, '2': { id: 2, name: 'Bob' }, '3': { id: 3, name: 'Charlie' } }
