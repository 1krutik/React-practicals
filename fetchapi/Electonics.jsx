import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Electronic = () => {

    const [state, setState] = useState([])
    const [ascending, setAscending] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setState(data)
            })
    }, [])

    function Sort() {

        const sortData = [...state]

        if (ascending) {
            sortData.sort((a, b) => a.price - b.price)
        }
        else {
            sortData.sort((a, b) => b.price - a.price)
        }

        setState(sortData)
        setAscending(!ascending)

    }

    function Search(e) {

        setSearch(e.target.value)

    }

    const filterProduct = state.filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>

            <h1>Electronics</h1>
            <button onClick={Sort}>Sort By {ascending ? "Dese" : "Asc"} Price</button>
            <input type="text" onChange={Search} />

            {
                filterProduct.length > 0 ? (
                    <ol>
                        {
                            filterProduct.map((el, i) => {
                                return <>
                                    <Link to={`/product/${el.id}`}><li>{el.title}</li></Link>
                                    <p>{el.price}</p>
                                </>
                            })
                        }
                    </ol>
                ) : (
                    <div>
                        <h1>Product Not Found</h1>
                    </div>
                )
            }

            {/* {
                state.map((el) => {
                    return <>

                        <p>{el.title}</p>
                        <p>{el.price}</p>

                    </>
                })
            } */}

        </div>
    )
}

export default Electronic
