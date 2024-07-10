import React, { useRef } from 'react'

export default function Dom() {


    const colorRef=useRef(null)
    function update(){
        colorRef.current.style.background="red"
    
    }
  return (
    <div>
        <h1>Dom </h1>
        <div style={{background:"green"}} ref={colorRef}> Hello </div>
        <button onClick={update}> Click Here</button>
    </div>
  )
}
