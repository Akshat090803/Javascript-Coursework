//* =========================================
//* String in JavaScript
//* =========================================

//? Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
//? Strings created with single or double quotes works the same.
// There is no difference between the two.

//* String Properties:
//? length: Property that returns the length of the string (number of characters).

// const str = "Hello,    World!";
// console.log(str.length);
// including space n all

//* =========================================
//* Escape Character
//* =========================================

//? Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.

// Code	   Result	    Description
// \'	    '	        Single quote
// \"	    "	        Double quote
// \\	    \	        Backslash

// let text = "My name is " Thapa Technical " & I am a Full Stack Developer. ";
// let text =
//   "My name is ' Thapa Technical ' & \\ I am a \"Full Stack \" Developer. ";
// // let text = 'My name is " Thapa Technical " & I am a Full Stack Developer. ';

// console.log(text);

//* =========================================
//* String Search Methods
//* =========================================

//? 2: String Search Methods
//? a:  indexOf(): The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

// let text = "Vinod Thapa";
// console.log(text.indexOf("thapa"));
// The indexOf() method is case sensitive.
// console.log(text.indexOf("Thapa"));

// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr.map((curElem, index) => `${curElem} - ${index}`);
// console.log(strMap);

//? b: lastIndexOf() : The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let index = text.indexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript", 40);
// console.log(index);

//? c:  search(): The search() method searches a string for a string (or a regular expression) and returns the position of the match.
//* Returns the index number where the first match is found. Returns -1 if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.search(/Javascript/i);
// console.log(result);

//*👉 Important Tips
// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value

//? match() : Returns an array of the matched values or null if no match is found.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.match("Javascript");
// let result = text.match("JavaScript");
//todo here the js converts the normal text into regular expression text.match(/JavaScript/); without the g flag
// let result = text.match(/Javascript/gi);

// console.log(result);

//? matchAll() : Returns an iterator of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let matchResult = text.matchAll("javascript");
// let matchResult = text.matchAll("JavaScript");
//todo  here the js converts the normal text into regular expression text.match(/JavaScript/g); also adds the g flag at the end

// console.log(...matchResult);

// for (let item of matchResult) {
//   console.log(item[0]);
// }

// for (let index of matchResult) {
//   console.log(index.index);
// }

// for (let { index } of matchResult) {
//   console.log(index);
// }

//? includes(): Returns true if the string contains the specified value, and false otherwise.
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let includeResult = text.includes(/java/i);
// let includeResult = text.includes("J");
// console.log(includeResult);

// Note: includes() is case sensitive. includes() is an ES6 feature.

//? startsWith(): The startsWith() method returns true if a string begins with a specified value.Otherwise it returns false:
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.startsWith("Helcome");
// let result = text.startsWith("Hello");
// console.log(result);

//* start position for the search can be specified
// let result = text.startsWith("welcome", 18);
// let result = text.startsWith("welcome", 17);
// console.log(result);

//? endsWith(): The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.endsWith("welcome");
// let result = text.endsWith("course");
// console.log(result);

//* =========================================
//* Extracting String Parts:
//* =========================================
//! Extracting String Parts:

//? String.prototype.substr() it is deprecated  ❌

//? a: slice() extracts a part of a string and returns the extracted part in a new string.
// syntax
// slice(start, end);

// Todo  JavaScript counts positions from zero.
//? First position is 0. Second position is 1.

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(6);
// let result = text.slice(6, 15);
// console.log(result);

// subString() substring()

//? a: substring: Extracts a portion of the string based on starting and ending indices.
//* camelCase is used to separate words, substring is not to be intended as Sub String but as Substring
// syntax
// substring(indexStart) // index starts with 0
// substring(indexStart, indexEnd)

//* substring() is similar to slice(). The difference is that start and end values less than 0 are treated as 0 in substring().

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(-6);
// console.log(result);

//! Homework
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.substring(0);
// let result = text.substring(1);
// let result = text.substring(-5);
// console.log(result);

//! similarities
//todo  In both the slice() and substring() methods, the end parameter indicates the ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.

//* =========================================
//* Interview Question
//* =========================================
//! What is the output for the following code?

// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.slice(1);
// let result = text.replace("H", "");
// let result = text.substring(1);
//? Optional
// let result = text.replace("JavaScript", "Vinod");
// let result = text.replaceAll("JavaScript", "Vinod");

// console.log(result);

//* =========================================
//* Extracting String Characters
//* =========================================
//! Extracting String Characters
// There are 3 methods for extracting string characters:

//? The charAt(position) Method
//? The charCodeAt(position) Method
//? The at(position) Method

//? charAT() : The charAt() method returns the character at a specified index (position) in a string
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charAt(6);
// let result = text.charAt(-6);
// console.log(result);

//? charCodeAt() : The charCodeAt() method returns the code of the character at a specified index in a string. The method returns a UTF-16 code (an integer between 0 and 65535).
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.charCodeAt(6);
// console.log(result);

//todo ES2022 introduced the string method at():
//? The at() method returns the character at a specified index (position) in a string. The at() method returns the same as carAt().
// let text = "Hello JavaScript, welcome to our world best JavaScript course";
// let result = text.at(-6);
// console.log(result);

//todo Note
// The at() method is a new addition to JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use myString.at(-2) instead of charAt(myString.length-2).

//* =========================================
//* Replacing String Content:
//* =========================================
//! Replacing String Content:
//? replace() : The replace method is used to replace a specified value with another value.
// const str = "Hello, World!";
// const newStr = str.replace("World", "JavaScript");
// console.log(newStr); // Outputs: Hello, JavaScript!

//? Case-Insensitive Replacement: To perform a case-insensitive replacement, you can use the i flag in the regular expression.
// let originalString = "Hello, World! How are you, World?";
// let replacedString = originalString.replace(/world/gi, "vinod");
// console.log(replacedString);

//* =========================================
//* Other Useful Methods:
//* =========================================

//! Other Useful Methods:
//? toUpperCase and toLowerCase: Converts the string to uppercase or lowercase.
// const str = "JavaScript";
// console.log(str.toUpperCase()); // Outputs: JAVASCRIPT
// console.log(str.toLowerCase()); // Outputs: javascript

//? trim: Removes whitespace from both ends of the string.
// const str = "   Hello, World!   ";
// console.log(str.length);

// let trimStr = str.trim();
// console.log(trimStr);
// console.log(trimStr.length);

//? split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple,orange,banana";
// let strArr = str.split(",").reverse().join();
// console.log(strArr);

//* =========================================
//* //! Interview Questions
//* =========================================

//! 1: Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));

// for (let char = 97; char <= 122; char++) {
//   console.log(String.fromCharCode(char));
// }

//! 2: Write a function to count the number of vowels in a string?

// const countVowels = (str) => {
//   const vowels = "aeiou";
//   let count = 0;
//   for (let char of str) {
//     console.log(char);
//     // console.log(str.includes(char));
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// };
//   console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));
// console.log(countVowels("Hello a i o u world"));


// !note
 // if we runn loop for for (let char of vowels) we mill get MAx vowel count till 5 only. so we run
    // for (let char of str) loop for str and checkinng   vowels.includes(char of str )

//! 3: Write a function to check if all the vowels presents in a string or not?

// let str='my name is Aksht jain Our'
// str_lower=str.toLocaleLowerCase();
// console.log(str)
// const checkall=(str)=>{
//     if(str_lower.includes('a') && str_lower.includes('e') && str_lower.includes('i') && str_lower.includes('o') && str_lower.includes('u')){
//         return true;
//     }
//     return false;
// }

// console.log(checkall(str));


// const checkAllVowelPresentOrNot = (str) => {
//   const vowels = "aeiou";
//   for (let char of vowels) {
//     // console.log(char);
//     // console.log(str.includes(char));
//     if (!str.includes(char)) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(checkAllVowelPresentOrNot("my name u is vinod @  thapa"));

//! 4: Write a JavaScript function to check if the given sting is Pangram or not?

// const pangramChecker = (str) => {
//   let inputArr = str.toLowerCase().split("");
//   // console.log(inputArr);
//   // // console.log("z".charCodeAt());
//   const values = inputArr.filter(
//     (curElem) =>
//       curElem.charCodeAt() >= "a".charCodeAt() &&
//       curElem.charCodeAt() <= "z".charCodeAt()
//   );
//   // console.log(values);

//   return new Set(values).size === 26;

//   // return [...new Set(values)].length === 26;
// };

// console.log(pangramChecker("The quick  @ brown fox jumps ove the lazy dog"));

// let str="a b c Dk ef ghiJKLmnoPqrstuvWxyz";
// let checkparagram=(str)=>{
//     let arr= str.toLowerCase().split("");
//     const values= arr.filter((curr) => {
//         return curr.charCodeAt(0) >= 'a'.charCodeAt(0) && curr.charCodeAt(0) <= 'z'.charCodeAt(0) ;
//     });

//     // return new Set(values).size===26;
//     return [...new Set(values)].length===26;
    
    
// }
// console.log(checkparagram(str));

// !Way 2
// let str="a b c Dk ef ghiJKLmnoPqrstuvWxyz";

// / let checkpangram= (str)=>{
//     str=str.toLowerCase();

//     let alphabets="abcdefghijklmnopqrstuvwxxyz";
//     for(let ch of alphabets){
//         if(!str.includes(ch)){
//             return false;
//         }
//     }
//     return true;


// }

// console.log(checkpangram(str));

//?way3
// ! checkig for panagram
// const pangramChecker =(str)=>{
//     str=str.toLocaleLowerCase();
    
//     for(let i=97;i<=122;i++){
//       if(str.includes(String.fromCharCode(i))==false){
//         return false
//       }

//     }
//     return true
//   }

//   let str1="ab c Dk ef ghiJKLmnoPqrstuvWxyz"
//   console.log(pangramChecker(str1))
 


// let Data = {
//   name: "Nikhil",
//   age: 30,
//   isDeveloper: true,
//   skills: ["JavaScript", "Ionic", "Angular"],
//   address: {
//     city: "Delhi",
//     country: "India"
//   }
// };

// console.log(Data)

// let d=JSON.stringify(Data) //converts obj into JSON object
// console.log(d)

// let f=JSON.parse(d) //convert a JSON string into a JavaScript object
// console.log(f)

// const jsonString = '{"name": "John", "age": 30}';
// const obj = JSON.parse(jsonString);
// console.log(jsonString)

//! The differences between `obj.json()`, `JSON.parse(obj)`, and `JSON.stringify(obj)` are related to their specific purposes and the types of data they handle.

// 1. obj.json():
//    - This is a method used with the Fetch API. When you make a network request and receive a response, you can call `response.json()` on that response object.
//    - It reads the body of the response and parses it as JSON, returning a promise that resolves with the resulting JavaScript object.
//    - Example:
//      ```javascript
//      fetch('https://api.example.com/data')
//        .then(response => response.json())
//        .then(data => {
//          console.log(data); // Logs the parsed JSON data
//        });
//      ```

// 2. JSON.parse(obj):
//    - This method is used to convert a JSON string into a JavaScript object. It takes a string formatted as JSON and parses it.
//    - You would use this when you have JSON data in string format that you want to work with as a JavaScript object.
//    - Example:
//      ```javascript
//      const jsonString = '{"name": "John", "age": 30}';
//      const obj = JSON.parse(jsonString);
//      console.log(obj.name); // Logs "John"
//      ```

// 3. JSON.stringify(obj):
//    - This method is used to convert a JavaScript object into a JSON string. It takes an object as input and returns a string that represents that object in JSON format.
//    - You would use this when you want to send data as JSON, such as when making a network request or saving data.
//    - Example:
//      ```javascript
//      const obj = { name: 'John', age: 30 };
//      const jsonString = JSON.stringify(obj);
//      console.log(jsonString); // Logs '{"name":"John","age":30}'
//      ```

// In summary:
// - Use `obj.json()` to parse the body of a response in the Fetch API.
// - Use `JSON.parse(obj)` to convert a JSON string into a JavaScript object.
// - Use `JSON.stringify(obj)` to convert a JavaScript object into a JSON string.



//! advanced error handling & retry mechanism
async function fetchWithRetry(url, options = {}, retries = 3) {
  const maxRetries = retries;

  const fetchWithTimeout = (url, options, timeout = 5000) => {
      return Promise.race([
          fetch(url, options),
          new Promise((_, reject) => {
              setTimeout(() => reject(new Error('Requested timed out')), timeout)
          })
      ]);
  };

  for(let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
          const response = await fetchWithTimeout(url, options);

          if (!response.ok) {
              // Handle different status codes
              switch (response.status) {
                  case 400:
                      throw new Error('Bad Request');
                  case 401:
                      throw new Error('Unauthorized');
                  case 403:
                      throw new Error('Forbidden');
                  case 404:
                      throw new Error('Not Found');
                  case 500:
                      throw new Error('Internal Server Error');
                  default:
                      throw new Error(`HTTP error! status: ${response.status}`);
              }
          }

          return await response.json();
      } catch(error) {
          if(attempt === maxRetries) {
              console.error(`Final attempt failed: ${error.message}`);
              throw error;
          }

          console.warn(`attempt ${attempt} failed: ${error.message}. Retrying...`);

          // exponential backoff
          await new Promise(resolve => 
              setTimeout(
                  resolve, 
                  Math.pow(2, attempt) * 1000
              ) // 2 to the power of attempt
          );
      }
  }
}