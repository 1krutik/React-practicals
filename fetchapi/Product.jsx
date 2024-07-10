import React from 'react'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <ul>
            <li><Link to={"/ele"}>Electronic</Link></li>
            <li>Jewelserry</li>
            <li>Men</li>
            <li>Women</li>
           
        </ul>
    </div>
  )
}
