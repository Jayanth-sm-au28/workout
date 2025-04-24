
// useEffect is a React Hook that allows you to perform side effects (like fetching data, updating the DOM, or setting up event listeners) 


// Why is this bad?
// Infinite API Calls 


// Multiple API requests overload the server.
// UI keeps re-rendering unnecessarily.

//  Why Does This UNLIMITED CALS HAPENING Happen ?
// Component renders for the first time → API call happens.
// State (setUsers(data)) updates → Component re-renders.
// On re-render, API runs again → State updates → Another re-render.
// This cycle repeats forever!


// What Does the Dependency Array Do?
// The dependency array controls when the useEffect runs.

// Dependency Array	Effect Runs When?
// [] (empty)	Only when the component mounts (first render)
// [someValue]	When someValue changes
// [var1, var2]	When var1 OR var2 changes
// No array (useEffect(() => {...}))	Runs on every render (bad for API calls!)

import { useEffect, useState, } from "react";

// const MealFinder = () => {
//   const [categories, setCategories] = useState([]);
//   const [meals, setMeals] = useState([]);
//   const [selectedMeal, setSelectedMeal] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

// // useEffect(()=>{
// //   fetchCategories()
// // },[])

//   useEffect(() => {
//     fetchCategories();

//   },[]);

// console.log("Component rendering...");

//   const fetchCategories = async () => {
//     try {
//       const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
//       const data = await response.json();
//       setCategories(data.categories || []);
//     } catch (error) {
//       console.error("Error fetching categories:", error);
//     }
//   };
//     // fetchCategories();

//   const fetchMealsByCategory = async (category) => {
//     console.log("fetchMealsByCategory Component rendering...");

//     try {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
//       const data = await response.json();
//       setMeals(data.meals || []);
//     } catch (error) {
//       console.error("Error fetching meals:", error);
//     }
//   };

//   const fetchMealDetails = async (idMeal) => {
//     try {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
//       const data = await response.json();
//       setSelectedMeal(data.meals ? data.meals[0] : null);
//     } catch (error) {
//       console.error("Error fetching meal details:", error);
//     }
//   };

//   const handleSearch = async () => {
//     if (!searchTerm.trim()) {
//       alert("Enter a value to search!");
//       return;
//     }
//     try {
//       const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
//       const data = await response.json();
//       setMeals(data.meals || []);
//     } catch (error) {
//       console.error("Error searching meals:", error);
//     }
//   };

//   return (
//     <div style={{ display: "flex", fontFamily: "Arial, sans-serif" }}>
//       {/* Sidebar */}
//       <div style={{ width: "150px", background: "#f8f9fa", padding: "10px", height: "100vh", overflowY: "auto" }}>
//         <h3 style={{ textAlign: "center" }}>Categories</h3>
//         {categories.map((category) => (
//           <button
//             key={category.idCategory}
//             style={{ width: "100%", margin: "4px 0", padding: "8px", background: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}
//             onClick={() => fetchMealsByCategory(category.strCategory)}
//           >
//             {category.strCategory}
//           </button>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div style={{ flex: 1, padding: "20px" }}>
//         <div style={{ textAlign: "center", marginBottom: "20px" }}>
//           <input
//             type="text"
//             placeholder="Search Here"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             style={{ padding: "8px", marginRight: "10px", width: "200px" }}
//           />
//           <button onClick={handleSearch} style={{ padding: "8px", cursor: "pointer" }}>Search</button>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
//           {meals.map((meal) => (
//             <div key={meal.idMeal} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px", textAlign: "center", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)" }}>
//               <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: "100px", height: "100px", borderRadius: "5px" }} />
//               <h5>{meal.strMeal}</h5>
//               <button onClick={() => fetchMealDetails(meal.idMeal)} style={{ backgroundColor: "#007bff", color: "white", border: "none", padding: "8px", borderRadius: "5px", cursor: "pointer", fontSize: "12px", marginTop: "10px" }}>Read More</button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Meal Details */}
//       {selectedMeal && (
//         <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", zIndex: 1000, width: "90%", maxWidth: "500px", maxHeight: "80vh", overflowY: "auto" }}>
//           <h2 style={{ textAlign: "center" }}>{selectedMeal.strMeal}</h2>
//           <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} style={{ width: "100px", height: "100px", borderRadius: "5px", display: "block", margin: "auto" }} />
//           <p style={{ textAlign: "justify", marginTop: "10px" }}>{selectedMeal.strInstructions}</p>
//           <button onClick={() => setSelectedMeal(null)} style={{ display: "block", margin: "20px auto 0", backgroundColor: "#007bff", color: "white", border: "none", padding: "10px 20px", borderRadius: "5px", cursor: "pointer" }}>Close</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MealFinder;


// import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [multi, setMulti] = useState(0);



  useEffect(() => {
    console.log(`Count changed: ${count,count1}`);
  }, [count,count1,multi  ]); // Runs every time count changes

  return (
    <div className="">
      <p>Count: {count}</p>
      <p>Count1: {count1}</p>
      <p>multiply: {multi}</p>

      <button  className="p-10" onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount1(count1 - 1)}>decrese</button>
      <button onClick={() => setMulti(count * 2)}>Multiply</button>


    </div>
  );
}

export default Counter;
