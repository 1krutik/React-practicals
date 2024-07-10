import React, { useState } from 'react'

export default function Obj() {
    const [obj,setObj] = useState({
        name:"krutik",
        Email:"ahcajbc",
    })
  return (
    <div>

        <h1>{obj.name}</h1>
      
    </div>
  )
}
