// Set:
// In JavaScript, a Set is a built-in object that allows you to store unique values of any type, whether primitive values or object references. Unlike arrays, Sets do not allow duplicate elements.
// syntax:
// let array = [1,2,3,4,5,]
// const mySet = new Set([1,2,3,4,5,6,7,8,9])
// console.log(mySet)


// 2. Adding elements to a Set:
// You can add elements using the add() method. If the value already exists, it won't be added again.


// mySet.add(5)
// console.log(mySet)

// 3. Checking if a value exists in a Set
// You can use the has() method to check if a value is in the Set.

// const mySet = new Set([1,2,3,4,5,6,7,8,9]);
// console.log(mySet.has(10)); // Output: true
// console.log(mySet); 


// 4. Removing elements from a Set
// The delete() method removes an element from a Set.

// const mySet = new Set([1,2,3,4,5,6,7,8,9]);
// console.log(mySet.delete(1)); // Output: true
// console.log(mySet); 

// 6. Size of a Set
// The size property returns the number of elements in the Set.
// const mySet = new Set([1,2,3,4,5,6,7,8,9]);
// console.log(mySet.size); 


// 7. Clearing all elements in a Set
// The clear() method removes all elements from the Set.

// const mySet = new Set([1,2,3,4,5,6,7,8,9]);
// console.log(mySet)
// function 3

// mySet.clear()
// console.log(mySet)

// loops: We cannot directly use map() or other array-specific methods like filter() or reduce() with a Set because these methods are not available on Set objects. However, you can still iterate over a Set using loops or convert it into an array first to use map().

// #using For Of loop
// const mySet = new Set([1,2,3,4,5,6,7,8,9]);
// const colors = new Set(["red","blue", "orange"]);


// console.log(mySet)

// for(const numbers of colors){
//     console.log(numbers)
// }


// # using for each loop
// const mySet = new Set([1,2,3,4,5,6,7,8,9]);
// mySet.forEach(value => {
//     console.log(value)
// })


// --------------------------------------------------------------------------------

// In JavaScript, you can convert a Set into an Array easily using a few different methods.
// #1 using  spred operator ()

// ---------------------------------------------------------







