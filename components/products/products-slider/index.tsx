"use client"

import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import ProductsSlide from "./components/ProductsSlide"

const sliderSettings = {
 dots: true,
 arrows: false,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 5000,
 speed: 500,
 slidesToShow: 1,
 slidesToScroll: 1,
}

const ProductsSlider = () => {
 return (
  <section className="bg-gray-100">
   <div className="h-[70vh] w-full product-slider__main">
    <Slider {...sliderSettings}>
     {[0, 1, 2, 3, 4, 5].map((data) => (
      <ProductsSlide key={data} />
     ))}
    </Slider>
   </div>
  </section>
 )
}

export default ProductsSlider
