const Data = [];

export const myReducer = (state = Data, action) => {
  if (action.type === "ADD") {
    state = [...state, action.payload];
  } 
  else if (action.type === "DELETE") {
    let arr = state.filter((i,el) => {
      return i !== action.payload
    });
    
    state = arr;
  }

  else if(action.type==="EDIT"){
    let {index,newData}=action.payload;
    return state.map((el,i)=>
      index===i?newData:el
    )
  }

  return state;
};
