import React, { useState } from 'react';

const Controlled = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const FirstName = (el) => {
        setFirstName(el.target.value);
    };
    const LastName = (el) => {
        setLastName(el.target.value);
    };
    const Email = (el) => {
        setEmail(el.target.value);
    };

    const AddData = () => {
        if (!firstName) {
            return alert("Enter FirstName...");
        }
        else if (!lastName) {
            return alert("Enter LastName...");
        }
        else if (!email) {
            return alert("Enter Email...");
        }
        else {
            alert("Data Added Successfully...")
            console.log({
                firstName: firstName,
                lastName: lastName,
                email: email,
            });
            setFirstName('');
            setLastName('');
            setEmail('');
        }

    };

    return (

<>
      <div  style={{border:"solid black 2px"}} className="container w-25 y-5   ">

        <div className=' w-25 mt-5'>
            <form>
                <input type="text" style={{border:"solid black 2px"}} className='mt-2 mx-5 my-3' name="firstName" placeholder="Enter FirstName" value={firstName} onChange={FirstName} />
                <input type="text" style={{border:"solid black 2px"}} name="lastName" className='mt-2 mx-5  my-3' placeholder="Enter LastName" value={lastName} onChange={LastName} />
                <input type="email" name="email" style={{border:"solid black 2px"}}   className='mt-2 mx-5  my-3' placeholder="Enter Email" value={email} onChange={Email} />
                <button type="button"  className='btn btn-primary mt-2 mx-5'  onClick={AddData}>Submit</button>
            </form>
        </div>
      </div>
</>
    );
};

export default Controlled;
