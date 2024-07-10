import React from 'react'
import { useState } from 'react'

export default function Todo() {
  const [state, setState] = useState("")
  const [data, setData] = useState([])

  function add(e){
    setState(e.target.value)
  }

  function addData(){
    setData([...data, state]);
    setState("");
  }

  function deleteItem(index) {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  }
    return (
        <div>
          <h1>Todo</h1>
          <input type="text" placeholder='Enter anythig' onChange={add} name="" id="" />
          <button onClick={addData}>Add</button>
          <p>
            {
              data.map((el, i) => {
                return (
                  <li key={i}>
                    {el}

                    <button onClick={() => deleteItem(i)}>Delete</button>
                   
                  </li>
                )
              })
            }
          </p>
        </div>
      )
    }