
export const addAction = (payload) => {

    return {
        type: "ADD",
        payload,
    }

}

export const RemoveAction = (payload) => {
    return {
        type: "DELETE",
        payload,
    }

}

export const EditAction = (payload)=>{
    return{
        type:"EDIT",
        payload

    }
}
