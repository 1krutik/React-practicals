import React from 'react'

export default function Slider() {
  return (
    <div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      {/* <img src="" class="d-block w-50  " alt="..."/> */}
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/eb4d61e2c5c0ec42.jpg?q=20" class="img-thumbnail w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ae9a1349fe262071.png?q=20" class="img-thumbnail w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20" class="img-thumbnail w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
