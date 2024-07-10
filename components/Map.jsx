import React, { useState } from 'react'

export default function Map() {
    const [data,setData]=useState(["krutik","yash","Karan"])
  return (


    <div>
        <h2>Map</h2>
        {
            data.map((e)=>{
                return <li>{e}</li>
            })
        }

    </div>
  )
}
