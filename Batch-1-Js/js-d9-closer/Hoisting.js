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



