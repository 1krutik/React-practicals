import React, { useRef } from 'react'

const UnControlled = () => {

    const fname = useRef(null)
    const lname = useRef(null)
    const email = useRef(null)

    function AddData() {
        console.log({
            fname: fname.current.value,
            lname: lname.current.value,
            email: email.current.value,
        });
    }

    return (
        <div>
            <form action="">
                <input type="text" placeholder='Enter FirstName' ref={fname} />
                <input type="text" placeholder='Enter LastName' ref={lname} />
                <input type="email" placeholder='Enter Email' ref={email} />
                <button onClick={AddData} type='button'>Submit</button>
            </form>
        </div>
    )
}

export default UnControlled
