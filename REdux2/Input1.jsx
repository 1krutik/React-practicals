import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addAction } from './Action'

const Input1 = () => {

    const [state,setState]=useState("")
    const dispatch=useDispatch()


    const Add=(e)=>{
setState(e.target.value)
    }
    

    const AddToDo=()=>{
      dispatch (addAction(state))


    }


  return (
    <div>
        <input type="text" placeholder="Enter your name" onChange={Add} />
        <button onClick={AddToDo}>Click</button>
    </div>
  )
}

export default Input1
