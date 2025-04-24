// Definition:
// A loop is a programming construct used to repeat a block of code multiple times until a certain condition is met or is no longer true. Loops help avoid writing the same code repeatedly.

// Why do we use loops?

// To save time by automating repetitive tasks.
// To reduce errors by avoiding repetitive manual coding.
// To process data efficiently, such as iterating over arrays or objects.

// How do loops work?
// Loops use a condition to decide when to stop repeating.
// If the condition is true, the loop continues to execute.
// If the condition is false, the loop stops.

// Types of Loops in JavaScript:

// For Loop: Used when you know exactly how many times the code should run.

//  printing a number 1 to 5
// for(let i = 0; i<=100; i++){
//     console.log(i)
// }
// While Loop: Used when the number of repetitions is not known in advance, and it depends on a condition.
// let i = 1
// while(i<=5){
//     console.log(i)
//     i++
// }

// Do-While Loop: Similar to the while loop but executes the code at least once, even if the condition is false.

// let i = 20
// do{
//     console.log("hi")
// }
// while(i<=10){
//     console.log(i)
// }

// for...of loop: For iterating over the values of an iterable (arrays, strings, etc.).
// let userName =["hhjkvljhljh", true, [], 788978]
// for(let i of userName[2]){
//     console.log(i)
// }

// For-In Loop: Used to loop through the properties of an object.
// let objectPerson = {
//   uName: "john",
//   age: 20,
//   job: "Developer",
// };

// for (let a in objectPerson){
//     console.log(a + objectPerson[a])
// }

// ===================================================================================================

// function multiplicationUsingForLoop (number){

// for(let i = 1; i <= 9; i++ ){
//     console.log(`${number} x ${i} = ${number * i} `)
// }
// }
// multiplicationUsingForLoop(10)
// ================================================================================

function multiplicationUsingWhileLoop(number){
let i = 1
while(i <=10 ){
    console.log(`${number} x ${i} = ${number * i} `)
    i++
}

}
multiplicationUsingWhileLoop(10)