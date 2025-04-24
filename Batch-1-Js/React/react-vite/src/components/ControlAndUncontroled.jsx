// In React, components that handle form inputs can be categorized as controlled or uncontrolled, based on how they manage and access their data.

// Controlled Components:

// In controlled components, form data is managed by the component's state. React serves as the single source of truth, controlling the input elements via state. This approach provides explicit control over the form data, allowing for real-time validation and dynamic updates.

// function ControlAndUncontroled() {
//   const [inputValue, setInputValue] = useState("");

//   const handleChange = (e) => {
//     setInputValue(e.target.value);
//     console.log(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Input Value : ${inputValue}`);
//   };

//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className=" flex flex-col justify-center items-center mt-40"
//       >
//         <label>Control Component</label>
//         <input
//           type="text"
//           className="border-4"
//           value={inputValue}
//           onChange={handleChange}
//         ></input>

//         {/* <p> current value :{inputValue}</p> */}
//         <button type="submit"> Submit</button>
//       </form>
//     </div>
//   );
// }

// export default ControlAndUncontroled;

// ---------------------------------------------------------------------------------------------
// Uncontrolled Components:

// Uncontrolled components rely on the DOM to manage their state. Instead of using React state, you access the form values directly using refs. This approach is closer to traditional HTML form handling and can be simpler for basic use cases.

// const ControlAndUncontroled = () => {
// const inputRef = useRef(null)

// const handleSubmit = (e)=>{
// e.preventDefault()
// alert(`Input Value : ${inputRef.current.value}`)
// }
// const handleOnChange=(e)=>{
// console.log(e.target.value)
// }

//   return (
//     <>
//     <form  onSubmit={handleSubmit} className=" flex flex-col justify-center items-center mt-40">
//       <label> uncontrolled Component Input</label>
//       <input type="text" className="border-4" ref={inputRef} onChange={handleOnChange}></input>
//       <button type="submit" > Submit</button>
//     </form>
//     </>
//   );
// };

// export default ControlAndUncontroled;
import { useState } from "react";

const ControlAndUncontroled = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    country: "",
  });

  const [error, setError] = useState({
    name: "",
    password: "",
    gender: "",
    country: "",
  });

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.name) {
      formErrors.name = "Name is required";
      isValid = false;
    }
    if (!formData.password) {
      formErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be atleast 6 chacter";
      isValid = false;
    }

    if (!formData.gender) {
      formErrors.gender = "Please select your gender";
      isValid = false;
    }

    if (!formData.country) {
      formErrors.country = "Please select your country";
      isValid = false;
    }

    setError(formErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted Sucessfully");
      setFormData({
        name: "",
        password: "",
        gender: "",
        country: "",
      });
    }
  };

  return (
    <div className=" h-screen  items-center justify-center flex ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col  justify-center items-center border-4  pt-10"
      >
        <label> Name</label>
        <input
          className=" border-2"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your Name"
        />
        {error.name && <p className=" text-red-500">{error.name}</p>}

        <br></br>
        <label> Password</label>
        <input
          className=" border-2"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
        />
        {error.name && <p className=" text-red-500">{error.password}</p>}

        <br></br>
        <label className="mt-10">Gender</label>
        <label>
          {" "}
          <input
            type="radio"
            name="gender"
            value="male"
            checked={formData.gender === "male"}
            onChange={handleChange}
          />
          Male
        </label>
        <label>
          {" "}
          <input
            type="radio"
            name="gender"
            value="female"
            checked={formData.gender === "female"}
            onChange={handleChange}
          />{" "}
                    Female

        </label>

        <div>
          {" "}
          {error.gender && <p className=" text-red-500">{error.gender}</p>}
        </div>

        <div>
          <label className="mt-10"> Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option> Select Your Country</option>
            <option> USA</option>
            <option> India</option>
            <option> Cannada</option>
            <option> Germany</option>
          </select>
          {error.country && <p className=" text-red-500">{error.country}</p>}
        </div>

        <br></br>
        <button
          type="submit"
          className=" mt-10 p-4 bg-blue-400 rounded-2xl w-28 mb-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlAndUncontroled;
