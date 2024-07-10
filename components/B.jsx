import React, { useContext } from 'react'

import { myContext } from './Context'
import C from './C'



export default function B() {
    const data=useContext(myContext)
  return (
    <div>
      

      <h1>B Comnponent</h1>

      <p>{data.email}</p>
      <C/>

    </div>
  )
}
