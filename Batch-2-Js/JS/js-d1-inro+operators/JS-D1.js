// 1 What is java script and how it works:
// Js is a  synchronoys , client side, event based, single thread, object oriented scripting language used for web application,

// 2 What make javascript unique and use case:

// Support to all type of browser, js have own frame work for servr side
// Complex things are easily done for ex typing and event based
// Full integration with html and css

// Java script is case sensitive

// 3 Java script frameworks and Library

// Framework
// •	A framework is a structured collection of tools, components, and rules that provides a foundation to build software applications.

// •	It defines the architecture and dictates the flow of control  meaning you work within the framework
// •	Example: React, Angular, vue.js, node,js

// •	A framework, on the other hand, is like building a model home. You have a set of blueprints and a few limited choices when it comes to architecture and design. Ultimately, the contractor and blueprint are in control. And they will let you know when and where you can provide your input.

// -------------------------------------------------------------------
// Library
// •	A library is a collection of pre-written code snippets or functions that developers can use to solve specific problems without starting from scratch.

// •	You call the library whenever needed, and you control the flow of your program.
// 	Example: Lodash, jQuery, NumPy, TensorFlow, etc.

// •	A library is like going to Ikea. You already have a home, but you need a bit of help with furniture. You don’t feel like making your own table from scratch. Ikea allows you to pick and choose different things to go in your home. You are in control.

// ==================================================================================
// declaration:[giving a name to variable]
// let a

// intialization [assing the value]
// a = 10

// ===================================================================
// Variables
// what is variables
// Rules of variables
// Types of variable

// what is variables
// Variables are used to store the data and represent any data types

// let fName = "ankush"
// console.log(fName)

// const sName = "Lalu"
// console.log(sName)
// Always give variable proprer name

// // Types of variable

// // Var, let, const

// var :
// 1) The scope of a var variable is functional scope.

// function test() {
//   if (true) {
//     var a = 10;
//   }
//   console.log(a);

// }

// test()

// 2) It can be updated and re-declared into the scope.
// var x = 5

// console.log(x)

// var  x = 10
// console.log(x)
//  var x = 20
// console.log(x)

// x = 15
// console.log(x)

// 3) It can be declared without initialization.
// var x
// console.log(x)

// x= 10
// console.log(x)

// 4) It can be accessed without initialization as its default value is “undefined”.
// var  x
//  console.log(x)

// 5) hoisting done , with initializing as ‘default’ value
// var  x

// var y = 20
// console.log(y)

//  x= 10
//  console.log(x)
// ------------------------------------------------------------------
// let:
// 1) The scope of a let variable is block scope.

// function test() {
//   if (true) {
//     let a = 10;
//     console.log(a);

//   }

// }
// test();


// 2) It can be updated but cannot be re-declared into the scope.
// let a = 5
// console.log(a)

  // a = 10
// console.log(a)
// let a = 10
// let array = [1,2,3,4]
// console.log(typeof array)


// 3) It can be declared without initialization.
// let a 
// console.log(a)


// 4) It can be accessed without initialization as its default value is “undefined”.

// 5) Hoisting is done , but not initialized (this is the reason for error when we access the let variable before declaration/initialization)

// const:
// explain later

// const  a = 10
// a = 20
//  console.log(a)
// ===================================================================================


// ----------------------------------------------------------------------------------

// Rules of Declaring Variable names

// 1) can have chacters

// 2) can have numbers except firstletter

// 3) can use only two special symbol _ & $

// 4) no space between variable name
// let firstName = "ankush"

// 5) cant use reserve key words

// 6) Snake casing : Words are separated using an underscore (_).

//  & camel caseing : The first word is lowercase, and each following word starts with an uppercase letter.

// ========================================================================================
// Data types

// Definition of Data Types in JavaScript
// A data type in JavaScript defines the type of value a variable can hold. It determines how the data is stored, accessed, and manipulated in a program.

// Primitive Data Types: (fixed values, stored directly in memory).

// These are immutable and stored directly in memory.
// ex:String, Number, BigInt, Boolean, Undefined, Null, Symbol
// 1.	String
// 	Represents a sequence of characters.
// 	Example: "Hello, World!", 'JavaScript'

// 2.	Number
// 	Represents both integers and floating-point numbers.
// 	Example: 42, 3.14, -10

// 3.	BigInt (introduced in ES11)
// 	Represents integers beyond the safe range of Number.
// 	Example: 123456789012345678901234567890n

// 4.	Boolean
// Represents a logical value: either true or false.
// Example: true, false
// let fName = true
// let sName = "true"
// let age = 21
// console.log(typeof fName)
// console.log(typeof sName)
// console.log(typeof age)

// 5.	Undefined
// 	Represents a variable that has been declared but not assigned a value.
// 	Example:

// 6.	Null
// o	Represents an intentional absence of any object value.
// Example:

// -------------------------------------------------------------------------------------

// Non-Primitive Data Type :  (complex structures, stored as references).
// This type stores references to objects.

// 1.	Object
// Represents a collection of key-value pairs.
// Example:
//  let person = {name:"ankush", age:21}
//  console.log(person.age)

// Arrays, functions, and dates are also types of objects in JavaScript:
// 	Array: An ordered list of values string or number
// Example: [1, 2, 3]
// let index = [0,1,2,3]
// let array = [1,2,3]
// console.log(array[3])

// Function: A reusable block of code.
// Example:

// 	Date: Represents dates and times.
// Example: new Date()

// How to check the datatypes by using typeof
// let fName = "ankush"
// console.log(typeof fName)

// ----------------------------------------------------------------------------------------
// Type Conversion & Coercion in JavaScript

// Converting a data type manually using JavaScript methods like String(), Number(), Boolean(), etc.
// •	String Conversion
// let number = 123
// console.log(typeof number)

// let str = String(number)
// console.log(typeof str)
// •	Number Conversion
// let str = "123"
// console.log(typeof str)
//  let number = Number(str)
// console.log(typeof number)

// •	Boolean Conversion

// console.log(Boolean(""))
// ________________________________________

// 2. Type Coercion :
// JavaScript automatically converts one data type to another during an operation.
//
// •	String Coercion When a number is added to a string, JavaScript converts the number into a string:

// let result = "the number is" + 42
// console.log( typeof result)

// •	Number Coercion When a string is used in a mathematical operation, JavaScript tries to convert it to a number:

// let result = "10" - 2
// console.log(result)
// console.log(typeof result)

// •	Boolean Coercion JavaScript converts values to true or false in logical operations:
// console.log(!!"hello")

// ________________________________________
// Key Examples Showing Differences
// Adding Strings and Numbers

// ================================================================================
// Strings and templete literals .

// . Template Literals (Template Strings)
// Template literals (introduced in ES6) allow for easier string concatenation using backticks (`) and ${} for embedding expressions inside strings.
// Example:
// let Fname = "ankush"
// let sName = "lalu"
// let fullName =  `my First Name is ${Fname} my Second Name is ${sName}`
// console.log(fullName)

// ====================================================================================

// Operators:
// Operators in JavaScript are symbols or keywords used to perform operations on values (operands). They can be used for calculations, comparisons, logical operations, assignments, etc.

// 1. Arithmetic Operators
// Used for basic mathematical operations.
// 	+ (Addition): Adds two values.
// let a = 9
// let b = 9
// let sum = a+b
// console.log(sum)
// (Subtraction): Subtracts the second value from the first.
// let a = 9
// let b = 9
// let sub = a-b
// console.log(sub)
// * (Multiplication): Multiplies two values.

// / (Division): Divides the first value by the second.

// % (Modulus): Returns the remainder when the first value is divided by the second.
// let a = 10
// let b = 2
// console.log(a % b)
// ++ (Increment): Increases the value by 1.

// let a = 5
// a++
// console.log(a)

// -- (Decrement): Decreases the value by 1.
// let a = 5
// a--
// console.log(a)
// ________________________________________

// 2. Assignment Operators
// Used to assign values to variables.
// =: Assigns a value to a variable.
// let a = 5
// console.log(a)

// +=: Adds the right operand to the left operand and assigns the result.
// let a = 5
// a += 3
// console.log(a)

// -=: Subtracts the right operand from the left operand and assigns the result.

// *=: Multiplies the left operand by the right operand and assigns the result.

// /=: Divides the left operand by the right operand and assigns the result.
