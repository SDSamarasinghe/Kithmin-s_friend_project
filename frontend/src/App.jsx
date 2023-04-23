import { useState } from "react";
import "./app.css";
import FormInput from "./components/FormInput";
import ImageUpload from "./imageUpload";
import axios from "axios";

import { generateId } from "./utils/generateId";

const App = () => {
  const [values, setValues] = useState({
    EmployeeID: "",
    FullName: "",
    NICNumber: "",
    Address: "",
    PhoneNumber: "",
    EmailAddress: "",
    DateOfBirth: "",
    RegisteredDate: "",
    Department: "",
  });

  const inputs = [
    {
      id: 1,
      name: "FullName",
      type: "text",
      placeholder: "Full Name",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Full Name  ",
      //pattern: "^[(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})",
      required: true,
    },

    {
      id: 2,
      name: "NICNumber",
      type: "text",
      placeholder: "National Identy Card Number",
      errorMessage: "NIC should be 3-12 characters and should include v!",
      label: "NIC Number",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },

    {
      id: 3,
      name: "Address",
      type: "text",
      placeholder: "Address",
      errorMessage:
        "Addressshould be 3-16 characters and shouldn't include any special character!",
      label: "Address ",
      //pattern: "^[(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})",
      required: true,
    },

    {
      id: 4,
      name: "PhoneNumber",
      type: "text",
      placeholder: "Phone Number ",
      errorMessage: "Phone should be 10 Numbers !",
      label: "Phone Number",
      //pattern: "^[0-9]{10}$",
      required: true,
    },

    {
      id: 5,
      name: "EmailAddress",
      type: "email",
      placeholder: "Email Address",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },

    {
      id: 6,
      name: "DateOfBirth",
      type: "date",
      placeholder: "Date Of Birth",
      label: "Birthday",
    },

    {
      id: 7,
      name: "RegisteredDate",
      type: "date",
      placeholder: "Register Date",
      label: "Register Date",
    },

    {
      id: 8,
      name: "Department",
      type: "text",
      placeholder: "Department",
      errorMessage: "Department not match!",
      label: "Department",
      //pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, EmployeeID: generateId() });
    // console.log(values);

    // console.log(generateId());

    axios
      .post("http://localhost:8070/registers/add", values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log("submit");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <h2>Image</h2>
        <ImageUpload />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
