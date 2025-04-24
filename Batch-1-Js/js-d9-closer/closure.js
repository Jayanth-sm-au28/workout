// closure:
// allows variables outside of the scope of a function to be accessed. Usually, a closure is created when a function is defined in another function, allowing the inner function to access variables in the outer one.

// The Concept
// Calling the Outer Function: When you call outerFunction(), it does not immediately run the inner function. Instead, it returns the inner function (but not the result of the inner functio n — just the function itself).

// Storing the Inner Function: By storing that inner function in a variable ( we can use it later whenever we want to execute it.

function outerFunction() {

  let outerVariable = "Am Outer variable";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

let closureFunction = outerFunction()

// closureFunction()

function createRecipe(){
    let secretSpice = "pepper"
    function serveDish (){
 console.log(`this dish has  ${secretSpice} as a indgrent`)
    }
    return serveDish;
}
const myRecipe = createRecipe()
myRecipe()