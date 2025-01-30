//* ============================
//* Data Types Section
//* ============================

//* Data types define the type of values that a variable can hold.

//? Types of Primitive Data types

//? Number: Represents numeric values, including integers and floating-point numbers.
// Example:
// var myNumber=12;
// console.log(myNumber);

//? String: Represents a sequence of characters enclosed in single or double quotes.
// Example:
// var myName="akshat";
// console.log(myName);
//? Boolean: Represents a logical entity with two values: true or false.
// Example:
// var value_true=true;
// console.log(value_true);

//? undefined: Represents the absence of a value or an uninitialized variable.
// Example: We declared var but not defined
// var eg_undefined;
// console.log(eg_undefined);


//? Null: Represents the absence of a value. It is often used to explicitly indicate that a variable or object property has no assigned value.
// Example:
// var eg_Null=null;
// console.log(eg_Null);

//? BigInt: Represents integers of arbitrary precision (available since ECMAScript 2020).
// Example:
// const bigNumber = 1234567890123456789012345678901234567890n;

//? Symbol: Represents a unique and immutable data type, often used to create unique identifiers.
// Example:
// const mySymbol = Symbol("description");

//! ============================
//! Data Types Interview Questions
//! ============================

//? 1: What is the difference between null and undefined in JavaScript❓
// "null" is an assignment value that represents the intentional absence of any object value. It is often used to indicate that a variable has no value or that an object does not exist.
// - "undefined" is a primitive value that is automatically assigned to variables that have been declared but have not been assigned a value. It is also the default return value of a function that does not explicitly return anything.

// In simple terms, "null" is a value that is intentionally assigned to represent nothing, while "undefined" is a value automatically assigned when a variable has not been given a value.





//? 2: What is the purpose of typeof operator in JavaScript❓
// The typeof operator in JavaScript is used to determine the data type of a value or variable. 
// It returns a string that indicates the type of the operand. For example, if you use typeof on a number, 
// it will return "number", and if you use it on a string, it will return "string". 
// It's helpful when you want to perform different actions based on the data type of a value.

// var myNumber=12;
// console.log(typeof(myNumber));
// var myName="akshat";
// console.log(typeof(myName));
// var value_true=true;
// console.log(typeof(value_true));
// var eg_undefined;
// console.log(typeof(eg_undefined));


//? 3: What is the result of `typeof null` in JavaScript❓
// The result of `typeof null` in JavaScript is "object". It may seem counterintuitive, but it's a historical quirk in the language.
// var eg_Null=null;
// console.log(typeof(eg_Null));


//? 4: What are primitive data types in JavaScript❓
// there are 7 primitive datatypes in js

//? 5: Convert a string to a number?
// We just need to add the '+' sign before the string
// Example:
// var my_name="189";
// console.log(typeof(my_name));

// console.log(typeof(+my_name));
// console.log(typeof(my_name));
//! way 2
// console.log(typeof(Number(my_name)));


//? 6: Convert a number to a string?
// We just need to add an empty string after the number
// Example:
// var my_num=432;
// console.log(typeof(my_num));
// console.log(typeof(my_num+" "));
// !way 2
// console.log(typeof(String(my_num)));


//? 7: Explain the concept of truthy and falsy values in JavaScript. Provide examples.❓
// all non zero number ,non empty strings mon empty array objects are truthy value 


//? 8: To check if a non-empty string is truthy or falsy in JavaScript, we can directly use if statement.

//* ==========  Data Types End Section ==========

//todo ---------------- todo Bonus ----------------------

//* ========== parseInt & parseFloat Section ==========
//? parseInt and parseFloat are both functions in JavaScript used for converting strings to numbers, but they have different use cases.

//* parseInt: Definition: parseInt is used to parse a string and convert it to an integer (whole number).
// const myString = "42";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

// const myString = "42.5";
// const myNumber = parseInt(myString);
// console.log(myNumber); // Output: 42

//* parseFloat: Definition: parseFloat is used to parse a string and convert it to a floating-point number (decimal number).
// const myString = "42.5";
// const myNumber = parseFloat(myString);
// console.log(myNumber); // Output: 42.5

//TODO  Key Differences:
//? parseInt is used for converting to integers and ignores anything after the decimal point.
//? parseFloat is used for converting to floating-point numbers, preserving the decimal part.
//? Both functions will attempt to convert as much of the string as possible until an invalid character is encountered.

//! Here are more examples
console.log(parseInt("123"));
// 123 (default base-10)
console.log(parseInt("123", 10));
// 123 (explicitly specify base-10)
console.log(parseInt("   123 "));
// 123 (whitespace is ignored)
console.log(parseInt("077"));
// 77 (leading zeros are ignored)
console.log(parseInt("1.9"));
// 1 (decimal part is truncated)
console.log(parseInt("-123"));
// -123
//! When we will not get an Output
console.log(parseInt("&123"));

console.log(parseInt("xyz"));
// NaN (input can't be converted to an integer)

//? What is the purpose of the NaN value in JavaScript❓
// !to validate if entered input is a  number or not
// !use isNan() function to check entered input is a number or not

// ! NaN==NaN is false

//* ========== parseInt & parseFloat End Section ==========
