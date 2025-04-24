// In React, the Context API provides a streamlined way to share data across multiple components without the need to pass props manually at every level.

// createContext,provider,consumer

// createContext:

// Think of this as setting up a shared storage space. By using createContext, you create a container where you can store data that you want multiple components to access.
// Provider:

// provider: This acts as the supplier of the data stored in your context. The Provider component wraps around parts of your component tree and makes the context data available to all components inside it. It accepts a value prop, which is the data you want to share.

// Consumer:

// Components that need the shared data can use the Consumer to access it. The Consumer requires a function as its child, which receives the current context value and returns a React element. However, in modern React, the useContext hook is more commonly used for this purpose.

// import ChildA from "./childA";

// const Parent = () => {
//   const user = { name: 'John Doe', age: 30 };

//   return (
//     <div>
//       <h2>Parent Component</h2>
//       <ChildA user={user} />
//     </div>
//   );
// };

// export default Parent;
// ===============================================================================================

// using useContext api
// import { createContext } from "react";
// import ChildC from "./ChildC";

// const UserContext = createContext();
// const ContryContext = createContext();

// const Parent = () => {
//   const user = { name: "john", age: 30 };
//   const country = "India";
//   return (
//     <UserContext.Provider value={user}>
//       <ContryContext.Provider value={country}>
//       <ChildC />
//       </ContryContext.Provider>
//     </UserContext.Provider>
//   );
// };

// export default Parent;
// export { UserContext,ContryContext };
// ===========================================================================================

// createContext,Provider,UseContextHooK

import { createContext } from "react";
import ChildC from "./ChildC";
const FirstName = createContext();
const SecondName = createContext();


const Parent = () => {
  return (
    <div>
      <FirstName.Provider value={"Baby"}>
        <SecondName.Provider value={"John"}>
        <ChildC/>
        </SecondName.Provider>
      </FirstName.Provider>
    </div>
  );
};

export default Parent;
export { FirstName,SecondName };
