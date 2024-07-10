import React, { useEffect, useState } from 'react'

export default function Timer() {

    const [state,setState]=useState(0)

 useEffect(()=>{

  setTimeout(()=>{
   setState(state+1)
  },1000)
 },[state])
  return (
    <div className='container'>
        <h1 className="text-center text -4xl font-bold mt-8">Timer {state}</h1>

    </div>
  )
}
