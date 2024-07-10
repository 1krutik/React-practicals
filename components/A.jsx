import React, { useState } from 'react'
import { myContext } from './Context'
import B from './B'

export default function A() {


    const [state,setState]=useState({
        email:"Krutik@gmail.com",
        name:"Krutik"
    })


  return (
    <div> 
        
<h1>A Component</h1>
<p>{state.name}</p>
<myContext.Provider value={state}>
    
    <B/>
    </myContext.Provider>        

    </div>
  )
}
