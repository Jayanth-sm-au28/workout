import { useState, useEffect, useContext, useReducer, useRef, createContext } from "react";
import PropTypes from "prop-types"; 
// Creating a context to manage global state
const TaskContext = createContext();

// Reducer function to handle task actions (useReducer hook)
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload]; // Adds a new task to the list
    case "REMOVE_TASK":
      return state.filter((task, index) => index !== action.payload); // Removes a task from the list
    default:
      return state;
  }
};

// Context Provider Component to wrap the application (useReducer + useContext hooks)
export const TaskProvider = ({ children }) => {
    const [tasks, dispatch] = useReducer(taskReducer, []);
  
    return (
      <TaskContext.Provider value={{ tasks, dispatch }}>
        {children}
      </TaskContext.Provider>
    );
  };
  
  // Define prop types
  TaskProvider.propTypes = {
    children: PropTypes.node.isRequired, // Ensures children is a valid React node
  };
  

// Task Input Component for adding new tasks (useState, useEffect, useContext, useRef hooks)
export const TaskInput = () => {
  const [task, setTask] = useState(""); // Manages the input value
  const { dispatch } = useContext(TaskContext); // Accessing global state with useContext
  const inputRef = useRef(null); // useRef for auto-focusing the input field

  useEffect(() => {
    inputRef.current.focus(); // Focus the input field when component mounts
  }, []);

  const addTask = () => {
    if (task.trim() === "") return; // Prevent adding empty tasks
    dispatch({ type: "ADD_TASK", payload: task }); // Dispatch action to add task
    setTask(""); // Reset input field
  };

  return (
    <div>
      <input
        ref={inputRef} // Attaching ref to input field
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Updating state on input change
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

// Task List Component to display and remove tasks (useContext hook)
export  const TaskList = () => {
  const { tasks, dispatch } = useContext(TaskContext); // Accessing global tasks state

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task} <button onClick={() => dispatch({ type: "REMOVE_TASK", payload: index })}>Remove</button>
        </li>
      ))}
    </ul>
  );
};


