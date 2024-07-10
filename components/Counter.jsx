import React, { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(state + 1);

    console.log(state);

    return () => {
      alert("welcom");
    };
  });
  return (
    <>
      <div>
        <h1> Counter is {state}</h1>
      </div>
      <button onClick={Counter}>on click</button>
    </>
  );
}
