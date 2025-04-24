// 1 Introduction to Arrays []
// Explanation: An array is a data structure used to store multiple values in a single variable. Arrays can hold different types of data, such as numbers, strings, objects, or even other arrays.[]
// array can have  a duplicate value

// let array = ["a", 1, 1,1,1, true, 5.5,[a,b,c],{}]

// 2 Array Indexing
// Explanation: Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

// let numbers = ["a","b","c","d"]
// console.log(numbers[4])

// 3 Array Length
// Explanation: The .length property returns the number of elements in an array.
// let numbers = ["a","b","c",]
// console.log(numbers.length)

//  4 Accessing and Modifying Array Elements
// Explanation: You can access an array element using its index. You can also modify elements by directly assigning a new value to a specific index. because array is mutable

// let colors = ["red","green","yellow"]
// console.log(colors[0])
// colors[0] = "blue"
// console.log(colors[0])

//  5 how To print array
// let colors = ["red","green","yellow"]
// console.log(colors)

// printing array using for of loop

// function test(array) {
//   for (let value = 0; value <= array.length - 1; value++) {
//     console.log("am index", value, " am value", array[value]);

//   }

// }

// test(["red", "blue", "orange"]);
// ---------------------------------------------------------------------------------------
// iterating array using for of loop

// let colors = ["red", "pink", "blue"];
// for (let value of colors) {
//   console.log(value.toLocaleUpperCase());
// }

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
// let numbers = [1,2,3,4]
// console.log("before",numbers)

// numbers.push(5,5,6,7,true,"bold")
// console.log("after",numbers)

// ---------------------------------------------------------------
// pop() (Removes the last element) but orginal array will change
// let numbers = [1,2,3,]
// console.log("before",numbers)

// let deletedNumbers=numbers.pop()
// console.log(deletedNumbers)
// console.log(numbers)

// ---------------------------------------------------------------
// toString() (it will convert the array into string) but orginal array will remain same
// console.log(numbers)

// let tostring = numbers.toString()
// console.log( tostring)

// console.log(numbers)
// ---------------------------------------------------------------

// shift() (Removes the first element)
// let numbers = [1,2,3,4,5,6]

// numbers.shift()
// console.log(numbers)
// ---------------------------------------------------------------
// unshift() (Adds an element to the beginning)
// numbers.unshift(0)
// console.log(numbers)
// ---------------------------------------------------------------
// concat() (joins multiple array & returns new array it will not change old array)
// let array1 = [1,2,3,4, 'red', true]
// let Array2 = [4,5,6,]
// let result = array1.concat(Array2)
// console.log(result)
// ------------------------------------------

// slice() (Extracts a portion of an array nedd to provide starting index and ending index but it will not include the ending index & it will not change the orginal array)

// let array = [1,2,3,4,5,6,7,8,9,]
// let slicedArray = array.(1,4)
// console.log(slicedArray)

// ======================================================================

// let numbers = [1,2,3,4,5,6,7,8,9,]
// let dubbledNumb2rs = numbers.map(num=>num*2)
// console.log(dubbledNumb2rs)
// ========================================================================

// let oddnumbers = numbers.filter(num=> num%2)
// console.log(oddnumbers)

//  if the number is divisible by 3 = print Fizz
//  if the number is divisible by 5 = print fuzz
//  if the number is divisible by 5 and 3 = print Fizzfuzz

function game(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzFuzz");
    }else if(i % 3 === 0){
        console.log("fizz")
        
    }else if(i % 5 === 0){
        console.log("fuzz")
        
    }
    else{
        console.log(i)
    }
  }
}

game(45)