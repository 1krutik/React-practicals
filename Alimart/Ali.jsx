import React from 'react'
import'./Ali.css'

const Ali = () => {
  return (
    <div>

        <div className='Header'>
            <div className='Head'>

                <ul className=''>
                    <li className='flex-items'>Welcome Our Online Store !</li>
                 <span>   <i class="fa-regular fa-envelope fa-xs"> </i> </span> <li className='flex-items'>Email: Design@domain.com</li>
                    <li className='flex-items'> <span><i class="fa-solid fa-phone fa-xs" ></i></span> Hotline: (888) 4344 6000 - (888) 1338 8193 </li>
                    
                </ul>

                <div className='english'>
                  <button>English</button>
                  <button>$US DOLLER</button>

                </div>
            </div>

            <div className="logo-Header">
             <div>


               <img src="https://opencart.smartaddons.com/themes/so_alimart/layout5/image/catalog/logo5.png" alt="" />
              </div>
              
              <div className='search-btn'>
                <input className='srch' type="text " placeholder='Search' name="" id="" />
                <button className='btn '><i class="fa-solid fa-magnifying-glass fa-xs"></i></button>
                </div>  
            </div>

        </div>
      


    </div>
  

)
}

export default Ali
