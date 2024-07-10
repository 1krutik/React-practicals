import React, { useContext } from 'react'
import { myContext } from './Context'

export default function C() {


    const data = useContext(myContext)


  return (

    <div>
        <h1>C Component</h1>
        <p>{data.name}</p>
      
    </div>
  )
}
