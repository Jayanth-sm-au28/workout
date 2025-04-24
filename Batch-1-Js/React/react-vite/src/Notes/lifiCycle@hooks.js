// What is React Lifecycle?
// React Lifecycle refers to the different phases a React component goes through from creation to removal. These phases help us understand when and how components render, update, and unmount.

// Lifecycle Phases
// React components go through three main phases:

// 1️ Mounting - When the component is first created.(Component is created & added to the DOM)

// 2️ Updating - When state or props change, causing re-render.(Component re-renders due to state/props changes)

// 3️ Unmounting - When the component is removed from the DOM.(Component is removed from the DOM)

// Learn Lifecycle Methods (Class Components)
// Mounting:
// constructor() – Initializes state.
// componentDidMount() – Runs after first render (good for API calls).

// Updating:
// componentDidUpdate() – Runs after component updates.

// Unmounting:
// componentWillUnmount() – Runs before component is removed (cleanup code).

// ========================================================================================

// Hooks were introduced in React to allow functional components to manage state, side effects, and other features that were previously only possible in class components. Before hooks, functional components were stateless and could not access lifecycle methods like componentDidMount or manage internal state.

// All React Hooks (Categorized)
// React provides several built-in hooks. Here’s a categorized list:

// 1️ State & Lifecycle Hooks--- tools
// useState – Manages state in functional components.
// useEffect – Handles side effects (API calls, subscriptions).

// useLayoutEffect – Similar to useEffect, but runs synchronously after render.
// useReducer – Manages complex state logic (alternative to useState).

// 2️ Performance Optimization Hooks
// useMemo – Optimizes performance by memoizing expensive calculations.
// useCallback – Memoizes functions to prevent unnecessary re-renders.

// 3️ Context & Refs Hooks
// useContext – Accesses values from React.Context without prop drilling.

// useRef – References DOM elements or persists values between renders.
// useImperativeHandle – Customizes instance values when using React.forwardRef.

// 4️ Custom Hooks
// You can create your own hooks to reuse logic across components.

// What is Prop Drilling?
// Prop drilling is the process of passing data (props) from a parent component down to deeply nested child components, even if some intermediate components don’t need the data. This can make the code harder to maintain and manage.

// =================================================================================
// make a function to know odd or even

function isEvenOrOdd(num) {
  return num % 2 === 0 ? "even" : "odd";
}
console.log(isEvenOrOdd(20));

// ===================================================================================
// write a function to reverse a string deepak kapeed

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("deepak"));
// ==================================================================================

// write a function  to calculate the sum of all numbers in array

function sumArray(arr) {
  return arr.reduce((previous, current) => previous + current);
}
console.log(sumArray([1, 2, 3, 4, 5]));

// ====================================================================

// write a function to find longest word in the sentence

function findLargestWord(sentence) {
  const words = sentence.split(' ');
  return words.reduce((previous, current) =>
    current.length > previous.length ? current : previous
  );
}
console.log(findLargestWord("my name is deepak  nausheen"));
// ===============================================================================


// write a function  to find the largest number in the array

function findMax(arr){
return Math.max(...arr)
}
console.log(findMax([22,344,56,777,433,6666]))
// ==================================================================================

// write a function to find a palindrome 

function isPalindrome(word){
    const pWord = word.toLowerCase().replace(/[^a-z0-9]/g, '')
    return pWord === pWord.split('').reverse().join('')
} 
console.log(isPalindrome("namAn"))

// ====================================================================================

// write a function to print first and last letter of the word

function firstAndLast(str){
if (str.length < 2) return str
return str[0] + str[str.length-1]
}
console.log(firstAndLast("beautifull"))

// =============================================================================

// count positive  numbers in an array

function countPositive(numbers){
return numbers.filter(num => num > 0).length
}
console.log(countPositive([12,44,-42,0,746,7674,-556,676]))
// ===============================================================================================