// Event Handling:
// Event handling is how we respond to actions or events that happen in a program, like when a user clicks a button, types in a form, or moves the mouse. In web development, we use functions or methods to "handle" these actions and decide what should happen next.

// For example, if a user clicks a "Submit" button, we can write code to process that click event, like sending the form data to the server.

// Conditional Rendering:
// Conditional rendering is the process of deciding what to show on the screen based on certain conditions or rules. In other words, we display different things depending on whether something is true or false.

// For example, if a user is logged in, we might show a "Welcome" message. If they are not logged in, we might show a "Login" button. The screen content changes based on the condition (whether the user is logged in or not).

import { useState } from "react";
import bulbOn from "../assets/on.png";
import bulbOff from "../assets/of.png";

const SwitchBulb = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleBulb = (state) => {
    setIsOn(state);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      {/* <h1 className="text-2xl font-bold">Bulb {isOn ? "On" : "Off"}</h1>
       */}

      <p className="text-2xl font-bold">
        Bulb
        <span
          className={` text-2xl font-bold ${
            isOn ? "text-red-500" : "text-green-500"
          }`}
        >
          {isOn ? "ON" : "OFF"}
        </span>
      </p>
      <img
        src={isOn ? bulbOn : bulbOff}
        alt="Bulb"
        className="w-44 h-44 my-4"
      />

      <div className="space-x-4">
        <button
          onClick={() => toggleBulb(true)}
          className={`px-4 py-2 font-semibold rounded-lg ${
            isOn ? "bg-red-500 text-white" : "bg-white text-black border"
          }`}
        >
          On
        </button>
        <button
          onClick={() => toggleBulb(false)}
          className={`px-4 py-2 font-semibold rounded-lg ${
            !isOn ? "bg-green-500 text-white" : "bg-white text-black border"
          }`}
        >
          Off
        </button>
      </div>
    </div>
  );
};

export default SwitchBulb;
