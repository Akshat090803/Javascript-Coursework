//* ==========================================
//*    ECMAScript Features (2022) / ES13
//* =========================================

//? List of new useful features added in ES8  👇
// Array.findLast()
// Array.findLastIndex()
// Array.prototype.toReversed()
// Array.prototype.toSorted(compareFn)
// Array.prototype.toSpliced(start, deleteCount, ...items)
// Array.prototype.with(index, value)

//* ===============================================
//*  Array.findLast() & Array.findLastIndex()
//* ==============================================
//? This function will allow us to find element from the last to first of the array based on a condition.
// const array = [1, 2, 3, 4, 5, 6, 4];

//* ===============================================
//*  New Array.prototype functions
//* ==============================================

const myNames = ["vinod", "bahadur", "thapa", "kodyfier"];

// !Note-> see the difference b/w .reverse() and .toReversed() and b/w .sort() & .toSorted() 
// ?! .splice() & .toSpliced()
// .reverse() , .sort() , .splice() changes the original arr
// .toReversed() , .toSorted() , .toSpliced() don't changes the original arr.It creates copy of arr do changes in it and return that copy
//? Array.prototype.toReversed(); //returns reversed arr which can be assign to other but don't chnage original arr
// whereas .reverse()  changes /sorts the original arr

//? Array.prototype.toSorted(compareFn); //returns sorted arr which can be assign to other but don't chnage original arr
// whereas .sort()  changes /sorts the original arr

//? Array.prototype.toSpliced(start, deleteCount, ...items);

//? Array.prototype.with(index, value);
//* The with() method in JavaScript is used to change the value of an element at a specific index in an array. It takes two arguments: the index of the element to be changed and the new value. It returns a new array with the changed element, leaving the original array unchanged.
