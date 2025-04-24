//  What Are Functions?
//  A function in programming is like a reusable block of code that performs a specific task

// Functions are useful because:

// They help avoid repeating code.
// They make programs easier to read and debug.
// They allow you to organize your code into smaller, manageable parts.

// Definition: You define a function with a name and a block of code that tells it what to do.
// Calling: Once defined, you can "call" or "invoke" the function whenever you need it.
// Parameters: Functions can take inputs (called parameters) to process.
// Return Value: Functions can give back (return) a result.


// function (){

// }
// () means this function takes no input (parameters).
// Inside the curly braces {}, we define what the function does.





// Global Scope: Variables declared in the global context can be accessed anywhere in the program.

// Function Scope: Variables declared inside a function are only accessible within that function.

// Block Scope: Variables declared with let and const are limited to the block where they are defined (e.g., inside if statements, loops, etc.).


// ====================================================================================

// arrow function
// Syntax
// variable name = ()=>
// variable name = (param1, param2, ..., paramN) => {expression}
const add = (a, b) => a + b;
console.log(add(3, 5)); 
// Parentheses are required when there are multiple parameters.

// Arrow Function with Multiple Statements

const greet = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};
console.log(greet("fruits")); 
// Curly braces {} are used for multiple statements, and return is explicitly written.