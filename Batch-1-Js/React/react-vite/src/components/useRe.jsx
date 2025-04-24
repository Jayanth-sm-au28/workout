// The useRef hook in React serves multiple purposes, primarily:

// Accessing DOM Elements Directly: It allows you to create a reference to a DOM element within a functional component, enabling direct manipulation without causing re-renders.

// Persisting Mutable Values Across Renders: It lets you store a mutable value that persists across component renders without triggering a re-render when updated.

// import  { useRef, useState } from 'react'

// const useRe = () => {
//     // Initialize the state variable 'count' with an initial value of 0
//   const [count, setCount] = useState(0);

//   // Create a ref to persist the count value across renders
//   const countRef = useRef(count);

//   // Function to handle the increment action
//   const increment = () => {
//     // Calculate the new count value
//     const newCount = countRef.current + 1;

//     // Update the ref with the new count value
//     countRef.current = newCount;

//     // Update the state to trigger a re-render with the new count
//     setCount(newCount);
//   };

//   return (
//     <div>
//       {/* Display the current count */}
//       <p>Current count: {count}</p>
//       {/* Button to trigger the increment function */}
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }

// export default useRe

// import { useEffect, useRef } from "react";

// const UseRe = () => {
//   const inputRef = useRef(null);
//   const inputRef1 = useRef(null);


//   useEffect(() => {
//     // Focus the input field when the component mounts

//     if (inputRef.current ) {
//       inputRef.current.focus();
//     //   inputRef1.current.focus();
//     }
//   }, []);

//   return (
//     <>
//       <input
//         ref={inputRef}
//         type="text"
//         placeholder="Enter text here inputRef"
//         className="bg-amber-200 mt-20 ml-20"
//       />
//       <input
//         ref={inputRef1}
//         type="text"
//         placeholder="Enter text here inputRef1"
//         className="bg-amber-200 mt-20 ml-20"
//       />
      
//     </>
//   );
// };

// export default UseRe;

// import React, { useRef, useState } from 'react'

// const useRe = () => {

//     const [seconds, setSeconds] = useState(0);
//     const intervalRef = useRef(null);

//     const startStopwatch = () => {
//       if (intervalRef.current !== null) return; // Prevent multiple intervals
//       intervalRef.current = setInterval(() => {
//         setSeconds((prev) => prev + 1);
//       }, 1000);
//     };

//     const stopStopwatch = () => {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     };

//     return (
//       <div>
//         <p>Elapsed Time: {seconds} seconds</p>
//         <button onClick={startStopwatch}>Start</button>
//         <button onClick={stopStopwatch}>Stop</button>
//       </div>
//     );
// }

export default useRe

// While useState manages state and triggers re-renders, useRef can be used to persist values across renders without causing re-renders. In a stopwatch, useRef is particularly useful for storing mutable values like the interval ID returned by setInterval.
