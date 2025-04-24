/* eslint-disable react/prop-types */

// const ChildC = ({user}) => {
//   return (
//     <div>
//       <h5>Child C</h5>
//       <p>Name: {user.name}</p>
//       <p>Age: {user.age}</p>
//     </div>
//   );
// }

// export default ChildC
// ===========================================================================================

// using use context api



// import { UserContext, ContryContext } from "./Parent";
// const ChildC = () => {
//   return (
//     <UserContext.Consumer>
//       {(user) => {
//         console.log("user", user);
//         return (
//           <ContryContext.Consumer>
//             {(country) => {
//               return (
//                 <>
//                   <h1>{user.name}</h1>
//                   <h1>{user.age}</h1>
//                   <h1>{country}</h1>
//                 </>
//               );
//             }}
//           </ContryContext.Consumer>
//         );
//       }}
//     </UserContext.Consumer>
//   );
// };

// export default ChildC;
// ==========================================================================================
import { useContext } from "react"
import { FirstName,SecondName } from "./Parent"



const ChildC = () => {
const userFirstName = useContext(FirstName)
const userSecondName = useContext(SecondName)
  return (
    <div>
    <h1>{userFirstName}</h1>
    <h1>{userSecondName}</h1>
    </div>
  )
}

export default ChildC