import React, { useState } from "react";

export default function Add() {
  const [state, setState] = useState("");
  const [data, setData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("todos"));
    return savedData || [];
  });

  function addText(e) {
    setState(e.target.value);
  }

  function addTodo() {
    if (state.trim() !== "") {
      setData([...data, state]);
      setState(""); // Clear the input field after adding a todo
    }
  }

  function deleteTodo(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }

  // Update localStorage whenever data changes
  // This runs on every re-render, which may not be efficient
  localStorage.setItem("todos", JSON.stringify(data));

  return (
    <div>
      <h2>Todo</h2>
      <input
        type="text"
        placeholder="Enter Text"
        value={state}
        onChange={addText}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {data.map((el, i) => (
          <li key={i}>
            {el}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </li>
        ))}
      </ul>
       
    </div>
  );
}
