// Simple Definition of UseMemo:

// useMemo is a React Hook that lets you cache[Memorise, save] the result of a calculation between re-renders.

// "useMemo is like a sticky note that remembers the result of a complex calculation. 
// Instead of redoing the calculation every time, React checks the sticky note and reuses the result unless something important changes."

// Even Simpler:
// "useMemo helps React remember stuff so it doesn't have to calculate the same thing over and over again."

// Key Learning Points:

// useMemo is for expensive calculations
// It takes two arguments: a function and dependencies
// It only recalculates when dependencies change
// Perfect for heavy computations, complex filtering, or expensive formatting

// When to use useMemo:

// Performance-heavy calculations
// When you want to avoid re-rendering child components
// When dealing with complex data transformations

// Remember to emphasize:

// Don't overuse useMemo - it's not needed for simple calculations
// Only use it when there's a clear performance benefit

import { useEffect,  useMemo,  useState } from "react";

const UseMemo = () => {
  const [data, setData] = useState([]);
const [theme,setTheme]=useState(false)

  useEffect(() => {
    fetchAllProducts();
  }, []);

  async function fetchAllProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();

      if (result && result.products) setData(result.products);
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  }

    function filteredProductsByPrice(getProducts) {
        console.log("function or calculation is getting called")
        return getProducts && getProducts.length > 0
          ? getProducts.filter((item) => item.price > 50)
          : [];
      }
    
      const memoUse = useMemo(()=>filteredProductsByPrice(data),[data])

// const memoUse = useMemo(()=>filteredProductsByPrice (data),[data])

  return (
    <div>
      {/* before */}
      {/* <ul>
        {filteredProductsByPrice(data).map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul> */}
            {/* after */}

      <ul>
        {memoUse.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul> 
     
      <div className="mt-10 ">
    <button className="p-2 border-2" onClick={()=>setTheme(!theme)}> Toggle Theme </button>
       <h2 className="p-4">{theme ? "Light" : "dark"}</h2>
      </div>
    </div>
  );
};

export default UseMemo;

const str='racecar'
function checkPalindrom(str){
    const p=str
    let res=[]
    const arr=str.split('')
    for(let i=arr.length-1; i>=0; i--){
        res.push(arr[i])
    }
    const val=res.join('')
    console.log(val)
    if(p==val){
 
        console.log(str,val,'Palindrome')
    }
    else{
         console.log(str,val,'not Palindrome')
    }
}
 
checkPalindrom(str)
 
 
 
 
 
const arr=[1,2,16,3,8,2,4,5,5]
// function checkLargestNo(arr){
//     let max=arr[0]
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     console.log(max)
// }
// checkLargestNo(arr)
 
 
// function removeDuplicate(arr){
//     let newArr=arr
//     let res=[]
 
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]!==arr[i+1]){
//             res.push(arr[i])
//         }
//     }
//     console.log(res)
// }
// removeDuplicate(arr)


// Govinda@7869200