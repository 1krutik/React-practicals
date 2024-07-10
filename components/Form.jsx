import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const Name = (el) => {
    setName(el.target.value);
  };
  const Email = (el) => {
    setEmail(el.target.value);
  };

  const Phone = (el) => {
    setPhone(el.target.value);
  };

  const Age = (el) => {
    setAge(el.target.value);
  };

  const AddData = () => {
    if (!name) {
      return alert("Enter Your Name");
    } else {
      alert("Added SuccesFully");

      console.log({
        phone: phone,
        name: name,
        email: email,
        age:age,
      });
    }
  };

  return (
    <div className="container w-50 ">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
        value={email}
        onChange={Email}
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>{" "}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Name{" "}
        </label>
        <input
        value={name}
        onChange={Name}
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Enter Your Name"
        />
      </div>{" "}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Phone
        </label>
        <input
        value={phone}
        onChange={Phone}

          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="xxxxxxxxx"
        />
      </div>{" "}
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Age
        </label>
        <input
        onChange={Age}
        value={age}
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder=" Enter Your Age"
        />
      </div>
      <button onClick={AddData}>Submit </button>
    </div>
  );
}
