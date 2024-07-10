import React, { useState } from "react";

export default function FormValidation() {
  const [firstName, setFirstName] = useState("");
  const [phone, setPhoneNumber] = useState(""); 
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");

  const FirstName = (el) => {
    setFirstName(el.target.value);
  };
  const Email = (el) => {
    setEmail(el.target.value);
  };
  const PhoneNumber = (el) => {
    setPhoneNumber(el.target.value);
  };

  const Age = (el) => {
    setAge(el.target.value);
  };


  const AddData = () => {
    if (!firstName) {
        return alert("Enter FirstName...");
    }
    else if (!phone) {
        return alert("Enter Phone...");
    }
    else if (!email) {
        return alert("Enter Email...");
    }

    else if (!age) {
      return alert("Enter Age...");
  }
    else {
        alert("Data Added Successfully...")
        console.log({
            firstName: firstName,
            email: email,
            phone:phone,
            age: age,
        });
        setFirstName('');
        setEmail('');
        setPhoneNumber('');
        setAge('')
    }

};



  return (
    <div className="container border border border-3 h-75 w-50 mt-3 p-3">
      <h1>Contact Information</h1>
      <div>
        <div className="mb-3 rounded p-3 mb-2 bg-secondary text-white">
          <label className="form-label">NAME</label>
          <input
            onChange={FirstName}
            type="text"
            value={firstName}
            className="form-control"
            placeholder="ENTER YOUR NAME"
          />
        </div>

        <div className="mb-3 rounded p-3  mb-2 bg-secondary text-white">
          <label className="form-label">EMAIL ADDRESS</label>
          <input
          value={email}
            onChange={Email}
            type="email" 
            className="form-control"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3 rounded p-3  mb-2 bg-secondary text-white">
          <label className="form-label">PHONE NUMBER </label>
          <input
            value={phone}
            onChange={PhoneNumber}
            type="number"
            className="form-control"
            placeholder="XXXXXXXXXX"
          />
        </div>
        <div className="mb-3 rounded p-3  mb-2 bg-secondary text-white">
          <label className="form-label">AGE </label>
          <input
          value={age}
            onChange={Age}
            type="text"
            className="form-control"
            placeholder=""
          />
        </div>

      
          <button onClick={AddData} type="button" className="btn btn-primary ">
           
            submit
          </button>
        </div>
      </div>
    
  );
}
