import React, { useState } from 'react'

export default function ApiCard() {

    const [state, setState] = useState({
        name: "Manthan",
        gender: "Male",
        city: "Ahmedabad",
        image: "https://w0.peakpx.com/wallpaper/818/855/HD-wallpaper-natural-background-background-natural-background-thumbnail.jpg",
    })

    const getUserData = () => {
        fetch('https://randomuser.me/api/?results=1')
            .then((res) => res.json())
            .then((userdata) => {
                console.log(userdata)
                setState({
                    name: userdata.results[0].name.first,
                    gender: userdata.results[0].gender,
                    city: userdata.results[0].location.city,
                    image: userdata.results[0].picture.large,
                });
            });
    };

    return (
        <div className='d-flex' > 

            <div className='' style={{width:"20%"} }>
            <img src={state.image} width="100%" alt="Profile Image" />
            </div>

            <div style={{width:"65%"}}>
              <dl>
                <dt>
                    <b>User Name</b>
                </dt>
                <dd>{state.name}</dd>
                <dt>
                    <b>City</b>
                </dt>
                <dd>{state.city}</dd>
                <dt>
                    <b>Gender</b>
                </dt>
                <dd>{state.gender}</dd>
                <dt>
                    <b>Description</b>
                </dt>
                <dd>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio beatae, nemo numquam ad non aliquam dicta quam saepe officia qui dignissimos enim. Labore architecto voluptatem reiciendis cupiditate iste suscipit iusto! Quae excepturi laborum impedit, voluptates tenetur, soluta maxime vero itaque nemo tempore, vel rem provident accusamus non expedita eveniet odio?
                </dd>
              </dl>
              <button onClick={getUserData}>Random User</button>
            </div>
      </div>
)
}