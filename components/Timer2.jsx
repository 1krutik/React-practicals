import React, { useEffect } from 'react'
import { useState } from 'react'

const Timer2 = () => {
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        setInterval(()=>{
setTimer(timer + 1)

        }, 1000)
            
            
    }, [timer]);
  return (
    <div>

        <h1>Timer : {timer}</h1> 
       


    </div>
  )
}

export default Timer2
