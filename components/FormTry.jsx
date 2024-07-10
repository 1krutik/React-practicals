import React, { useState } from "react";

export default function FormTry() {
  const [name, setName] = useState({
    name: "",
    email: "",
  });

  const AddData = () => {
    console.log(name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Email"
        name=""
        id=""
        onChange={(e) => {
          setName({
            ...name,
            name: e.target.value,
          });
        }}
      />
      <input
        type="text"
        placeholder="Enter Name"
        name=""
        id=""
        onChange={(e) => {
          setName({
            ...name,
            email: e.target.value,
          });
        }}
      />
      <input type="submit" name="" onClick={AddData} id="" />{" "}
    </div>
  );
}
