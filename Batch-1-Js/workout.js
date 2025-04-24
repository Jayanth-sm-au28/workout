// Datatypes
// Primitive Data Types

// String, Number, float, BigInt, Boolean, Undefined, Null, Symbol

// Non-Primitive Data Type

// Object (including Arrays, Functions, Dates, etc.)

// let text = "abc"
// console.log(typeof(text))
// let number = 10.6
// console.log(typeof(number))

// let bigInt =23346887675456667868665546545n

// console.log(bigInt)// let isLoggedIn = false;


// let isLoggedIn = true;

// if (isLoggedIn) {
//   console.log("Welcome, user!");  
// } else {
//   console.log("Please log in.");
// }


// let studentName
// console.log(studentName)
// let student1= null
// console.log(student1)

// function greet(message, ...names) {
//     let names = ['John', 'Jane', 'Doe']

//     // 'names' collects all arguments after 'message' into an array
//     console.log(names); // 
//   }
//   greet()

// function sum(a,b){
//  return a-b
// }
// let solution = sum(4,2)
// console.log(solution)

// const car = {
//     name:"Maruti suzuki",
//     model:"swift",
//     yearOfManufacturing:"2025"
// }
console.log( typeof (car))


// let number = 10
// number = number.toString()
// console.log(typeof(number))

let names = [] 

let objects{}

function functionName(){}
functionName()


// What are Operators in JavaScript?
// Operators in JavaScript are symbols or keywords used to perform operations on value They can be used for calculations, comparisons, logical operations,  etc.


// Types of Operators in JavaScript

// Arithmetic Operators: Used for mathematical calculations (e.g., addition, subtraction).

// Comparison Operators: Used to compare two values (e.g., ==, ===, >, <).

// Logical Operators: Used to combine conditions (e.g., &&, ||, !).

// Conditional (Ternary) Operator: Used as a shorthand for if-else (e.g., condition ? value1 : value2).

// Spread operator & Rest Operator

________________________________________


// 1. Arithmetic Operators
// Used for basic mathematical operations.
let a = 5, b = 3;
console.log(a + b); 

// (Subtraction): Subtracts the second value from the first.
let a = 5, b = 3;
console.log(a - b); 

// (Multiplication): Multiplies two values.
let a = 5, b = 3;
console.log(a * b); 

// (Division): Divides the first value by the second.
let a = 6, b = 3;
console.log(a / b); 

// (Modulus): Returns the remainder when the first value is divided by the second.
let a = 5, b = 3;
console.log(a % b); 

// ++ (Increment): Increases the value by 1.
let a = 5;
a++;
console.log(a)

// (Decrement): Decreases the value by 1.
let a = 5;
a--;
console.log(a); 
________________________________________

// 2. Comparison Operators
// Used to compare two values and return a Boolean result.

// == (Equal): Checks if two values are equal, ignoring data types.
console.log(5 == '5'); // Output: true

// === (Strict Equal): Checks if two values are equal and of the same data type.
console.log(5 === '5'); // Output: false


// ! (NOT) operator in JavaScript is a logical operator that reverses the boolean value 
If the value is true, it becomes false.
If the value is false, it becomes true.

let isRaining = true;
console.log(!isRaining);

// != (Not Equal): Checks if two values are not equal.
console.log(5 != 3); // Output: true

// !== (Strict Not Equal): Checks if two values are not equal or not of the same data type.
console.log(5 !== '5'); // Output: true

// > (Greater Than): Checks if the left value is greater than the right value.
console.log(5 > 3); // Output: true

// < (Less Than): Checks if the left value is less than the right value.
console.log(5 < 3); // Output: false

// >= (Greater Than or Equal): Checks if the left value is greater than or equal to the right value.
console.log(5 >= 3); // Output: true

// <= (Less Than or Equal): Checks if the left value is less than or equal to the right value.
console.log(5 <= 3); // Output: false
________________________________________

// 3. Logical Operators

// && is a logical operator used to combine two or more conditions.

// Returns true: If both condition1 and condition2 are true.
// Returns false: If either condition1 or condition2 is false.

let a = true, b = false;
console.log(a && b); // Output: false

 Using AND with Multiple Conditions
let temperature = 25;
let isSunny = true;

if (temperature > 20 && isSunny) {
  console.log("It's a perfect day for the beach!");
} else {
  console.log("Maybe another day.");
}

// Combining More Than Two Conditions
let username = "admin";
let password = "12345";
let isLoggedIn = true;

if (username === "admin" && password === "12345" && isLoggedIn) {
  console.log("Welcome, admin!");
} else {
  console.log("Invalid credentials.");
}

|| (Logical OR): Returns true if at least one of the operands is true.
Returns true: If at least one of condition1 or condition2 is true.
Returns false: If both condition1 and condition2 are false.

let a = true, b = false;
console.log(a || b); // Output: true


let isUserLoggedIn = true;
let hasPermission = false;
-----------------------------


if (isUserLoggedIn || hasPermission) {
  console.log("Access granted.");
} else {
  console.log("Access denied.");
}

//  Combining More Than Two Conditions
let username = "user";
let password = "12345";
let isLoggedIn = false;

if (username === "admin" || password === "12345" || isLoggedIn) {
  console.log("Access granted.");
} else {
  console.log("Invalid credentials.");
}

// ! (Logical NOT): Inverts the Boolean value.
Returns true: If the condition is false (because it is inverted).
Returns false: If the condition is true (because it is inverted).

let a = true;
console.log(!a); // Output: false
-----------------------------------------
let isRaining = false;

if (!isRaining) {
  console.log("You can go outside, it's not raining!");
} else {
  console.log("Better stay inside, it's raining.");
}
-----------------------------------
let isLoggedIn = true;

if (!isLoggedIn) {
  console.log("Please log in.");
} else {
  console.log("Welcome back!");
}
________________________________________

// 4. if else statement (Conditional) Operator

let age = 18;
let result;

if (age >= 18) {
  result = 'Adult';
} else {
  result = 'Child';
}


let a = 10;
let b = 20;

if (a > b) {
    console.log("a is larger");
} else if (a < b) {
    console.log("b is larger");
} else {
    console.log("Both are equal");
}
------------------------------------
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 50) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// Ternary (Conditional) Operator
// A shorthand for if-else statements.
// Syntax:  condition ? expressionIfTrue : expressionIfFalse;
// Checks a condition and returns one of two values based on the result.
let age = 18;
let result = (age >= 18) ? 'Adult' : 'Child';
console.log(result); // Output: "Adult"

example for if else
let age = 18;
let result;

if (age >= 18) {
  result = 'Adult';
} else {
  result = 'Child';
}

console.log(result);

example-2
let num = 10;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result);  // Output: "Even"
________________________________________

// 5 Spread (...) and Rest (...) Operator
// Spread (...) allows us to quickly copy all or part of an existing array or object into another array or object

let arr = [1, 2, 3];
let newArr = [...arr, 4, 5];
console.log(newArr); // Output: [1, 2, 3, 4, 5]

example-2
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
// Output: [1, 2, 3, 4, 5, 6]

example-3
const user = { name: "Alice", age: 25 };
const extraInfo = { city: "New York", profession: "Engineer" };

const fullProfile = { ...user, ...extraInfo };

console.log(fullProfile);
// Output: { name: "Alice", age: 25, city: "New York", profession: "Engineer" }


// •	Rest: Used to collect all remaining parameters in a function into an array.

function fruits(...n){
   return  console.log(n)

}
fruits("apple","kiwi","mango","guva")
output =[ 'apple', 'kiwi', 'mango', 'guva' ]
=================================================================================================

Definition:
// A loop is a programming construct used to repeat a block of code multiple times until a certain condition is met or is no longer true. Loops help avoid writing the same code repeatedly.

Why do we use loops?

To save time by automating repetitive tasks.
To reduce errors by avoiding repetitive manual coding.
To process data efficiently, such as iterating over arrays or objects.

How do loops work?
Loops use a condition to decide when to stop repeating.

If the condition is true, the loop continues to execute.
If the condition is false, the loop stops.

Types of Loops in JavaScript:
// For Loop: Used when you know exactly how many times the code should run.
// While Loop: Used when the number of repetitions is not known in advance, and it depends on a condition.
// Do-While Loop: Similar to the while loop but executes the code at least once, even if the condition is false.
// for...of loop: For iterating over the values of an iterable (arrays, strings, etc.).
// For-In Loop: Used to loop through the properties of an object.
// Example: Listing all the keys in an object.


-----------------------------------------------------------
// For Loop: Used when you know exactly how many times the code should run.
Example: Counting numbers from 1 to 5.
for(let i = 0; i<5; i++ ){
    // console.log("hi")
    console.log("i=",i)
}

console.log("loop ended")-

console.log(i) testing

for(let i = 0; i<5; i++ ){
    // console.log("hi")
    console.log("i=",i)
}

console.log("loop ended")
console.log("i")

infinite loop
for(let i = 0; i>=0; i++ ){
    // console.log("hi")
    console.log("i=",i)
}

// --------------------------------------------------------------------------
// While Loop: Used when the number of repetitions is not known in advance, and it depends on a condition.

let i=1
while(i<=5){
    console.log(" i =", i)
    i++
}
// ----------------------------------------------------------------------------
// Do-While Loop: Similar to the while loop but executes the code at least once, even if the condition is false.
let i = 20 
do{
    console.log("hi")
}while (i<=10);

let i = 20 
do{
    console.log(" i =", i)
}while (i<=10);

to print numbers
let i = 1 
do{
    console.log(" i =", i)
    i++
}while (i<=5);
// ------------------------------------------------------------------------------------------
// for...of loop: For iterating over the values of an iterable (arrays, strings, etc.).

let userName = "Anand" 
for(let i of userName){
    console.log(i)
}

to check the size of strings
let userName = "Anand";
let nameSize = 0;
for (let i of userName) {
  nameSize++;

  console.log("i = ", i);
}
console.log(" Name Length = ", nameSize);

const fruits = ['apple', 'banana', 'cherry'];
for (let fruit of fruits) {
    console.log(fruit); // Outputs: apple, banana, cherry
}
// -------------------------------------------------------------------------------
// For-In Loop: Used to loop through the properties of an object.
// Example: Listing all the keys in an object.

const person = { name: "Alice", age: 25, job: "Developer" };
for (let key in person) {
//   console.log(key + ": " + person[key]);
}

let student = {
  name: "john",
  age: "20",
  isPass: true,
  bloodGroup:"O+ve"
};
// console.log(student)

for (let i in student){
    console.log("key is",i, "Value is", student[i])
} 

// ========================================================================================

What Are Functions?
A function in programming is like a reusable block of code that performs a specific task

Functions are useful because:

They help avoid repeating code.
They make programs easier to read and debug.
They allow you to organize your code into smaller, manageable parts.

Here’s the basic structure of a function in JavaScript:

function functionName(parameters) {
    // Code to execute
    return result; // Optional, returns a value
}

function greet() {
    console.log("Hello, world!");
}

// Calling the function
greet();

function getGrade(marks) {
//   let marks = 90;

  if (marks >= 90) {
    console.log("Grade: A");
  } else if (marks >= 75) {
    console.log("Grade: B");
  } else if (marks >= 50) {
    console.log("Grade: C");
  } else {
    console.log("Grade: Fail");
  }
}

getGrade(60);


const getGrade = (marks) => {
    if (marks >= 90) {
      console.log("Grade: A");
    } else if (marks >= 75) {
      console.log("Grade: B");
    } else if (marks >= 50) {
      console.log("Grade: C");
    } else {
      console.log("Grade: Fail");
    }
  };
  
  getGrade(85); // Output: Grade: B
  getGrade(45);

________________________________________

Global Scope: Variables declared in the global context can be accessed anywhere in the program.

Function Scope: Variables declared inside a function are only accessible within that function.

Block Scope: Variables declared with let and const are limited to the block where they are 


console.log(blockScopedVar); 
// Global Scope
let globalVariable = "I am in the global scope";

function showScopes() {
  // Function Scope
  let functionVariable = "I am in the function scope";

  if (true) {
    // Block Scope
    let blockVariable = "I am in the block scope";
    console.log(blockVariable); // Accessible here: "I am in the block scope"
    console.log(functionVariable); // Accessible here: "I am in the function scope"
    console.log(globalVariable); // Accessible here: "I am in the global scope"
  }

  // console.log(blockVariable); // Error! blockVariable is not accessible here
  console.log(functionVariable); // Accessible here: "I am in the function scope"
  console.log(globalVariable); // Accessible here: "I am in the global scope"
}

// Calling the function
showScopes();
console.log("blockVariable.....", blockVariable);
// Global variable is accessible here
console.log(globalVariable); // Accessible here: "I am in the global scope"

// console.log(functionVariable); // Error! functionVariable is not accessible here
// console.log(blockVariable); // Error! blockVariable is not accessible here

==================================================================
arrow function
Syntax
variable name = ()=>
(param1, param2, ..., paramN) => expression
const add = (a, b) => a + b;
console.log(add(3, 5)); // Output: 8
Parentheses are required when there are multiple parameters.
-------------------------------------------------------------------------
3. Arrow Function with Multiple Statements

const greet = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};
console.log(greet("Jayanth")); // Output: "Hello, Jayanth!"
Curly braces {} are used for multiple statements, and return is explicitly written.

------------------------------------------------------------------------
4. Arrow Function Without Parameters
javascript
Copy code
const sayHello = () => "Hello, World!";
console.log(sayHello()); // Output: "Hello, World!"
Use empty parentheses () when there are no parameters.

// ========================================================================================
Arrays

1   Introduction to Arrays
Explanation: An array is a data structure used to store multiple values in a single variable. Arrays can hold different types of data, such as numbers, strings, objects, or even other arrays.
========================================================
 2       Array Indexing
Explanation: Arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.
let color = ["pink", "red", "white"]
console.log(color[0])
========================================================
3 Array Length
Explanation: The .length property returns the number of elements in an array.
let colors = ['red', 'green', 'blue'];
console.log(colors.length); 

-------------------------------------------------------------------
4 Accessing and Modifying Array Elements
Explanation: You can access an array element using its index. You can also modify elements by directly assigning a new value to a specific index. because array is mutable
let color = ["pink", "red", "white"]

console.log(color[0])
color[0]="blue"
console.log(color[0])

-------------------------------------------------------------------------
5 To print array: forloop & for of loop and for each loop

function to get the index and value

using for loop
function check(array){
  // console.log(array)
// let a = [1,2,3,4,5]
for(let i= 0;i<=array.length;i++ ){

// console.log(`${i} -> ${a[i]} `)
console.log("index",i, "value",array[i])
}
}
check([1,2,3,4,5])

ourput:index 1 value 2
index 2 value 3
index 3 value 4
index 4 value 5
index 5 value undefined
===================================================================
using for of 
let colors = ["pink","red","white"]
for (let value of colors ){
    console.log(value.toUpperCase()) uppercase is the method og string
}
output:PINK
RED
WHITE

=====================================================================

6 array methods:
In JavaScript, array methods are built-in functions that can be used to manipulate and work with arrays. They provide an easy way to perform operations like adding, removing, searching, sorting, and iterating over elements in an array.
----------------------------------------------------
arrays are muatible - we can change the array
note: there are three types of method
1 - Methods That Change the Original Array: [push, pop, unshift, shift, splice, sort, reverse, fill, copyWithin]
2 - Methods That Do Not Change the Original Array (Return a New Array): [map, filter, slice, concat, flat, flatMap, toSorted, toReversed]
Neutral Methods (Do Not Modify or Create Arrays): [forEach, some, every, find, findIndex, includes, ]



 push, pop, shift,concat(),slice(),splice()
------------------------------------------
push() (Adds an element  it may be single or multiple to the end)

let numbers = [1, 2, 3];
numbers.push(4,5,6);
console.log(numbers); // Output: [1, 2, 3, 4]
---------------------------------------------------------------
pop() (Removes the last element) but orginal array will change

let numbers = [1, 2, 3];
console.log(numbers);
let deletedNumbers = numbers.pop();
console.log(numbers);

console.log(deletedNumbers);
output:[ 1, 2, 3 ]
[ 1, 2 ]
3
---------------------------------------------------------------
toString() (it will convert the array into string) but orginal array will remain same
let numbers = [1, 2, 3];
console.log(numbers);
let tostring = numbers.toString();
console.log(tostring);
[ 1, 2, 3 ]
1,2,3
---------------------------------------------------------------

shift() (Removes the first element)


let numbers = [1, 2, 3];
numbers.shift();
console.log(numbers); // Output: [2, 3]
---------------------------------------------------------------
unshift() (Adds an element to the beginning)
let numbers = [2, 3];
numbers.unshift(1);
console.log(numbers); // Output: [1, 2, 3]
---------------------------------------------------------------
concat() (joins multiple array & returns new array it will not change old array)
let arr1 = [1, 2];
let arr2 = [3, 4];
let result = arr1.concat(arr2);
console.log(result); // Output: [1, 2, 3, 4]
---------------------------------------------------------------

slice() (Extracts a portion of an array nedd to provide starting index and ending index but it will not include the ending index & it will not change the orginal array)

let numbers = [1, 2, 3, 4];
let sliced = numbers.slice(1, 3); // Extracts elements from index 1 to 2
console.log(sliced); // Output: [2, 3]
---------------------------------------------------------------
splice() (Adds or removes elements or replace and change the orginal array
it needs 3 parameters start indx, delete count, new element )
array.splice(start, deleteCount, item1, item2, ...);
start: The index at which to start modifying the array.
deleteCount: The number of elements to remove (optional).
item1, item2, ...: Elements to add to the array (optional).
Removing elements

1 You can use splice() to remove elements from an array.


let arr = ["a", "b", "c", "d", "e"];
arr.splice(2, 2); // Start at index 2, remove 2 elements

console.log(arr); // ["a", "b", "e"]
Explanation:

start = 2: Start modifying at index 2 (element "c").
deleteCount = 2: Remove 2 elements ("c" and "d").
Result: The array is updated to ["a", "b", "e"].
let numbers = [1, 2, 3, 4];
---------------------------------
Adding elements
You can also use splice() to add new elements to an array.


let arr = ["a", "b", "c"];
arr.splice(1, 0, "x", "y"); // Start at index 1, remove 0 elements, add "x" and "y"

console.log(arr); // ["a", "x", "y", "b", "c"]
Explanation:

start = 1: Start modifying at index 1 (before "b").
deleteCount = 0: Do not remove any elements.
"x", "y": Add "x" and "y" at index 1.
Result: The array is updated to ["a", "x", "y", "b", "c"].

------------------------------------------
Replacing elements
You can replace elements by combining deletion and addition.

let arr = ["a", "b", "c", "d"];
arr.splice(1, 2, "x", "y"); // Start at index 1, remove 2 elements, add "x" and "y"

console.log(arr); // ["a", "x", "y", "d"]
Explanation:

start = 1: Start modifying at index 1 (element "b").
deleteCount = 2: Remove 2 elements ("b" and "c").
"x", "y": Add "x" and "y" at index 1.
Result: The array is updated to ["a", "x", "y", "d"].
------------------------------------------
4. Removing all elements from a certain index
You can remove all elements from a specific index to the end.

let arr = ["a", "b", "c", "d", "e"];
arr.splice(2); // Start at index 2, remove everything after

console.log(arr); // ["a", "b"]
Explanation:

start = 2: Start modifying at index 2 (element "c").
No deleteCount is specified, so all elements after index 2 are removed.
Result: The array is updated to ["a", "b"].

-------------------------------------------------------------------
5. Extracting removed elements

The splice() method returns the removed elements.

let arr = ["a", "b", "c", "d"];
let removed = arr.splice(1, 2); // Start at index 1, remove 2 elements

console.log(arr); // ["a", "d"]
console.log(removed); // ["b", "c"]
Explanation:

start = 1: Start modifying at index 1 (element "b").
deleteCount = 2: Remove 2 elements ("b" and "c").

--------------------------------------------------------------------
The removed elements (["b", "c"]) are stored in the variable removed.
6. Inserting elements at the beginning
You can insert elements at the start of an array.

let arr = ["b", "c"];
arr.splice(0, 0, "a"); // Start at index 0, remove 0 elements, add "a"

console.log(arr); // ["a", "b", "c"]
Explanation:

start = 0: Start modifying at index 0.
deleteCount = 0: Do not remove any elements.
"a": Add "a" at index 0.
Result: The array is updated to ["a", "b", "c"].

numbers.splice(1, 2, 5, 6); // Removes 2 elements starting at index 1 and adds 5, 6
console.log(numbers); // Output: [1, 5, 6, 4]
========================================================================

Array Iteration Methods are forEach(),map(),filter(),reduce()


forEach() (Executes a function on each element)
let numbers = [1, 2, 3];
numbers.forEach(num => console.log(num)); // Output: 1 2 3

------------------------------------------------------------------------------
map() (Creates a new array with results from a function)

let numbers = [1, 2, 3];
let doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]

-------------------------------------------------------------------------
filter() (Creates a new array with elements that pass the condition)

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

---------------------------------------------------------------------------
reduce() (Reduces the array to a single value)


let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10

==========================================================================


No, for loop and map are not the same, though they can sometimes be used to achieve similar results. Let me explain their differences in detail so you can teach this concept to your students clearly.

1. What is a for Loop?
A for loop is a general-purpose construct used to iterate over an array or a range of values.
It allows you to perform any kind of operation inside the loop (e.g., modifying, filtering, or transforming elements).
It doesn't inherently return anything unless you explicitly collect the results in a new array.
2. What is map?
map is a built-in array method specifically designed for transforming each element of an array and returning a new array of the same length.
It does not modify the original array.
It's often used in functional programming for clean and concise code.


-----------------------------------------------------------------------------------
1. map
What is map?
map is used to transform elements of an array.
It creates a new array by applying a callback function to each element of the original array.
The original array remains unchanged.

Syntax:
array.map((element, index, array) => {
  // return transformed value
});
element: The current element being processed.
index: The index of the current element.
array: The original array (optional parameter).
Example:

const numbers = [1, 2, 3, 4, 5];

// Double each number using map
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]
Explanation:
map iterates over each element in the numbers array.
For each element (num), it multiplies the number by 2 and returns the result.
These transformed values are stored in a new array called doubledNumbers.
When to use map:
Use map when you want to transform data, such as converting values, applying formulas, or formatting strings.
---------------------------------------------------------------
2. filter
What is filter?
filter is used to select specific elements from an array based on a condition.
It creates a new array containing only the elements that meet the condition.
The original array remains unchanged.

Syntax:
array.filter((element, index, array) => {
  // return true or false
});
element: The current element being processed.
index: The index of the current element.
array: The original array (optional parameter).
Example:

const numbers = [1, 2, 3, 4, 5];

// Get only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4]
console.log(numbers); // Original array remains unchanged: [1, 2, 3, 4, 5]
Explanation:
filter checks each element of the numbers array.
The condition num % 2 === 0 evaluates whether the number is even.
Only the elements that satisfy the condition (true) are included in the new array called evenNumbers.
When to use filter:
Use filter when you want to extract a subset of elements that meet a specific condition, such as finding even numbers, filtering by a keyword, or removing invalid data.

------------------------------------------------------------------------------------
3. forEach
What is forEach?
forEach is used to iterate over an array and execute a function for each element.
Unlike map and filter, it does not return a new array. It simply performs an action for each element.
When to use forEach:
Use forEach when you want to perform an action for each element without the need to return or create a new array, such as logging, updating the DOM, or making API calls.
Syntax:

array.forEach((element, index, array) => {
  // perform action
});
element: The current element being processed.
index: The index of the current element.
array: The original array (optional parameter).
Example:

const numbers = [1, 2, 3, 4, 5];

// Print each number
numbers.forEach((num) => {
  console.log(num);
});

// Output:
// 1
// 2
// 3
// 4
// 5
Explanation:
forEach loops through each element in the numbers array.
For each element (num), it executes the console.log() function.
Unlike map or filter, forEach does not return a new array or modify the original array.
=================================================================

2 - Methods That Do Not Change the Original Array (Return a New Array): [map, filter, slice, concat, flat, flatMap, toSorted, toReversed]


// 7 Array Iteration Methods are forEach(),map(),filter(),reduce()
Array Iteration Methods are forEach(),map(),filter(),reduce()


------------------------------------------------------------------------------

Higher order function
higher-order function is a function that can accept other functions as arguments, return functions as values, or both  example   such as filter(),map(),reduce(),some() etc,

Callback function
 Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function

---------------------------------------------------------------------
explination of parameters and org
// Function declaration with parameters `a` and `b`
function add(parm1, parm2) { 
  return a + b; // Using the parameters inside the function
}

// Function call with arguments `5` and `3`
const result = add(5, 3); // Here, `5` and `3` are the arguments

console.log(result);
----------------------------------------------------------------
map() (Creates a new array with results from a function)

another syntax with explanition:
const numbers = [1, 2, 3];
const originalArrayIncluded = numbers.map((num, index, array) => {
  console.log(array); // Logs the original array on each iteration
  return num * 2;
});
console.log(originalArrayIncluded);


numbers is the original array: [1, 2, 3].
map() is a method that takes a callback function with three arguments:
num: The current element being processed in the array.
index: The index of the current element.
array: The original array (numbers in this case) that map() is operating on.
--------------------------------------------------------------------------

# higher order function  example
syntax: let array = [1,2,3,4,5]
function sum (add){
    return add + 10
}
let mappedArray = array.map(sum)
console.log(mappedArray)



-------------------------------------------------
let array = [1,2,3,4,5]
let sum = numbers.map(num => {
    console.log(num); // Log the value of num
    return num * 2;   // Return the doubled value
  });
  
  console.log(doubled);

 another way of writing in short 
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);

console.log(doubled); 
-----------------------------------------
Example (copmaring both loop and map):

 let array = [1,2,3,4,5]

function sum (add){
    return add + 10
}

// console.log(sum(10))
let mappedArray = array.map(sum)
console.log("am result of mapped array",mappedArray)
console.log("am result of orginal array",array)



let numbers = [1,2,3,4,5];

for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i] + 10; // Directly modify the original array
}

console.log("am result of looped array",numbers); 


-----------------------------------------------

let numbers = [1, 2, 3];
let doubled = []; // Create a new array to store the results

for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2); // Multiply each number by 2 and add to the new array
}

console.log(doubled);



console.log(numbers); // Output: [1, 2, 3, 4] (original array is unchanged)
console.log(doubled);


-------------------------------------------------------------------------

map using object

let superHeros = [
  { firstName: "Tony", secondName: "Stark" },
  { firstName: "Peter", secondName: "Parker" },
  { firstName: "Bruce", secondName: "Banner" },
];

function showSuperHeroes(data){
    return data.firstName + " " + data.secondName
}


let a = superHeros.map(showSuperHeroes)
console.log(a)

---------------------------------------------------------

// Use an anonymous callback function within .map()

let superHeros = [
  { firstName: "Tony", secondName: "Stark" },
  { firstName: "Peter", secondName: "Parker" },
  { firstName: "Bruce", secondName: "Banner" },
];

let fullNames = superHeros.map(function(data) {
    return data.firstName + " " + data.secondName;
});

console.log(fullNames);

----------------------------------------------------------
Updated Code with Arrow Function:
let superHeros = [
  { firstName: "Tony", secondName: "Stark" },
  { firstName: "Peter", secondName: "Parker" },
  { firstName: "Bruce", secondName: "Banner" },
];

// Using an arrow function as the callback for .map()
let a = superHeros.map(data => data.firstName + " " + data.secondName);

console.log(a);

=====================================================================
filter() (Creates a new array with elements that pass the condition)

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

using for loop
let numbers = [1, 2, 3, 4, 5];
let evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]); // Add even number to the new array
  }
}

console.log(evenNumbers);



---------------------------------------------------------------

let userAge = [23,45,9,18.6,30,12,8]
let adultList = userAge.filter(checkAdult)
function checkAdult(age){
    return age >=18

}
console.log(adultList)


===========================================================
reduce() (Reduces the array to a single value)
array should not be empty else it will throgh error so wee add 0 as second arg also called initialValue ,
if we add a  undefined in the array in out put it show nan
solution 

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
----------------------------------

let numbers = [1,2,3,4,5, null, undefined]
let sum = numbers.reduce((acc, num) =>{
if(current === undefined){
  current =0
}
return prev + current
},0
)
-----------------------------------

Example 2: Finding the Maximum Value

let numbers = [10, 5, 100, 50];

let max = numbers.reduce((accumulator, currentValue) => {
  return (currentValue > accumulator) ? currentValue : accumulator;
} 0);

console.log(max);  // Output: 100
Explanation:
accumulator starts with the value 0 (provided as initialValue).
In each iteration:
On the first iteration: accumulator = 0, currentValue = 1. So, accumulator + currentValue = 0 + 1 = 1.
On the second iteration: accumulator = 1, currentValue = 2. So, accumulator + currentValue = 1 + 2 = 3.
This continues for all elements.
After processing all elements, the final result is 15 (the sum of all the numbers).
------------------------------------------------------

// Reduce method
let array = [ 2,3,1]
let accumulateSum = array.reduce((previous, currentValue,index,array) =>{
    console.log("previous",previous,"current",currentValue,"index",index,"array",array)

    return (currentValue > accumulator ) ? currentValue : accumulator
})

console.log(accumulateSum)
======================================================================================


// Objects:
// In JavaScript, objects are one of the core data types and are used to store collections of data and more complex entities. They consist of key-value pairs, where keys (or properties) are strings (or Symbols) and values can be of any data type, including other objects, arrays, or functions.
let userInfo = {
    fName: "baby",
    sName: "john",
    age: 20,
    city: "mumbai",
    favMovies: ["rrr", 22, "abc", "zcx"],
  };
  console.log(userInfo.fullName());
  -------------------------------------------------------------------------
  // Ex for nested object & this key word  or methods
  // Methods:
  // The functions defined inside the constructor become methods of each pet
  // Each pet can feed() and play() independently
  // Methods can access and modify the object's properties using this
  
  let userInfo = {
    fName: "baby",
    sName: "john",
    age: 20,
    city: "mumbai",
    favMovies: ["rrr", 22, "abc", "zcx"],
    salary: function () {
      return 90000;
    },
    fullName: function () {
      return this.fName + this.sName;
    },
  };
  console.log(userInfo.fullName());
  --------------------------------------------------------------------
  // Constructor
  // A constructor is a special function that creates and initializes objects
  // It's like a blueprint for creating similar objects with shared properties and methods
  // We use the new keyword to create instances from the constructor
  // Inside the constructor, this refers to the new object being created
  
  // Properties:
  // Each pet gets its own set of properties (name, species, hunger, energy, etc.)
  // These properties are unique to each instance
  // When we create a new, it starts with its own values
  
  
  // Methods:
  // The functions defined inside the constructor become methods of each 
  // Methods can access and modify the object's properties using this
  
  Constructor functions start with a capital letter (convention)
  Use this keyword to add properties and methods
  Use new keyword to create new objects
  Each object gets its own copy of the properties (make, model, year)
  
  Ex1
  function Car(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    const car1 = new Car("Toyota", "Camry", 2020);
    const car2 = new Car("Honda", "Civic", 2022);
    
    console.log(car1);
    console.log(car2);
    Key points:
  
  
   ------------------------------------------------------------------------ 
  Ex:2
  function UserInfo(fName, sName, age, city, favMovies) {
      this.fName = fName;
      this.sName = sName;
      this.age = age;
      this.city = city;
      this.favMovies = favMovies;
    
      this.salary = function () {
        return 90000;
      };
    
      this.fullName = function () {
        return this.fName + this.sName;
      };
    }
    
    const user = new UserInfo("baby", "john", 20, "mumbai", ["rrr", 22, "abc", "zcx"]);
  console.log({
    ...user,
    salary: user.salary(),
    fullName: user.fullName(),
  });
  
  Task: Create a Simple Library System
  What You’ll Create:
  You will write JavaScript code to simulate a library system. This system will:
  
  Store genres: Keep track of all the unique genres (like Fiction, Non-Fiction, Science, etc.) of the books added to the library.
  Manage a list of books: Store details about the books, including their title, author, and genre.
  Add books: Create a function to add new books to the library.
  Find books by genre: Create a function to find and display all books belonging to a specific genre.
  
  const genres = new Set(); // To store unique genres
  const books = []; // To store the list of books
  
  // Function to add a book
  function addBook(title, author, genre) {
    books.push({ title, author, genre }); // Add the book object
    genres.add(genre); // Add the genre to the Set
    console.log(`Book "${title}" by ${author} added under genre "${genre}".`);
  }
  
  // Function to get books by genre
  function getBooksByGenre(genre) {
    const booksInGenre = books.filter(book => book.genre === genre);
    if (booksInGenre.length === 0) {
      console.log(`No books found in the genre "${genre}".`);
      return;
    }
    console.log(`Books in the genre "${genre}":`);
    booksInGenre.forEach(book => {
      console.log(`- "${book.title}" by ${book.author}`);
    });
  }
  
  // Adding books to the library
  addBook("1984", "George Orwell", "Dystopian");
  addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
  addBook("Brave New World", "Aldous Huxley", "Dystopian");
  addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
  
  // Displaying books by genre
  getBooksByGenre("Dystopian");
  getBooksByGenre("Romance");
  
  
  function Library() {
    const genres = new Set(); // To store unique genres
    const books = []; // To store the list of books
  
    // Method to add a book
    const addBook = function (title, author, genre) {
      books.push({ title, author, genre });
      genres.add(genre); // Add the genre to the Set
      console.log(`Book "${title}" by ${author} added under genre "${genre}".`);
    };
  
    // Method to get books by genre
    const getBooksByGenre = function (genre) {
      const booksInGenre = books.filter(book => book.genre === genre);
      if (booksInGenre.length === 0) {
        console.log(`No books found in the genre "${genre}".`);
        return [];
      }
      console.log(`Books in the genre "${genre}":`);
      booksInGenre.forEach(book => {
        console.log(`- "${book.title}" by ${book.author}`);
      });
      return booksInGenre;
    };
  
    // Method to display all genres
    const displayGenres = function () {
      console.log("Available genres:");
      genres.forEach(genre => console.log(`- ${genre}`));
    };
  
    // Return the functions to make them accessible
    return {
      addBook,
      getBooksByGenre,
      displayGenres,
    };
  }
  
  // Example Usage:
  const myLibrary = Library();
  
  myLibrary.addBook("1984", "George Orwell", "Dystopian");
  myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
  myLibrary.addBook("Brave New World", "Aldous Huxley", "Dystopian");
  myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
  
  myLibrary.displayGenres(); // Display all genres
  myLibrary.getBooksByGenre("Dystopian"); // List books in the Dystopian genre
  myLibrary.getBooksByGenre("Romance"); // No books found in this genre
//   ==================================================================================================

Set:
// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. Unlike arrays, Sets do not allow duplicate elements.
// syntax & creating Set
// let mySet = new Set([]);

const mySet = new Set([1, 2, 3, 4,1,2,2,3,4,5,]);
console.log(mySet)
mySet.add(55);
mySet.add(2);
console.log(mySet)

2. Adding elements to a Set:
You can add elements using the add() method. If the value already exists, it won't be added again.

mySet.add(5);
mySet.add(2); // Will not be added because 2 already exists

3. Checking if a value exists in a Set
You can use the has() method to check if a value is in the Set.
mySet.has(2); // true
mySet.has(10); // false

4. Removing elements from a Set
The delete() method removes an element from a Set.
mySet.delete(2); // Removes 2 from the Set

6. Size of a Set
The size property returns the number of elements in the Set.
console.log(mySet.size); // Number of elements

7. Clearing all elements in a Set
The clear() method removes all elements from the Set.
mySet.clear();
console.log(mySet.size); // 0

5. loops: We cannot directly use map() or other array-specific methods like filter() or reduce() with a Set because these methods are not available on Set objects. However, you can still iterate over a Set using loops or convert it into an array first to use map().

Here are your options for iterating over a Set:

1. Using for...of Loop
const mySet = new Set([1, 2, 3, 4]);
for (const value of mySet) {
  console.log(value);
}


2. Using forEach() Method
const mySet = new Set([1, 2, 3, 4]);
mySet.forEach(value => {
  console.log(value);
});
--------------------------------------------------------------------------------
In JavaScript, you can convert a Set into an Array easily using a few different methods.

1. Using the Spread Operator (...)
The spread operator expands the elements of the Set into an array.
let data = new Set([1,2,3,4,5,6])
console.log("am set",data)
data = [...data]
console.log( "am array" ,data)


2. Using the Array.from() Method
The Array.from() method converts an iterable or array-like object into an array. Since Set is iterable, you can pass it directly.
const mySet = new Set([1, 2, 3, 4]);
const myArray = Array.from(mySet);

console.log(myArray); // [1, 2, 3, 4]

3. Using a  for Loop
You can iterate over the Set and manually push its elements into an array.
const mySet = new Set([1, 2, 3, 4]);
const myArray = [];

for (const value of mySet) {
  myArray.push(value);
}

console.log(myArray); // [1, 2, 3, 4]

===========================================================================================
not necessary

In JavaScript, you can convert a Set into a Map by iterating over the Set and creating key-value pairs. Since a Set only stores values (no inherent keys), you need to define how the keys will be generated.

1.Using Array Index as the Key
const mySet = new Set(["apple", "banana", "cherry"]);
const myMap = new Map();

let index = 0;
for (const value of mySet) {
  myMap.set(index, value);
  index++;
}

console.log(myMap);
// Map(3) { 0 => 'apple', 1 => 'banana', 2 => 'cherry' }
----------------------------------------

2. Using the Spread Operator
const mySet = new Set(["apple", "banana", "cherry"]);

// Spread operator to create key-value pairs
const myMap = new Map([...mySet].map((value, index) => [index, value]));

console.log(myMap);
// Map(3) { 0 => 'apple', 1 => 'banana', 2 => 'cherry' }
// ============================================================================================
Closer
Closer  allows variables outside of the scope of a function to be accessed. Usually, a closure is created when a function is defined in another function, allowing the inner function to access variables in the outer one. 

The Concept
Calling the Outer Function: When you call outerFunction(), it does not immediately run the inner function. Instead, it returns the inner function (but not the result of the inner function — just the function itself).

Storing the Inner Function: By storing that inner function in a variable (like closureFunction), we can use it later whenever we want to execute it.

function outerFunction() {
    let outerVariable = "I am from the outer scope";

    function innerFunction() {
        console.log(outerVariable); // Accessing the outer variable
    }

    return innerFunction;
}

const closureFunction = outerFunction(); // Creates a closure
closureFunction(); // "I am from the outer scope"

function createRecipe() {
  let secretSpice = "Cayenne Pepper"; // The secret spice (variable)
  let ingredients=["chicken","oil","onion"]
  secretSpice="abc"
  // This function "remembers" the secret spice when it's called later
  return function serveDish() {
     return console.log("This dish has " + ingredients.join(",") + " " +secretSpice+" as a ingredient!");
  };
}

const myRecipe = createRecipe();  // Create the recipe (recipe remembers the secret spice)
myRecipe();  // Outputs: "This dish has Cayenne Pepper as a secret ingredient!"


------------------------------------------------------
function greet() {
    let name = "John"; // Outer function variable

    function sayHello() { // Inner function
        console.log("Hello, " + name); // Accessing 'name' from the outer function
    }

    return sayHello; // Return the inner function
}
console.log(greet())
const greetJohn = greet(); // 'greet' runs and returns 'sayHello'
greetJohn(); // Output: "Hello, John"

===========================================================================================
Hosting
In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local 
var a  //declaration
x=v //assignment or initialization
valuehosting: calling function before initialization

hosting()

function hosting(){
    console.log("hello")
}

----------------------------------------------------

declaration Hoisting:
var a;

function greet() {
  console.log(a);
}

greet()
a = "hello";


=================================================================================

prototype:
In JavaScript, prototypes are a powerful feature that allow objects to share properties and methods.

let parent = {
  name: "Jones",
  age: 30,
  city: "mumbai",
  area: "Bhandra",
};

let child = {
  name: "Baby",
  age: 12,
};

Object.setPrototypeOf(child, parent);
Object.setPrototypeOf(child, parent);
Object.prototype.phoneNo = 12345678;  // making universal
console.log(child.phoneNo);
---------------------------------------------------------
Simple Explanation of prototype in Functions
function Person(name, age) {
    this.name = name; // Instance property
    this.age = age;   // Instance property
}

// Adding a method to the prototype
Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

// Creating objects using the constructor function
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Output: Hello, my name is Alice and I am 25 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 30 years old.
--------------------------------------------------------------------------
const robotPrototype = {
    walk: function () {
      console.log("Robot is walking");
    },
    talk: function () {
      console.log("Robot is talking");
    }
  };
  
  // Create new robots that use the prototype
  const robot1 = Object.create(robotPrototype);
  const robot2 = Object.create(robotPrototype);
  
  robot1.walk(); // "Robot is walking" (borrowed from the prototype)
  robot1.talk(); // "Robot is talking" (borrowed from the prototype)
==============================================================================
Call/apply/bind
in JavaScript, we cannot use the other object properties and methods 
so to overcome this restriction we can use cal apply and bind

in call we can tie a function into an object as if it belonged to the object.

The apply() method does the exact same as call(). The difference is that call() accepts an argument list, but apply() accepts an array of arguments.

In bind instead of executing a function immediately, bind() returns a function that can be executed later on.

Call example var obj = { num: 2 };
	
	function add(a, b){
	  return this.num + a + b;
	}
	
	console.log(add.call(obj, 3, 5));
Output 10

apply example
var obj = { num: 2 };
	
	function add(a, b){
	  return this.num + a + b;
	}
	
	console.log(add.apply(obj, [3, 5]));


	
bind 
var obj = { num: 2 };
	
	function add(a, b){
	  return this.num + a + b;
	}
	
	const func = add.bind(obj, 3, 5);
	func();

call apply bind
var obj = { num: 2 };
	
	function add(a, b){
	  return this.num + a + b;
	}
	
	const resultCall  = add.call(obj, 3, 5);
	const resultApply = add.apply(obj, [3, 5]);
	const funcBind    = add.bind(obj, 3, 5)
	const resultBind  = funcBind();
	
	console.log(resultCall, resultApply, resultBind);

Event Bubbling
Event bubbling is a type of event propagation where the event first triggers on the innermost target element, and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy till it reaches the outermost DOM element or document object (Provided the handler is initialized).

Promise
 A Promise is an object that represents the eventual resolve or reject of an asynchronous operation, and its resulting value


async and await

Inside an async function, you can use the await keyword before a call to a function that returns a promise. This makes the code wait at that point until the promise is settled, at which point the fulfilled value of the promise is treated as a return value, or the rejected value is thrown.
================================================================================
Ex:2
function UserInfo(fName, sName, age, city, favMovies) {
    this.fName = fName;
    this.sName = sName;
    this.age = age;
    this.city = city;
    this.favMovies = favMovies;
  
    this.salary = function () {
      return 90000;
    };
  
    this.fullName = function () {
      return this.fName + this.sName;
    };
  }
  
  const user = new UserInfo("baby", "john", 20, "mumbai", ["rrr", 22, "abc", "zcx"]);
console.log({
  ...user,
  salary: user.salary(),
  fullName: user.fullName(),
});
Task: Create a Simple Library System
What You’ll Create:
You will write JavaScript code to simulate a library system. This system will:

Store genres: Keep track of all the unique genres (like Fiction, Non-Fiction, Science, etc.) of the books added to the library.
Manage a list of books: Store details about the books, including their title, author, and genre.
Add books: Create a function to add new books to the library.
Find books by genre: Create a function to find and display all books belonging to a specific genre.

const genres = new Set(); // To store unique genres
const books = []; // To store the list of books

// Function to add a book
function addBook(title, author, genre) {
  books.push({ title, author, genre }); // Add the book object
  genres.add(genre); // Add the genre to the Set
  console.log(`Book "${title}" by ${author} added under genre "${genre}".`);
}

// Function to get books by genre
function getBooksByGenre(genre) {
  const booksInGenre = books.filter(book => book.genre === genre);
  if (booksInGenre.length === 0) {
    console.log(`No books found in the genre "${genre}".`);
    return;
  }
  console.log(`Books in the genre "${genre}":`);
  booksInGenre.forEach(book => {
    console.log(`- "${book.title}" by ${book.author}`);
  });
}

// Adding books to the library
addBook("1984", "George Orwell", "Dystopian");
addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
addBook("Brave New World", "Aldous Huxley", "Dystopian");
addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");

// Displaying books by genre
getBooksByGenre("Dystopian");
getBooksByGenre("Romance");


function Library() {
  const genres = new Set(); // To store unique genres
  const books = []; // To store the list of books

  // Method to add a book
  const addBook = function (title, author, genre) {
    books.push({ title, author, genre });
    genres.add(genre); // Add the genre to the Set
    console.log(`Book "${title}" by ${author} added under genre "${genre}".`);
  };

  // Method to get books by genre
  const getBooksByGenre = function (genre) {
    const booksInGenre = books.filter(book => book.genre === genre);
    if (booksInGenre.length === 0) {
      console.log(`No books found in the genre "${genre}".`);
      return [];
    }
    console.log(`Books in the genre "${genre}":`);
    booksInGenre.forEach(book => {
      console.log(`- "${book.title}" by ${book.author}`);
    });
    return booksInGenre;
  };

  // Method to display all genres
  const displayGenres = function () {
    console.log("Available genres:");
    genres.forEach(genre => console.log(`- ${genre}`));
  };

  // Return the functions to make them accessible
  return {
    addBook,
    getBooksByGenre,
    displayGenres,
  };
}

// Example Usage:
const myLibrary = Library();

myLibrary.addBook("1984", "George Orwell", "Dystopian");
myLibrary.addBook("To Kill a Mockingbird", "Harper Lee", "Fiction");
myLibrary.addBook("Brave New World", "Aldous Huxley", "Dystopian");
myLibrary.addBook("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");

myLibrary.displayGenres(); // Display all genres
myLibrary.getBooksByGenre("Dystopian"); // List books in the Dystopian genre
myLibrary.getBooksByGenre("Romance"); // No books found in this genre
// ===================================================================================
// Hosting
// In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local 

// var normal function

// let const & arrow functions 

// console.log(arwFunction())
console.log(a())


function a (){
    return 10
}

const arwFunction = ()=>{
    return "I am arrow function"
}
// ==============================================================================================
// prototype/inherit:
// In JavaScript, prototypes are a powerful feature that allow objects to share properties and methods.

// let parent = {
//   name: "john",
//   age: 30,
//   phoneNo: 1234567,
//   city: "Mumbai",
//   area: "Bhandra",
// };

// let child = {
//   name: "Baby",
//   age: 12,
// };
// Object.setPrototypeOf(child,parent)
// // Object.setPrototypeOf(child,parent)
// console.log(child.city)
// console.log(child.phoneNo)

let robotProtoType = {
    walk: function () {
      console.log("Robot is Walking ");
    },
    talk: function () {
      console.log(" Robot is Talking ");
    },
  };
  const robot = Object.create(robotProtoType);
  // const robot2 = Object.create(robotProtoType)
  robot.walk();
  // robot1.talk();
  // robot2.walk();
  // robot2.talk();
  
  
// =================================================================================


Destructuring in JavaScript
Destructuring is a feature introduced in ES6 (ECMAScript 2015) that allows you to extract values from arrays or properties from objects into distinct variables. This syntax provides a clean and concise way to access and assign values.
Basic Syntax:
const [variable1, variable2, ...rest] = array;

Extracting Values:
const numbers = [10, 20, 30, 40];
const [first, second] = numbers;
console.log(first); // 10
console.log(second); // 20

Skipping Values:
const numbers = [10, 20, 30, 40];
const [, , third] = numbers; // Skipping the first two values
console.log(third); // 30

Using Default Values:
const numbers = [10];
const [first, second = 20] = numbers; // second gets a default value
console.log(first); // 10
console.log(second); // 20

Rest Pattern in Arrays:
const numbers = [10, 20, 30, 40];
const [first, ...rest] = numbers;
console.log(first); // 10
console.log(rest); // [20, 30, 40]

Nested Destructuring
const numbers = [10, [20, 30]];
const [first, [second, third]] = numbers;
console.log(second); // 20
console.log(third); // 30

----------------------------------------------------------------------

2. Object Destructuring :note: u have to give same name as property name if u want to coustamize the variable name  for that renaming
Basic Syntax:
const { key1, key2, ...rest } = object;

Extracting Properties:
const person = { name: "John", age: 25 };
const { name, age } = person;
console.log(name); // John
console.log(age); // 25


Using Default Values:
const person = { name: "John" };
const { name, age = 30 } = person; // age gets a default value
console.log(age); // 30

Renaming Variables:
const person = { name: "John", age: 25 };
const { name: fullName, age: years } = person;
console.log(fullName); // John
console.log(years); // 25


Rest Pattern in Objects:
const person = { name: "John", age: 25, city: "New York" };
const { name, ...rest } = person;
console.log(name); // John
console.log(rest); // { age: 25, city: "New York" }

Nested Destructuring
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
console.log(city); // New York
console.log(zip); // 10001

-------------------------------------------------------------
4. Function Parameter Destructuring

With Objects:
function display({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "John", age: 25 };
display(person); // Name: John, Age: 25

##########################################################

With Arrays:
EXAMPLE 1:
function sum([a, b]) {
    return a + b;
}

console.log(sum([10, 20])); // 30
-----------------------------------------------------
example:2 Returning and Destructuring an Array

Use Case: when we want to extract values from a function that returns an array.

What happens here?

The user function returns an array: ["john", 20, "goa"].
This array is destructured into variables name, age, and city using the array destructuring

function user(){
    return["john",20,"goa"]
}
console.log(user())
let [name,age,city]= user()
console.log(name,age,city)
---------------------------------------------------
EXAMPLE 3 Destructuring in Function Parameters

Use Case: when we pass an array to a function and want to work directly with its elements inside the function.

What happens here?
The user function accepts an array as its parameter.
Using destructuring directly in the function's parameter list, it extracts the array's elements into variables name, age, and city:

function user([name,age,city]){
    console.log(name,age,city)
    }
    user(["james",20,"mumbai"])

==========================================================================

revision of syncronus and asycronus and call back  and
async await ----- promise-------call back

synchronous 

console.log("Step 1: ");
console.log("Step 2: ");
console.log("Step 3: ");
console.log("Step 4: ");
console.log("Step 5: ");
console.log("Step 6:");


asynchronous.

console.log("Step 1"); // First, you need bread
console.log("Step 2"); // Then, spread peanut butter

setTimeout(() => {
  console.log("Step 3"); // Simulate some delay for spreading jelly
}, 2000);

console.log("Step 4"); // Finally, make the sandwich
console.log("Step 5");
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

asynchronous and callback hell
console.log("Step 1");

setTimeout(() => {
  console.log("Step 2");
  
  setTimeout(() => {
    console.log("Step 3");
    setTimeout(() => {
      console.log("Step 4");
      
      setTimeout(() => {
        console.log("Step 5");
      }, 1000);
      
    }, 1000);
  }, 1000);
}, 1000);
console.log("Step 10")


-------------------------------------------------------------------------------
callback: is a function passed as an arugument to another function
Example:
function fullName(firstName, secondName) {
  console.log(firstName + " " + secondName); // Concatenate variables with a space
}

function userName(firstName, secondName, sumCallback) {
  sumCallback(firstName, secondName); // Call the callback with arguments
}

// Pass the arguments as strings
userName("Baby", "John", fullName);
----
#EXAMPLE 2 USING SETTIMEOUT
const greet = ()=>{
    console.log("Good Morning")
}
setTimeout(greet,3000)

-----------------------------------------------------------------

What is Callback Hell?
Callback hell happens in JavaScript when you have too many nested callbacks, making the code hard to read, understand, and maintain.

function processOrder(orderId, nextOrder) {
  setTimeout(() => {
    console.log(`Processed order ${orderId}`);
    if (nextOrder) {
      nextOrder();
    }
  }, 2000);
}

processOrder(1, () => {
  processOrder(2, () => {
    processOrder(3, () => {
      processOrder(4, () => {
        processOrder(5);
      });
    });
  });
});


-------------------------------------------------------------
function logIn(userId, nextStep) {
    setTimeout(() => {
      console.log(`User ${userId} logging in...`);
      if (nextStep) {
        nextStep();
      }
    }, 2000);
  }
  
  function chooseSubscription(userId, nextStep) {
    setTimeout(() => {
      console.log(`User ${userId} choosing subscription...`);
      if (nextStep) {
        nextStep();
      }
    }, 2000);
  }
  
  function setPreferences(userId, nextStep) {
    setTimeout(() => {
      console.log(`User ${userId} setting preferences...`);
      if (nextStep) {
        nextStep();
      }
    }, 2000);
  }
  
  function confirmPayment(userId, nextStep) {
    setTimeout(() => {
      console.log(`User ${userId} confirming payment...`);
      if (nextStep) {
        nextStep();
      }
    }, 2000);
  }
  
  function completeSignup(userId) {
    setTimeout(() => {
      console.log(`User ${userId} has successfully completed the signup process!`);
    }, 2000);
  }
  
  // Using nested callbacks to chain tasks:
  logIn(1, () => {
    chooseSubscription(1, () => {
      setPreferences(1, () => {
        confirmPayment(1, () => {
          completeSignup(1);
        });
      });
    });
  });
  
=============================================================================
SO we promise is introduce to solve this issue

A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises allow us to handle asynchronous operations more cleanly and avoid callback hell, which is common with nested callbacks.

Why use promises?
1 Avoid callback hell (where you have too many nested functions and it gets messy).
2 Handle asynchronous actions (like fetching data from a website) in a more structured and readable way.

Visualizing the states of a promise:
Pending: The promise is still being processed.
Resolved: The promise was successful, and you got the result.
Rejected: The promise failed, and you got an error.

example:
let promise = new Promise((resolve,reject)=>{
console.log("am Promise")
resolve("sucessful")
})
------------------------------------------------------------
using then and catch block

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = false; // Simulate success or failure

    success ? resolve("Data loaded!") : reject("Error loading data.");
  });
};

fetchData()
  .then((result) => console.log("Resolved:", result))
  .catch((error) => console.log("Rejected:", error));

  -----------------------------------------------------------------------------------------
  // Simulate two promises
const fetchData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      success ? resolve("Data from API 1 loaded!") : reject("Error loading data from API 1.");
    }, 1000); // Simulate delay of 1 second
  });
};

const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; // Simulate success or failure
      success ? resolve("Data from API 2 loaded!") : reject("Error loading data from API 2.");
    }, 1500); // Simulate delay of 1.5 seconds
  });
};

// Execute both promises at the same time
Promise.all([fetchData1(), fetchData2()])
  .then((results) => {
    // This will run if both promises resolve successfully
    console.log("All promises resolved:", results);
  })
  .catch((error) => {
    // This will run if any promise rejects
    console.log("One of the promises failed:", error);
  });

  ----------------------------------------------------------------------
  promise chaining:
  Promise chaining is a powerful technique in JavaScript for handling asynchronous operations in a sequential manner. It involves chaining .then() methods to execute a series of tasks where the output of one task is passed as input to the next.
  // Step 1: Boil water
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Water is boiled!");
      resolve("Boiled Water"); // Pass the boiled water to the next step
    }, 1000);
  });
}

// Step 2: Brew tea
function brewTea(water) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Tea is brewed using ${water}!`);
      resolve("Brewed Tea"); // Pass the brewed tea to the next step
    }, 1000);
  });
}

// Step 3: Serve tea
function serveTea(tea) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Tea is served: ${tea}`);
      resolve("Enjoy your tea!");
    }, 1000);
  });
}

// Chaining the Promises
boilWater()
  .then((boiledWater) => brewTea(boiledWater)) // Step 2: Brew tea with boiled water
  .then((brewedTea) => serveTea(brewedTea))    // Step 3: Serve the brewed tea
  .then((message) => console.log(message))     // Final message
  .catch((error) => console.error("Error:", error)); // Handle any errors

Explanation:
boilWater:

Returns a Promise that resolves after 1 second, indicating the water is boiled.
The resolved value is "Boiled Water".
brewTea:

Takes the boiled water as input and returns a Promise that resolves after 1 second, indicating the tea is brewed.
The resolved value is "Brewed Tea".
serveTea:

Takes the brewed tea as input and returns a Promise that resolves after 1 second, indicating the tea is served.
The resolved value is "Enjoy your tea!".
Chaining:

The result of one Promise is passed to the next:
Boiled water → Brew tea → Serve tea.
The .then() blocks handle each step in sequence.
Error Handling:

If any step fails, the .catch() block handles the error.

-----------------------------------------------------------------------------------------------------------
What are async and await?
async:

Used to define a function that returns a Promise.
The function automatically wraps its return value in a Promise.
await:

Used to pause the execution of an async function until the Promise is resolved.
Makes asynchronous code look synchronous and easier to read.

// Step 1: Boil water
function boilWater() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Water is boiled!");
      resolve("Boiled Water");
    }, 1000);
  });
}

// Step 2: Brew tea
function brewTea(water) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Tea is brewed using ${water}.`);
      resolve("Brewed Tea");
    }, 1000);
  });
}

// Step 3: Serve tea
function serveTea(tea) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Tea is served: ${tea}`);
      resolve("Enjoy your tea!");
    }, 1000);
  });
}

async function makeTea() {
  try {
    const water = await boilWater();
    const tea = await brewTea(water);
    const message = await serveTea(tea);
    console.log(message);
  } catch (error) {
    console.error("Error:", error);
  }
}



========================================================================================

The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document (such as HTML or XML) as a tree of objects, making it possible to access, modify, and manipulate the document's content, structure, and styles dynamically using JavaScript.

We use the DOM (Document Object Model) to manipulate and interact with web pages dynamically. It provides a way for developers to programmatically access, modify, and respond to changes in the structure, content, and style of a webpage. Here are the key reasons why the DOM is used:

Advantages of the DOM
Dynamically update content, styles, and attributes.
Create interactive user interfaces.
Access and manipulate the structure of a webpage.
--------------------------------------------------------------------------------
Key Concepts of the DOM

1) Tree Structure:
The DOM represents the HTML document as a tree-like structure where each element, attribute, and piece of text is a node.

The topmost node is the document object, representing the entire HTML document.

Elements (like <div>, <p>, etc.) are element nodes.

Text within elements is a text node.

Attributes are attribute nodes.




-----------------------------------------------------------------------------------
Accessing the DOM
JavaScript provides multiple ways to interact with the DOM.

Accessing Elements:

1) document.getElementById("id"): Select an element by its ID.

note it only select one first id it will ignore the rest

<h1 id="h1">Hello</h1>
<script>
  const h1 = document.getElementById("h1");
  console.log(h1.textContent); // Outputs: Hello
</script>

2) document.getElementsByName Select an element by its name.
  <input type="text" name="username" value="John" />
    <input type="text" name="username" value="Doe" />
    <script>
      const inputs = document.getElementsByName("username");
      console.log(inputs);
    </script>

3) document.getElementsByClassName("class"): Select elements by class name.

and can select from id to classname

 <h1 class="heading">hi</h1>
    <h1 class="heading">hello</h1>
    <div id="test">
      <h1 class="heading">welome</h1>
      <h1 class="heading">back</h1>
    </div>

    <script>
      let container = document.getElementById("test");

      const cls = container.getElementsByClassName("heading");
      console.log(container);
    </script>

4) document.getElementsByTagName("tag"): Select all elements by same tag name.
<h1>Heading1</h1>
<h1>Heading2</h1>

<h1>Heading3</h1>

<script>
  const headings = document.getElementsByTagName("h1");
  console.log(headings[1].textContent); // Outputs: Heading
</script>

5) document.querySelector("selector"): Select the first element matching a CSS selector.
  <div id="idcontainer">id Content</div>
    <div class="classcontainer">class Content</div>

    <script>
      const container = document.querySelector(".classcontainer");
      console.log(container.textContent);// output full div
      console.log(container.textContent); // Outputs: Content
    </script>

6) document.querySelectorAll("selector"): Select all elements matching a CSS selector.
and we can also use on div and tags also document.querySelectorAll("div,h1")

<h1 class="heading">hi</h1>
    <h1 class="heading">hello</h1>
    <div id="test">
      <h1 class="heading">welome</h1>
      <h1 class="heading">back</h1>
    </div>

    <script>
  let qAll = document.querySelectorAll(".heading")
  console.log(qAll)
    </script>
------------------------------------------------------------------------
7) accessing parent node through child element
<div id="parent">
  <h1 id="child">This is a child element</h1>
</div>

<script>
  // Access the child element
  const child = document.getElementById("child");
  
  // Access the parent node through the child element
  const parent = child.parentNode;
  
  console.log(parent); // Logs the <div> element (parent)
</script>
-----------------------------------------------------------------------------
8) accessing child node through parent 


  <div class="parent">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
    <h1>Heading 3</h1>
  </div>
  
  <script>
    // Accessing the parent element
    const parent = document.querySelector(".parent");
    
    // Accessing all child nodes of the parent
    const children = parent.children; // returns an HTMLCollection of child elements
    
    // Accessing the first child node (first <h1>)
        console.log(children[0].textContent);
        // or
    console.log(parent.firstElementChild); 
      // to print all the child
    console.log(parent.childNodes)

  </script>

  9) finding the siblings previous and next
  <div class="parent">
    <h1>Heading 1</h1>
    <h1 class="test">Heading 2</h1>
    <h1>Heading 3</h1>
    <h1>Heading 3</h1>

  </div>
  
  <script>
   let sib = document.querySelector(".test")
    console.log(sib.previousElementSibling)
    console.log(sib.nextElementSibling)
</script>
------------------------------------------------------
10) Creating tag
document.createElement("tag"): Create a new element.

let createDiv = document.createElement("div");  // Creates a new div element
  createDiv.innerHTML = "<p> hello</p>";           // Sets inner HTML of the div
  console.log(createDiv);  


11) append child or Adding New Elements with ID Attributes

element.appendChild(node): Add a child node to an element.
      <script>
  
  let createDiv = document.createElement("div");  // Creates a new div element
  createDiv.innerHTML = "<p> hello </p>";          // Sets inner HTML of the div
  
  // Appends the div to the body
  document.body.appendChild(createDiv);

  // Set the id of the div element
  createDiv.id = "title_div";

  // Access the <p> element inside the div and set its id
  let paragraph = createDiv.querySelector("p");
  paragraph.id = "title_p";

  // Log the created div element and its contents
  console.log(createDiv);
</script>
-------------------------------------
The append() method allows you to add one or more elements or text nodes to a parent element.
<body>
    <h2>Example of Using the append() Method</h2>
    <div id="container"></div>

    <script>
      // Select the parent element
      const container = document.getElementById("container");

      // Create a new paragraph element
      const paragraph1 = document.createElement("p");
      paragraph1.textContent = "This is the first paragraph.";

      // Create another paragraph element
      const paragraph2 = document.createElement("p");
      paragraph2.textContent = "This is the second paragraph.";

      // Append both elements and a string to the container
      container.append(paragraph1, paragraph2, "This is additional text!");

      console.log(container); // Logs the container with its children
    </script>
  </body>
  ---------------------------------------------------------------------------------
12)
element.removeChild(node): Remove a child node.
<ul id="list"><li id="item">Remove Me</li></ul>
<script>
  const list = document.getElementById("list");
  const item = document.getElementById("item");
  list.removeChild(item); // Removes <li>Remove Me</li>
</script>

13) element.replaceChild(newNode, oldNode): Replace a child node.
<ul id="list"><li id="oldItem">Old Item</li></ul>
<script>
  const list = document.getElementById("list");
  const oldItem = document.getElementById("oldItem");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.replaceChild(newItem, oldItem); // Replaces oldItem with newItem
</script>


Modifying Elements

element.innerHTML: Change or retrieve the content of an element.
<div id="content">Old Content</div>
<script>
  const content = document.getElementById("content");
  content.innerHTML = "New Content"; // Updates content
</script>

element.textContent: Change or retrieve text-only content.
<h1 id="header">Old Header</h1>
<script>
  const header = document.getElementById("header");
  header.textContent = "New Header"; // Updates text-only content
</script>

element.setAttribute("attribute", "value"): Set an attribute value.
<img id="image" />
<script>
  const img = document.getElementById("image");
  img.setAttribute("src", "image.jpg"); // Adds src attribute
</script>

element.style.property: Change an element's CSS styles.
Creating and Removing Nodes:
<p id="paragraph">Style me!</p>
<script>
  const paragraph = document.getElementById("paragraph");
  paragraph.style.color = "blue"; // Changes text color to blue
</script>
----------------------------------------------------------------------------

Events in javascript
In JavaScript, an event is an action or occurrence that happens in the browser, which JavaScript can detect and respond to. Events are crucial for creating interactive web pages because they allow developers to execute code when specific actions are performed by the user or the browser.


Types of Events in JavaScript

Mouse Events:

1)click: Triggered when an element is clicked.

<button id="clickButton">Click Me</button>
<script>
  document.getElementById("clickButton").addEventListener("click", () => {
    alert("Button clicked!");
  });
</script>

-----------------------------------------------------------------------------------
2) mousemove: Triggered when the mouse is moved over an element.

  <div id="trackArea" style="width: 300px; height: 100px; background: lightblue;"></div>
  <p id="coordinates"></p>
  <script>
    const area = document.getElementById("trackArea");
    const coords = document.getElementById("coordinates");
    area.addEventListener("mousemove", (e) => {
      coords.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
    });
  </script>

--------------------------------------------------------------------------
mouseover: Triggered when the mouse pointer enters an element.
<div id="hoverArea" style="width: 100px; height: 100px; background: lightgreen;"></div>
<script>
  const hoverArea = document.getElementById("hoverArea");
  hoverArea.addEventListener("mouseover", () => {
    hoverArea.textContent = "Mouse Over";
  });
  hoverArea.addEventListener("mouseout", () => {
    hoverArea.textContent = "";
  });
</script>
----------------------------------------------------------------------------------


Keyboard Events:

keypress: Triggered when a key is pressed down.
document.addEventListener("click", function(e) {
  console.log(e.target);  // Outputs: the element that was clicked
});

<body>
  <input type="text" id="textInput" placeholder="Type something">
<p id="keyInfo"></p>
<script>
  const input = document.getElementById("textInput");
  const keyInfo = document.getElementById("keyInfo");
  input.addEventListener("keydown", (e) => {
    keyInfo.textContent = `Key Down: ${e.key}`;
  });
  input.addEventListener("keyup", (e) => {
    keyInfo.textContent = `Key Up: ${e.key}`;
  });
</script>
------------------------------------------------------------------
Form Events:

submit: Triggered when a form is submitted.
  <form id="myForm">
    <input type="text" placeholder="Enter your name" required>
    <button type="submit">Submit</button>
  </form>
  
  <script>
    document.getElementById("myForm").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the form from submitting
      console.log("Form submitted!"); // Log the message to the console
    });
  </script>


change: 
Triggered when the value of an input element changes.
  <select id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <p id="selection"></p>
  
  <script>
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("change", () => {
      // Log the selected value to the console
      console.log(`Selected: ${dropdown.value}`);
  
      // Update the text content of the <p> element
      document.getElementById("selection").textContent = `Selected: ${dropdown.value}`;
    });
  </script>


focus: Triggered when an element gains focus. &
blur: Triggered when an element loses focus.

 <input type="text" id="focusInput" placeholder="Focus on me">
  <p id="focusStatus"></p>
  <script>
    const input = document.getElementById("focusInput");
    const status = document.getElementById("focusStatus");
    input.addEventListener("focus", () => {
      status.textContent = "Input is focused!";
    });
    input.addEventListener("blur", () => {
      status.textContent = "Input lost focus!";
    });
  </script>

Window Events:


resize: Triggered when the browser window is resized.

 <script>
    window.addEventListener("resize", () => {
      console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
    });
  </script>
scroll: Triggered when the page is scrolled.
  <div style="height: 2000px;">Scroll down</div>
<script>
  window.addEventListener("scroll", () => {
    console.log(`Scroll position: ${window.scrollY}px`);
  });
</script>




Event Handlers in JavaScript
Event Handlers are JavaScript functions that are executed when an event is triggered on an HTML element. They define what happens in response to specific user actions or browser events.

 <button id="myButton">Click Me!</button>
  <p id="output"></p>

  <script>
    // Select the button element
    const button = document.getElementById("myButton");

    // Define the event handler function
    function showMessage() {
      document.getElementById("output").textContent = "Button was clicked!";
    }

    // Attach the event handler to the button
    button.addEventListener("click", showMessage);
  </script>






  +======================================================================================
  // The DOM (Document Object Model) is a programming interface for web documents. It represents the structure of a document as a tree of objects, making it possible to access, modify, and manipulate the document's content, structure, and styles dynamically using JavaScript.

// We use the DOM (Document Object Model) to manipulate and interact with web pages dynamically. It provides a way for developers to programmatically access, modify, and respond to changes in the structure, content, and style of a webpage. Here are the key reasons why the DOM is used:

// Advantages of the DOM
// Dynamically update content, styles, and attributes.
// Create interactive user interfaces.
// Access and manipulate the structure of a webpage.
// --------------------------------------------------------------------------------
// Key Concepts of the DOM






// -----------------------------------------------------------------------------------
// Accessing the DOM
// JavaScript provides multiple ways to interact with the DOM.

// Accessing Elements:

// 1) document.getElementById("id"): Select an element by its ID.
// note it only select one first id it will ignore the rest
<h1 id="h1">Hello</h1>
<script>
  const h1 = document.getElementById("h1");
  console.log(h1.textContent); // Outputs: Hello
</script>

// 2) document.getElementsByName Select an element by its name.
  <input type="text" name="username" value="John" />
    <input type="text" name="username" value="Doe" />
    <script>
      const inputs = document.getElementsByName("username");
      console.log(inputs);
    </script>

// 3) document.getElementsByClassName("class"): Select elements by class name.

// and can select from id to classname

 <h1 class="heading">hi</h1>
    <h1 class="heading">hello</h1>
    <div id="test">
      <h1 class="heading">welome</h1>
      <h1 class="heading">back</h1>
    </div>

    <script>
      let container = document.getElementById("test");

      const cls = container.getElementsByClassName("heading");
      console.log(container);
    </script>

// 4) document.getElementsByTagName("tag"): Select all elements by same tag name.
<h1>Heading1</h1>
<h1>Heading2</h1>

<h1>Heading3</h1>

<script>
  const headings = document.getElementsByTagName("h1");
  console.log(headings[1].textContent); // Outputs: Heading
</script>

// 5) document.querySelector("selector"): Select the first element matching a CSS selector.
  <div id="idcontainer">id Content</div>
    <div class="classcontainer">class Content</div>

    <script>
      const container = document.querySelector(".classcontainer");
      console.log(container.textContent);// output full div
      console.log(container.textContent); // Outputs: Content
    </script>

// 6) document.querySelectorAll("selector"): Select all elements matching a CSS selector.
// and we can also use on div and tags also document.querySelectorAll("div,h1")

<h1 class="heading">hi</h1>
    <h1 class="heading">hello</h1>
    <div id="test">
      <h1 class="heading">welome</h1>
      <h1 class="heading">back</h1>
    </div>

    <script>
  let qAll = document.querySelectorAll(".heading")
  console.log(qAll)
    </script>
------------------------------------------------------------------------
// 7) accessing parent node through child element
<div id="parent">
  <h1 id="child">This is a child element</h1>
</div>

<script>
  // Access the child element
  const child = document.getElementById("child");
  
  // Access the parent node through the child element
  const parent = child.parentNode;
  
  console.log(parent); // Logs the <div> element (parent)
</script>
-----------------------------------------------------------------------------
{/* 8) accessing child node through parent  */}


  <div class="parent">
    <h1>Heading 1</h1>
    <h1>Heading 2</h1>
    <h1>Heading 3</h1>
  </div>
  
  <script>
    // Accessing the parent element
    const parent = document.querySelector(".parent");
    
    // Accessing all child nodes of the parent
    const children = parent.children; // returns an HTMLCollection of child elements
    
    // Accessing the first child node (first <h1>)
        console.log(children[0].textContent);
        // or
    console.log(parent.firstElementChild); 
      // to print all the child
    console.log(parent.childNodes)

  </script>
{/* ---------------------------------------------------------------------------- */}
  {/* 9) finding the siblings previous and next */}
  <div class="parent">
    <h1>Heading 1</h1>
    <h1 class="test">Heading 2</h1>
    <h1>Heading 3</h1>
    <h1>Heading 3</h1>

  </div>
  
  <script>
   let sib = document.querySelector(".test")
    console.log(sib.previousElementSibling)
    console.log(sib.nextElementSibling)
</script>
{/* ------------------------------------------------------ */}
10) Creating tag
document.createElement("tag"): Create a new element.

let createDiv = document.createElement("div");  // Creates a new div element
  createDiv.innerHTML = "<p> hello</p>";           // Sets inner HTML of the div
  console.log(createDiv);  


{/* 11) append child or Adding New Elements with ID Attributes */}

{/* element.appendChild(node): Add a child node to an element. */}
<script>
  let createDiv = document.createElement("div");  // Creates a new div element
  createDiv.innerHTML = "<p> hello </p>";          // Sets inner HTML of the div
  
  // Appends the div to the body
  document.body.appendChild(createDiv);

  // Set the id of the div element
  createDiv.id = "title_div";

  // Access the <p> element inside the div and set its id
  let paragraph = createDiv.querySelector("p");
  paragraph.id = "title_p";

  // Log the created div element and its contents
  console.log(createDiv);
</script>
-------------------------------------
{/* The append() method allows you to add one or more elements or text nodes to a parent element. */}
<body>
    <h2>Example of Using the append() Method</h2>
    <div id="container"></div>

    <script>
      // Select the parent element
      const container = document.getElementById("container");

      // Create a new paragraph element
      const paragraph1 = document.createElement("p");
      paragraph1.textContent = "This is the first paragraph.";

      // Create another paragraph element
      const paragraph2 = document.createElement("p");
      paragraph2.textContent = "This is the second paragraph.";

      // Append both elements and a string to the container
      container.append(paragraph1, paragraph2, "This is additional text!");

      console.log(container); // Logs the container with its children
    </script>
  </body>
  {/* ---------------------------------------------------------------------------------
12) */}
{/* element.removeChild(node): Remove a child node. */}
<ul id="list"><li id="item">Remove Me</li></ul>
<script>
  const list = document.getElementById("list");
  const item = document.getElementById("item");
  list.removeChild(item); // Removes <li>Remove Me</li>
</script>
{/* ------------------------------------------------------------------------------------------- */}
{/* 13) element.replaceChild(newNode, oldNode): Replace a child node. */}
<ul id="list"><li id="oldItem">Old Item</li></ul>
<script>
  const list = document.getElementById("list");
  const oldItem = document.getElementById("oldItem");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  list.replaceChild(newItem, oldItem); // Replaces oldItem with newItem
</script>

{/* ----------------------------------------------------------------------------- */}
Modifying Elements

element.innerHTML: Change or retrieve the content of an element.
<div id="content">Old Content</div>
<script>
  const content = document.getElementById("content");
  content.innerHTML = "New Content"; // Updates content
</script>
{/* ------------------------------------------------------------------------------------- */}
{/* element.textContent: Change or retrieve text-only content. */}
<h1 id="header">Old Header</h1>
<script>
  const header = document.getElementById("header");
  header.textContent = "New Header"; // Updates text-only content
</script>

{/* element.setAttribute("attribute", "value"): Set an attribute value. */}
<img id="image" />
<script>
  const img = document.getElementById("image");
  img.setAttribute("src", "image.jpg"); // Adds src attribute
</script>

{/* element.style.property: Change an element's CSS styles.
Creating and Removing Nodes: */}
<p id="paragraph">Style me!</p>
<script>
  const paragraph = document.getElementById("paragraph");
  paragraph.style.color = "blue"; // Changes text color to blue
</script>
----------------------------------------------------------------------------

{/* Events in javascript
In JavaScript, an event is an action or occurrence that happens in the browser, which JavaScript can detect and respond to. Events are crucial for creating interactive web pages because they allow developers to execute code when specific actions are performed by the user or the browser. */}


{/* Types of Events in JavaScript */}

{/* Mouse Events: */}

{/* 1)click: Triggered when an element is clicked. */}

<button id="clickButton">Click Me</button>
<script>
  document.getElementById("clickButton").addEventListener("click", () => {
    alert("Button clicked!");
  });
</script>

-----------------------------------------------------------------------------------
{/* 2) mousemove: Triggered when the mouse is moved over an element. */}

  <div id="trackArea" style="width: 300px; height: 100px; background: lightblue;"></div>
  <p id="coordinates"></p>
  <script>
    const area = document.getElementById("trackArea");
    const coords = document.getElementById("coordinates");
    area.addEventListener("mousemove", (e) => {
      coords.textContent = `X: ${e.offsetX}, Y: ${e.offsetY}`;
    });
  </script>

--------------------------------------------------------------------------
{/* mouseover: Triggered when the mouse pointer enters an element. */}
<div id="hoverArea" style="width: 100px; height: 100px; background: lightgreen;"></div>
<script>
  const hoverArea = document.getElementById("hoverArea");
  hoverArea.addEventListener("mouseover", () => {
    hoverArea.textContent = "Mouse Over";
  });
  hoverArea.addEventListener("mouseout", () => {
    hoverArea.textContent = "";
  });
</script>
----------------------------------------------------------------------------------


{/* Keyboard Events: */}

{/* keypress: Triggered when a key is pressed down. */}
document.addEventListener("click", function(e) {
  console.log(e.target);  // Outputs: the element that was clicked
});

<body>
  <input type="text" id="textInput" placeholder="Type something">
<p id="keyInfo"></p>
<script>
  const input = document.getElementById("textInput");
  const keyInfo = document.getElementById("keyInfo");
  input.addEventListener("keydown", (e) => {
    keyInfo.textContent = `Key Down: ${e.key}`;
  });
  input.addEventListener("keyup", (e) => {
    keyInfo.textContent = `Key Up: ${e.key}`;
  });
</script>
------------------------------------------------------------------
{/* Form Events: */}

{/* submit: Triggered when a form is submitted. */}
  <form id="myForm">
    <input type="text" placeholder="Enter your name" required>
    <button type="submit">Submit</button>
  </form>
  
  <script>
    document.getElementById("myForm").addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent the form from submitting
      console.log("Form submitted!"); // Log the message to the console
    });
  </script>


{/* change: 
Triggered when the value of an input element changes. */}
  <select id="dropdown">
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
  </select>
  <p id="selection"></p>
  
  <script>
    const dropdown = document.getElementById("dropdown");
    dropdown.addEventListener("change", () => {
      // Log the selected value to the console
      console.log(`Selected: ${dropdown.value}`);
  
      // Update the text content of the <p> element
      document.getElementById("selection").textContent = `Selected: ${dropdown.value}`;
    });
  </script>


{/* focus: Triggered when an element gains focus. &
blur: Triggered when an element loses focus. */}

 <input type="text" id="focusInput" placeholder="Focus on me">
  <p id="focusStatus"></p>
  <script>
    const input = document.getElementById("focusInput");
    const status = document.getElementById("focusStatus");
    input.addEventListener("focus", () => {
      status.textContent = "Input is focused!";
    });
    input.addEventListener("blur", () => {
      status.textContent = "Input lost focus!";
    });
  </script>
{/* ---------------------------------------------------------------------------- */}
Window Events:


resize: Triggered when the browser window is resized.

 <script>
    window.addEventListener("resize", () => {
      console.log(`Window size: ${window.innerWidth}x${window.innerHeight}`);
    });
  </script>
scroll: Triggered when the page is scrolled.
  <div style="height: 2000px;">Scroll down</div>
<script>
  window.addEventListener("scroll", () => {
    console.log(`Scroll position: ${window.scrollY}px`);
  });
</script>




Event Handlers in JavaScript
Event Handlers are JavaScript functions that are executed when an event is triggered on an HTML element. They define what happens in response to specific user actions or browser events.

 <button id="myButton">Click Me!</button>
  <p id="output"></p>

  <script>
    // Select the button element
    const button = document.getElementById("myButton");

    // Define the event handler function
    function showMessage() {
      document.getElementById("output").textContent = "Button was clicked!";
    }

    // Attach the event handler to the button
    button.addEventListener("click", showMessage);
  </script>
