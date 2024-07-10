import React, { useEffect, useState } from "react";

export default function ConditionRendering() {
  const [state, setState] = useState("https://w0.peakpx.com/wallpaper/818/855/HD-wallpaper-natural-background-background-natural-background-thumbnail.jpg");
    const [pizza, setPizza] = useState(" https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg");


  useEffect(() => {
    console.log("Mount");

    return () => {
      alert("Unmount");
    };
  },[pizza]);

  return(
     <div>


    <h1>card</h1>
    <img src={state} alt="" />

    <button onClick={()=>setState("https://w0.peakpx.com/wallpaper/818/855/HD-wallpaper-natural-background-background-natural-background-thumbnail.jpg")}>click Card </button>


    <button onClick={()=>setState("https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg")}> Pizza </button>
  </div>
)
}
