// What Are Keys in React?
// Keys are special attributes that help React uniquely identify each list item. They improve performance by helping React track changes, update lists efficiently, and avoid unnecessary re-renders.

// Why Are Keys Important?
// React uses keys to identify which items changed, added, or removed.
// Without keys, React may re-render the entire list unnecessarily, causing performance issues.

// react is baced on virtual dom basis so if any small things change in componments only that small change will rerender not the whole page or app

// let ogdom [1,3,4,5,6,7]
// let virdom [1,2,3,4,5,6,7]

// ex for using for loop in xml

// const FruitList = () => {
//   return (
//     <ul>
//       for (let i = 0; i < fruits.length; i++) {
//         <li key={i}>{fruits[i]}</li>  //  JSX does not allow statements inside return
//       }
//     </ul>
//   );
// };
// export default FruitList;

// const fruits = ["Apple", "Banana", "Mango"];

// const FruitList = () => {
//   let fruitItems = []; // Create an empty array

//   for (let i = 0; i < fruits.length; i++) {
//     fruitItems.push(<li >{fruits[i]}</li>); // Push JSX into array
//   }
// console.log("am from fruit items array",fruitItems)
//   return <ul>{fruitItems}</ul>; // Return JSX array
// };

// export default FruitList;

// const fruits = ["Apple", "Banana", "Mango", "Apple"];

// const FruitList = () => {
//   return (
//     <ul className="mt-36">
//       {fruits.map((fruit, index) => (
//         <li className="flex justify-center items-center" key={index}> {fruit} </li>
//       ))}
//     </ul>
//   );
// };

// export default FruitList;
