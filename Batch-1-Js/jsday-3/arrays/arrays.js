// 1 Introduction to Arrays []
// Explanation: An array is a data structure used to store multiple values in a single variable. Arrays can hold different types of data, such as numbers, strings, objects, or even other arrays.[]

// 2 Array Indexing
// Explanation: Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

let color = ["pink", "blue", "white", "red"];
console.log(color[0], color[1], color[3]);

// 3 Array Length
// Explanation: The .length property returns the number of elements in an array.
let color2 = ["pink", "blue", "white"];
console.log(color2.length);

//  4 Accessing and Modifying Array Elements
// Explanation: You can access an array element using its index. You can also modify elements by directly assigning a new value to a specific index. because array is mutable

let color3 = ["pink", "blue", "white"];
console.log(color[0]);
color[0] = "red";
console.log(color3[0]);

//  5 how To print array
function checkArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(` This is my index ${i}, This is my value ${array[i]}`);
  }
}
checkArray(["a","b","c"])

// printing array using for of loop
let colors = ["pink","white","red"]
for (let value of colors){
    console.log(value.toUpperCase())
}

// 6 array methods:
// In JavaScript, array methods are built-in functions that can be used to manipulate and work with arrays. They provide an easy way to perform operations like adding, removing, searching, sorting, and iterating over elements in an array.
// ----------------------------------------------------
// arrays are muatible - we can change the array
// note: there are two types of method
// 1 - Methods That Change the Original Array: [push, pop, unshift, shift, splice, sort,  reverse, fill, copyWithin]
// 2 - Methods That Do Not Change the Original Array (Return a New Array): [map, filter, slice, concat, flat, flatMap, toSorted, toReversed]
// Neutral Methods (Do Not Modify or Create Arrays): [forEach, some, every, find, findIndex, includes, ]



// ------------------------------------------
// push() (Adds an element  it may be single or multiple to the end)

let numbers = [1, 2, 3];
numbers.push(4,5,6);
console.log(numbers); 
// ---------------------------------------------------------------
// pop() (Removes the last element) but orginal array will change

let numbers = [1, 2, 3];
console.log(numbers);
let deletedNumbers = numbers.pop();
console.log(numbers);

console.log(deletedNumbers);

// ---------------------------------------------------------------
// toString() (it will convert the array into string) but orginal array will remain same
let numbers = [1, 2, 3];
console.log(numbers);
let tostring = numbers.toString();
console.log(tostring);

// ---------------------------------------------------------------

// shift() (Removes the first element)


let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); 
// ---------------------------------------------------------------
// unshift() (Adds an element to the beginning)
let numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); 
// ---------------------------------------------------------------
// concat() (joins multiple array & returns new array it will not change old array)
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result);
// ---------------------------------------------------------------

// slice() (Extracts a portion of an array nedd to provide starting index and ending index but it will not include the ending index & it will not change the orginal array)

let numbers = [1, 2, 3, 4];
let sliced = numbers.slice(1, 3); 
console.log(sliced); 
---------------------------------------------------------------
// splice() (Adds or removes elements or replace and change the orginal array
// it needs 3 parameters start indx, delete count, new element )
// array.splice(start, deleteCount, item1, item2, ...);
// start: The index at which to start modifying the array.
// deleteCount: The number of elements to remove (optional).
// item1, item2, ...: Elements to add to the array (optional).
// Removing elements

// 1 You can use splice() to remove elements from an array.


let arr = ["a", "b", "c", "d", "e"];
arr.splice(2, 2); 

console.log(arr);



// ------------------------------------------
// Replacing elements
// You can replace elements by combining deletion and addition.

let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y"); // Start at index 1, remove 2 elements, add "x" and "y"

console.log(arr); 
Explanation:

// ------------------------------------------
// 4. Removing all elements from a certain index
// You can remove all elements from a specific index to the end.

let arr = ["a", "b", "c", "d", "e"];
arr.splice(2); 

console.log(arr); 

// -------------------------------------------------------------------
// 5. Extracting removed elements

// The splice() method returns the removed elements.

let arr = ["a", "b", "c", "d"];
let removed = arr.splice(1, 2); 

console.log(arr); 
console.log(removed); 


// --------------------------------------------------------------------

// 6. Inserting elements at the beginning
// You can insert elements at the start of an array.

let arr = ["b", "c"];
arr.splice(0, 0, "a"); // Start at index 0, remove 0 elements, add "a"

console.log(arr); 

========================================================================

