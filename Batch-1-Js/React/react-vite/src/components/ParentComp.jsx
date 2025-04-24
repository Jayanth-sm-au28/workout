// What are Props?
// Define props as short for "properties." These are the way components in React communicate with each other. Props allow data to be passed from a parent component to a child component.
// Emphasize that props are read-only and should not be modified by the child component.
// Why use Props?
// Props help in making components reusable. They allow the same component to behave differently based on the data passed to it.




import ChildComponent from "./ChildComponent"

const ParentComp = () => {
const message  = "hello from parent component jjhbljblbkjbjh"

const user = {name : "john", age : 20}

  return (
    <div>ParentComp
    <ChildComponent a = {message} b = {user}  />
    </div>
  )
}

export default ParentComp