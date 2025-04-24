// Destructuring in JavaScript
// Destructuring is a feature introduced in ES6 (ECMAScript 2015) that allows you to extract values from arrays or properties from objects into distinct variables. This syntax provides a clean and concise way to access and assign values.
// Basic Syntax:
const [variable1, variable2, ...rest] = array;

// Extracting Values:
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first); // 10
console.log(second); // 20

// Skipping Values:
const numbers = [10, 20, 30, 40];
const [, , third] = numbers;
console.log(third);

// Using Default Values:
const numbers = [10];
const [first, second = 20] = numbers;
console.log(first);
console.log(second);

// Rest Pattern in Arrays:
const numbers = [10, 20, 30, 40];
const [first, ...rest] = numbers;
console.log(first);
console.log(rest);

// Nested Destructuring
const numbers = [10, [20, 30]];
const [first, [second, third]] = numbers;
console.log(second);
console.log(third);

// ----------------------------------------------------------------------

// 2. Object Destructuring 
// Basic Syntax:
const { key1, key2, ...rest } = object;

// Extracting Properties:
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log(name);
console.log(age);

// Using Default Values:
const person = { name: "John" };
const { name, age = 30 } = person;
console.log(age);

// Renaming Variables:
const person = { name: "John", age: 25 };
const { name: fullName, age: years } = person;
console.log(fullName);
console.log(years);

// Rest Pattern in Objects:
const person = { name: "John", age: 25, city: "New York" };
const { name, ...rest } = person;
console.log(name);
console.log(rest);

// Nested Destructuring
const person = {
  name: "John",
  address: {
    city: "New York",
    zip: 10001,
  },
};

const {
  address: { city, zip },
} = person;
console.log(city);
console.log(zip);

// -------------------------------------------------------------
// 4. Function Parameter Destructuring

// With Objects:
function display({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "John", age: 25 };
display(person); // Name: John, Age: 25

// ##########################################################

// With Arrays:

// EXAMPLE 1:
function sum([a, b]) {
  return a + b;
}

console.log(sum([10, 20])); // 30
// -----------------------------------------------------
// example:2 Returning and Destructuring an Array

// Use Case: when we want to extract values from a function that returns an array.

// What happens here?

// The user function returns an array: ["john", 20, "goa"].
// This array is destructured into variables name, age, and city using the array destructuring

function user() {
  return ["john", 20, "goa"];
}
console.log(user());
let [name, age, city] = user();
console.log(name, age, city);
// ---------------------------------------------------
// EXAMPLE 3 Destructuring in Function Parameters

// Use Case: when we pass an array to a function and want to work directly with its elements inside the function.

// What happens here?
// The user function accepts an array as its parameter.
// Using destructuring directly in the function's parameter list, it extracts the array's elements into variables name, age, and city:

function user([name, age, city]) {
  console.log(name, age, city);
}
user(["james", 20, "mumbai"]);

// ==========================================================================

// revision of syncronus and asycronus and call back  and
// async await ----- promise-------call back

synchronous;

console.log("Step 1: ");
console.log("Step 2: ");
console.log("Step 3: ");
console.log("Step 4: ");
console.log("Step 5: ");
console.log("Step 6:");

asynchronous.console.log("Step 1");
console.log("Step 2");
setTimeout(() => {
  console.log("Step 3");
}, 2000);

console.log("Step 4");
console.log("Step 5");

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// asynchronous and callback hell
// console.log("Step 1");

// setTimeout(() => {
//   console.log("Step 2");

//   setTimeout(() => {
//     console.log("Step 3");
//     setTimeout(() => {
//       console.log("Step 4");

//       setTimeout(() => {
//         console.log("Step 5");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
// console.log("Step 10");

// -------------------------------------------------------------------------------
// callback: is a function passed as an arugument to another function
// Example:

// #EXAMPLE 2 USING SETTIMEOUT
// const greet = () => {
//   console.log("Good Morning");
// };
// setTimeout(greet, 3000);

// -----------------------------------------------------------------

// What is Callback Hell?
// Callback hell happens in JavaScript when you have too many nested callbacks, making the code hard to read, understand, and maintain.

// function processOrder(orderId, nextOrder) {
//   setTimeout(() => {
//     console.log(`Processed order ${orderId}`);
//     if (nextOrder) {
//       nextOrder();
//     }
//   }, 2000);
// }

// processOrder(1, () => {
//   processOrder(2, () => {
//     processOrder(3, () => {
//       processOrder(4, () => {
//         processOrder(5);
//       });
//     });
//   });
// });

// =============================================================================

// A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow us to handle asynchronous operations more cleanly and avoid callback hell, which is common with nested callbacks.

// Why use promises?
// 1 Avoid callback hell (where you have too many nested functions and it gets messy).
// 2 Handle asynchronous actions (like fetching data from a website) in a more structured and readable way.

// Visualizing the states of a promise:
// Pending: The promise is still being processed.
// Resolved: The promise was successful, and you got the result.
// Rejected: The promise failed, and you got an error.

// example:
// let promise = new Promise((resolve, reject) => {
//   console.log("am Promise");
//   resolve("sucessful");
// });
// ------------------------------------------------------------

// const fetchData = () => {
//   return new Promise((resolve, reject) => {
//     const success = false; // Simulate success or failure

//     success ? resolve("Data loaded!") : reject("Error loading data.");
//   });
// };

// fetchData()
//   .then((result) => console.log("Resolved:", result))
//   .catch((error) => console.log("Rejected:", error));
// =======================================================================
// Promise.all()
//  is a method in JavaScript that allows you to run multiple promises concurrently and handle their results once all of them are resolved. It takes an array (or any iterable) of promises and returns a single promise that resolves when all of the promises in the array resolve. If any of the promises reject, the Promise.all() will immediately reject with the error of the first promise that rejects.



// ================================================================================
// promise chaining:
// Promise chaining is a powerful technique in JavaScript for handling asynchronous operations in a sequential manner. It involves chaining .then() methods to execute a series of tasks where the output of one task is passed as input to the next.






// ==================================================================================
// What are async and await?

// async: 
//Used to define a function that returns a Promise.
// The function automatically wraps its return value in a Promise.


// await:
// Used to pause the execution of an async function until the Promise is resolved.
// Makes asynchronous code look synchronous and easier to read.