// import FruitList from "./components/FruitList"
// import { useState } from "react";
// import MealFinder from "./components/MealFinder";
// import ParentComp from "./components/ParentComp";
// import UseEft from "./components/UseEft";
// import UseMemo from "./components/UseMemo";
// import OTPInput from "./components/useRe";
// import UseRef from "./components/useRe"
// import UseRefOTP from "./components/useRefOTP"
// import UseRef from "./components/useRe"
// import UseRe from "./components/useRe"
// import ChildC from "./components/Usecontext/ChildC";
// import ChildC from "./components/Usecontext/ChildC";
// import ControlledComponent from "./components/ControlAndUncontroled";
// import Parent from "./components/Usecontext/Parent";
// import SwitchBulb from "./components/SwitchBulb"

import DashboardLayoutNavigationLinks from "./components/dashBoard";
import PrimarySearchAppBar from "./components/header";

// import { TaskInput, TaskList, TaskProvider } from "./components/TaskProvider"

const App = () => {
  return (
    <div className="">
      <PrimarySearchAppBar />
      <DashboardLayoutNavigationLinks/>
      {/* <UseRe/> */}
      {/* <UseRefOTP/> */}
      {/* <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <UseRefOTP /> */}
      {/* <ParentComp/> */}
      {/* <SwitchBulb/> */}
      {/* <FruitList/> */}
      {/* <TaskProvider>
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskList />
    </TaskProvider>     */}
      {/* <UseEft/> */}
      {/* <MealFinder/> */}
      {/* <Parent /> */}
      {/* <h1>hello</h1> */}
      {/* <ChildC/> */}
      <ControlledComponent/>
    </div>
  );
};

export default App;
