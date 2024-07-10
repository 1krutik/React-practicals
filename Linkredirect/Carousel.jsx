import React from 'react'

export default function Carousel() {
  return (
    <div>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active  w-50 ">
      <img src="https://fashiondeal.in/image/cache/catalog/products_2023/khushi-kapoor-pink-georgette-sequence-mirror-work-designer-bollywood-saree-11023-600x800w.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item  w-50">
      <img src="https://global.karagiri.com/cdn/shop/products/silk-saree-bumblebee-yellow-silk-saree-silk-saree-online-32253998465217_cf7d08e8-61a1-43a1-a3f2-aa2477763f0e.jpg?v=1668169695&width=1200" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item w-50 ">
      <img classNameName='' src="https://ik.imagekit.io/bhsa3gea8yj/products/tr:w-1200/products-2018/April-2021/Net-Designer-Saree-In-Lavender-Colour-SR1542726-A.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
