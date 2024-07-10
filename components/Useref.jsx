import React, { useState } from "react";
import { useRef } from "react";

export default function Useref() {
  const [state, setState] = useState(0);
  const id = useRef(null);


  function Start() {
    id.current = setInterval(() => {
      setState((prevState) => (prevState + 1));
    }, 500);
  }

  function Stop() {
    clearInterval(id.current);
  }

  function Reset() {
    setState(0)
  }

  return (
    <div className="container ">
      <h1>Timer Is {state}</h1>

      <button onClick={Start}>Start</button>
      <button onClick={Stop}>Stop</button>
      <button onClick={Reset}>Reset</button>

    </div>
  );
}
