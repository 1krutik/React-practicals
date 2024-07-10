import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { EditAction, RemoveAction,  } from "../REdux2/Action";

const Display = () => {
  const Data = useSelector((Store) => {
    return Store;
  });

  // const dispatch = useDispatch();

  // function deleteTodo(i) {
  //   return dispatch(RemoveAction({i}))
   
  // }

  const dispatch = useDispatch();
  function deleteTodo(i){
    dispatch (RemoveAction(i))
  }




  function editData(index,newValue){
    const newData=[...Data]
    newData[index]=newValue
    dispatch(EditAction({index ,newData}))
    

  }
  return (
    <div>
      <h1>Display</h1>
      {Data.map((el, i) => {
        return <>
            <li key={i}>{el}</li>
           <button onClick={()=>{deleteTodo(el)}}> Delete</button>


           <button onClick={()=>{
            var newValue=prompt("enter the value")
            editData(i,newValue)
           }}>Edit</button>
          </>
        
      })}
    </div>
  );
};

export default Display;
