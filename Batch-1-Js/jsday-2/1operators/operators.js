// What are Operators in JavaScript?
// Operators in JavaScript are symbols or keywords used to perform operations on value They can be used for calculations, comparisons, logical operations,  etc.
//want to do any action between two variables or two values

// Types of Operators in JavaScript

// Arithmetic Operators: Used for mathematical calculations (e.g., addition, subtraction).

// Comparison Operators: Used to compare two values (e.g., ==, ===, >, <).

// Logical Operators: Used to combine conditions (e.g., &&, ||, !).

// Ternary (Conditional)  Operator: Used as a shorthand for if-else (e.g., condition ? value1 : value2).

// Spread operator & Rest Operator
// 1. Arithmetic Operators
// (Addition): Add the first value from the second.
// let a = 5
// let b = 10
// console.log(a+b)

// (Subtraction): Subtracts the second value from the first.

// let a = 10
// let b = 5
// console.log(a-b)
// (Multiplication): Multiplies two values.

// let a = 10
// let b = 5
// console.log(a/b)

// (Division): Divides the first value by the second.

// let a = 10
// let b = 5
// console.log(a*b)

// (Modulus): Returns the remainder when the first value is divided by the second.

// let a = 10
// let b = 3
// console.log(a%b)
// ++ (Increment): Increases the value by 1.
// post increment
// let x = 5
// let y = x++
// console.log("post increment",x)
// console.log("before increment",y)

// preincrement
// let a= 5
// let z = ++a
// console.log("a after increment", a)
// console.log("after increment",z)
// (Decrement): Decreases the value by 1.

// let inc = 5

// inc--
// console.log(inc)

// ________________________________________

// 2. Comparison Operators
// Used to compare two values and return a Boolean result.

// == (Equal): Checks if two values are equal, ignoring data types.
// console.log(5 == "5")

// === (Strict Equal): Checks if two values are equal and of the same data type.

// console.log(5 === "5")

// The ! (NOT) operator in JavaScript is a logical operator that reverses the boolean value
// If the value is true, it becomes false.
// If the value is false, it becomes true.
// let isRaining = true
// console.log(!isRaining)

// != (Not Equal): Checks if two values are not equal.
// console.log( 5 != 5)

// !== (Strict Not Equal): Checks if two values are not equal or not of the same data type.
// console.log( 5 !== "5")

// > (Greater Than): Checks if the left value is greater than the right value.

// console.log(5 > 3)
// < (Less Than): Checks if the left value is less than the right value.
// console.log(5 < 3)

// >= (Greater Than or Equal): Checks if the left value is greater than or equal to the right value.
// console.log(5 >= 3)

// <= (Less Than or Equal): Checks if the left value is less than or equal to the right value.

// ________________________________________

// 3. Logical Operators

// && is a logical operator used to combine two or more conditions.

// let a = false
// let b = false
// console.log(a&&b)
// let tem = 10;
// let isSunny = true;
// if (tem > 20 && isSunny) {
//   console.log("its a good day");
// } else {
//   console.log("its not a good day");
// }
// Returns true: If both condition1 and condition2 are true.
// Returns false: If either condition1 or condition2 is false.

//  Using AND with Multiple Conditions

// Combining More Than Two Conditions

// || (Logical OR): Returns true if at least one of the operands is true.
// Returns true: If at least one of condition1 or condition2 is true.
// Returns false: If both condition1 and condition2 are false.

//  Combining More Than Two Conditions

// let isUserLoggedIn = true
// let hasPermission= true

// if(isUserLoggedIn || hasPermission){
//     console.log("access granted")
// }
// else{
//     console.log("Access denied")
// }

// ! (Logical NOT): Inverts the Boolean value.
// Returns true: If the condition is false (because it is inverted).
// Returns false: If the condition is true (because it is inverted).

// ________________________________________

// 4. if else statement (Conditional) Operator

// ________________________________________
// Ternary (Conditional) Operator
// A shorthand for if-else statements.
// Syntax:  condition ? expressionIfTrue : expressionIfFalse;
// Checks a condition and returns one of two values based on the result.
// let age = 8;
// let result;
// if (age >= 18) {
//   result = "adult";
// }else{
//     result = "minor"
// }
// console.log(result)

// let age = 18
// let result = (age >= 18) ? "adult": "minor"
// console.log(result)
// ____________

// let marks = 34
// if (marks>= 90){
//     console.log("grade a")
// }else if(marks >=50){
//     console.log("grade b")
// }else if (marks>=35){
//     console.log("grade c")
// }else{
//     console.log("fail")
// }

// ____________________________

// 5 Spread (...) and Rest (...) Operator
// allows us to quickly copy all or part of an existing array or object into another array or object
// let array=[1,2,3,4,5,]
// let newArray = [...array, 10,11]
// console.log(newArray)

// •	Rest: Used to collect all remaining parameters in a function into an array.
function fruits (...n){

console.log(...n)
}
fruits("apple","b" ,"c","d")