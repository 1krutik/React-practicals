import React, { useState } from 'react';

const Try = () => {
  
  const [state,setState]=useState("")
   const [data,setData]=useState([])



   const add=(e)=>{
    setState(e.target.value)
   }
   const addData=()=>{
    setData([...data,state])
    setState("")
   }



   return(
       
       
       <div>

        <input type="text" onChange={add} placeholder='Enter Text' value={state} name="" id="" />
        <button onClick={addData}>click</button>

        <ul>
            {
                data.map((el)=>{
            
                    return(
            <ul>

                <li>{el}</li>
            </ul>
                    )
                })
            }
        </ul>
    </div>

)
}
export default Try;
