//* ===============================
//* Function in JavaScript
//* ==============================
//? In JavaScript, a function is a block of reusable code that performs a specific task or set of tasks. Functions are used to organize code into modular and manageable pieces, promote code reuse, and make programs more readable.

//  3 students at a time wants to find the sum of two numbers

// 1st student

//* ===============================
//* Function Declaration:
//* ==============================

//? Declare a function using the function keyword, followed by the function name, parameters (if any), and the function body.
//? This step defines the function and specifies what code should be executed when the function is called.

// function greet() {
//   console.log("Hello Guys, Welcome to Thapa Technical JS Course ");
// }

//* =================================================
//* Function Invocation (Calling a Function):
//* =================================================

//?After declaring a function, you can invoke or call it by using its name followed by parentheses.
//? If the function has parameters, provide values (arguments) for those parameters inside the parentheses.

//? How to call a function
// greet();

//! Practice Time
//! 1. Write a function to find the sum of two numbers.
// function sum(num1 ,num2){
//     console.log(num1+num2);
// }
// sum(10,2);
//todo Tips "1st declare the function & then call it" In JavaScript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

// Function definition

// Calling the function

//* ==============================
//* Function Parameter:
//* ==============================

//? A function parameter is a variable that is listed as a part of a function declaration. It acts as a placeholder for a value that will be provided when the function is called. Parameters allow you to pass information into a function, making it more versatile and reusable.

// Syntax: function functionName(parameter1, parameter2, ...params) {
//   // Function body
//   // Code to be executed when the function is called
// }

//* ==============================
//* Function Argument:
//* ==============================

//? A function argument is a value that you provide when you call a function. Arguments are passed into a function to fill the parameters defined in the function declaration.

//? syntax:
//? functionName(argument1, argument2, ...);

//! Practice Time
//? Let's say we want to greet students with one same line
//! Write a JavaScript program that defines a function called greet to welcome individuals to the Thapa Technical JS Course. The function should take a name parameter and output the message "Hello [name], Welcome to Thapa Technical JS Course". Call the function twice, once with the argument "vinod" and once with the argument "ram".
// function greet(name){
    // console.log("Welcome "+name);
    // console.log(`Welcome ${name}`);
// }
// greet("akshat");
//! 1. Write a function to find the sum of two numbers with parameters.

//* ==============================
//* Function expressions
//* ==============================
//? A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.
//  let result = function sum(num1 ,num2){
//         return num1+num2;
//     }(10,2);
// console.log(result);
//* ==============================
//*  Anonymous Function
//* =============================
//? An anonymous function is a function without a name. It can be created using either a function expression or a function declaration without a specified name.

// let anonymous=function(num1 ,num2){
//     return num1+num2;
// }(10,2);

// console.log(anonymous);
//* ==============================
//*  Return Keyword
//* =============================
//? Return Keyword: In JavaScript, the return statement is used within a function to specify the value that the function should produce or provide back to the code that called it. The return statement stops the execution of a function and sends a value back to the caller

//? Syntax
// return expression;

//! Example 1: Returning a Sum of two number
// function sum(num1 ,num2){
//     return num1+num2;
// }
// console.log(sum(9,8));

//* ==============================
//* IIFE - immediately invoked function expression
//* =============================
//? An IIFE, or Immediately Invoked Function Expression, is a JavaScript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interfere with the surrounding code and executes immediately

// Syntax
// (function () {
//   // code to be executed
// })();

// !Practice Time ( IIFE with Parameters)

//? Interview Questions

//! Question 1: Calculator Function
// function calc(num1,num2,op){
//     switch(op){
//         case '+' : return num1+num2;
//                    break;
//         case '-' :  return num1-num2;
//         break;

//         case '*' :  return num1*num2;
//         break;

//         default : return -1;
//     }
// }

// console.log(calc(1,2,'+'));
//! Write a JavaScript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction, multiplication, and division.

//! Reverse a String:
//! Write a function to reverse a given string without using built-in reverse methods.
// function reverseString(str){
//     let revstr="";
//     for(var i=str.length-1;i>=0;i--){
//         revstr+=str[i];
//     }
//     return revstr;
// }


// console.log(reverseString("akshat"));

//! Palindrome Check:
// function palindrome_check(str){
//     let revstr="";
//     for(var i=str.length-1;i>=0;i--){
//         revstr+=str[i];
//     }
//     if(revstr===str) return true;
//     else return false;
// }


// console.log(palindrome_check("akshat"));
// console.log(palindrome_check("level"));


//! Create a function to determine if a given string is a palindrome (reads the same backward as forward).


// (function(s){
//     console.log(s);
//   })(7)

//!currying
//?Currying is a process of trabsforming a function taking multiple argumnts into a sequence of functions with each taking one argument

//!without currying
const addnum=(a,b,c)=> a+b+c;
console.log(addnum(10,20,30));

//!with currying 
const addnum2= (a)=>(b)=>(c)=>a+b+c;
console.log(addnum2(10)(20)(30));

//!way-2
const addnum3= (a)=>{
    return (b)=>{
        return (c)=>{
            return a+b+c;
        }
    }
}
console.log(addnum3(10)(20)(30));



//!Closure -> closure is a function that remembers the variables of the outer function

function outer(){
    let count=0;

    return function inner(){
             count++;
             console.log(count);
    }
}

let counter=outer(); //outer function is called and its return is assignes in counter 
                     //outer function assigned a function (inner function) to counter which have (inner func) have closure to count variable
                     //means for first time we call counter() we get 1 printed
                     //for seocnd time we call counter() we get 2 printed
                     //means inner func assigned in counter remembers the varible of the outer function i.e, count varible of outer func

                     //?but if we  do let counter2=outer() than call counter2() we agin get 1 as counter2() for second time gives 2
  
 
 counter() ; // 1 will printed                    
 counter() ; // 2 will printed                    
 counter() ; // 3 will printed                    

 let counter2=outer(); //it also stores a closure inner but count for counter2 inner func is 0 in beginning
 counter2() ; //1 gets printed
 counter2() //2 gets printed


 counter()// 4 gets printed
 counter2()//3 gets printed


 function arr_change(arr){
    arr[1]=4;
 }

 function print(arr){
    for(let x of arr) console.log(x);
 }

 console.log('array')
 let n=[1,2,3,4,5]
 print(n);
 console.log("after array change")
 arr_change(n)
 print(n)
 //! means arr is passed as by reference in function in js

 //! 
 function var_change(gh){
    gh=6;
 }

 let h=3;
 console.log("var before: ",h);
 var_change(h);
 console.log("var after: ",h);
 //! varibale is passed as value in js