import React, { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const Name=(e)=>{

setName(e.target.value)
  }
  const Email=(e)=>{
setEmail(e.target.value)
  } 
  const Phone=(e)=>{
    setPhone(e.target.value)
      } 

  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple Form</h1>
        <input type="text" value={name} name="" id="" placeholder='Enter Your Name...' onChange={Name} />
        <input type="email" value={email} name="" id="" placeholder='Enter Your Email...' onChange={Email} />
        <input type="number" value={phone} name="" id="" placeholder='Enter Your Phone...' onChange={Phone} />
        <button>Your Name is : <h5>{name}</h5>  </button>
        <button>Your Email is : <h5>{email}</h5>  </button>
        <button>Your Phone is : <h5>{phone}</h5>  </button>
      
      </header>
    </div>
  );
}

export default App;
