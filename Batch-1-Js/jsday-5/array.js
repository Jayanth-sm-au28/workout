// Higher order function
// higher-order function is a function that can accept other functions as arguments, return functions as values, or both  example   such as filter(),map(),reduce(),some() etc,

// example for higher order Function:
let numbers = [1, 2, 3, 4, 5, 6];
function sum(add) {
  return add + 10;
}
let mappedArray = numbers.map(sum);
console.log(mappedArray);
// ================================================================================

// Callback function
// Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function

// example:
function planGoa(friendComing, callback) {
  console.log("Planning a trip to Goa...");

  if (friendComing) {
    callback(true);
  } else {
    callback(false);
  }
}

function decision(isComing) {
  if (isComing) {
    console.log("Since my friend is coming, I will also join the trip to Goa!");
  } else {
    console.log("My friend is not coming, so I won't go to Goa.");
  }
}

const isFriendComing = true;
planGoa(isFriendComing, decision);
// =====================================================================

// map:
//  map() is one a Higher-Order Function, map() Creates a new array with results from a function

// why do we use map:
// when we want to manipulate the array with out changing orginal array

// const numbers = [1, 2, 3];
const originalArrayIncluded = numbers.map((num, index, array) => {
  console.log(array); // Logs the original array on each iteration
  return num * 2;
});
console.log(originalArrayIncluded);

// numbers is the original array: [1, 2, 3].
// map() is a method that takes a callback function with three arguments:
// num: The current element being processed in the array.
// index: The index of the current element.
// array: The original array (numbers in this case) that map() is operating on.
// ---------------------------------------------------------------------------

let array = [1, 2, 3, 4, 5];
let sum = numbers.map((num) => {
  console.log(num); // Log the value of num
  return num * 2; // Return the doubled value
});

console.log(doubled);

//  another way of writing in short
const doubled = numbers.map((num) => num * 2);

console.log(doubled);
// -----------------------------------------------------------------
// Example (copmaring both loop and map):

function sum(add) {
  return add + 10;
}

// console.log(sum(10))
let mappedArray1 = array.map(sum);
console.log("am result of mapped array", mappedArray1);
console.log("am result of orginal array", array);

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 10; // Directly modify the original array
}

console.log("am result of looped array", numbers);
// -----------------------------------------------------------------

let superHeros = [
  {
    firstName: "Tony",
    secondName: "stark",
  },
  { firstName: "Peter", secondName: "Parker" },
  { firstName: "Bruce", secondName: "Banner" },
];
let fullName = superHeros.map(function (data) {
  console.log(data);
  return data.firstName + " " + data.secondName;
});
console.log(fullName);
// ---------------------------------------------
//  using arrow function

let fullName1 = superHeros.map(
  (data) => data.firstName + " " + data.secondName
);
console.log(fullName1);
// --------------------------------------------------------------------------
// let numbers = [1,2,3,4];
let sum = numbers.reduce((previous, currentValue, index, array) => {
  console.log("am prev", previous, "am current", currentValue);
  return previous + currentValue;
});

console.log(sum);
// ==========================================================================

// filter() (Creates a new array with elements that pass the condition)

let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); 

// -----------------------------------------------------------------
// higher order function using filter()
let userAge = [23,45,9,18.6,30,12,8]
let adultList = userAge.filter(checkAdult)
function checkAdult(age){
    return age >=18

}
console.log(adultList)
// ======================================================================================
// reduce() (Reduces the array to a single value)
// array should not be empty else it will throgh error so wee add 0 as second arg also called initialValue ,


let accumulateSum = array.reduce((previous, currentValue,index,array) =>{
    console.log("previous",previous,"current",currentValue,"index",index,"array",array)

    return (currentValue > accumulator ) ? currentValue : accumulator
})

console.log(accumulateSum)

// --------------------------------------------------------------------------

// Example 2: Finding the Maximum Value


let max = numbers.reduce((accumulator, currentValue) => {
  return (currentValue > accumulator) ? currentValue : accumulator;
} );

console.log(max);  // Output: 100
// Explanation:
// accumulator starts with the value 0 (provided as initialValue).
// In each iteration:
// On the first iteration: accumulator = 0, currentValue = 1. So, accumulator + currentValue = 0 + 1 = 1.
// On the second iteration: accumulator = 1, currentValue = 2. So, accumulator + currentValue = 1 + 2 = 3.
// This continues for all elements.
// After processing all elements, the final result is 15 (the sum of all the numbers).