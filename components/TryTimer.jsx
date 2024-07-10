import React from 'react'
import { useState } from 'react'

const TryTimer = () => {

const [state,setState]=useState()

const onChange=(e)=>{
 const newVal= e.target.value;
  setState(newVal)
  
}

  return (


    <div>
<>
<h1>{state}</h1>
<input type="text" placeholder='ENter SomeThing' onChange={onChange} name="" value={state} id="" />
</>
    </div>
  )
}

export default TryTimer
