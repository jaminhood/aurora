"use client"

import { productSliderSectionTypes } from "@/types/product"
import { NextArrow, PrevArrow } from "@/utils/shared/Helpers"
import { FC } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import Container from "../../shared/Container"
import ProductSectionHeading from "./ProductSectionHeading"

const sliderSettings = {
 dots: true,
 arrows: true,
 infinite: true,
 autoplay: true,
 autoplaySpeed: 5000,
 speed: 500,
 nextArrow: <NextArrow />,
 prevArrow: <PrevArrow />,
 slidesToShow: 4,
 slidesToScroll: 1,
 responsive: [
  {
   breakpoint: 768,
   settings: {
    slidesToShow: 2,
    slidesToScroll: 1,
   },
  },
  {
   breakpoint: 567,
   settings: {
    slidesToShow: 1,
    slidesToScroll: 1,
   },
  },
 ],
}

const ProductSliderSection: FC<productSliderSectionTypes> = (props) => {
 const { title, children } = props

 return (
  <section className="w-full px-4 py-8 product-slider">
   <Container>
    <ProductSectionHeading title={title} />
    <Slider {...sliderSettings}>{children}</Slider>
   </Container>
  </section>
 )
}

export default ProductSliderSection
