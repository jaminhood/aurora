import imgSliderBg from "@/assets/slider-1-bg.jpg"
import Image from "next/image"
import Container from "../../../shared/Container"

const ProductsSlide = () => {
 return (
  <div className="h-[70vh] overflow-hidden w-full relative text-gray-50">
   <div className="absolute inset-0 -z-10">
    <Image src={imgSliderBg} className="w-full h-full object-cover" alt="" />
   </div>
   <Container>
    <div className="grid grid-cols-2 gap-8 items-center h-[70vh] overflow-hidden w-full relative text-gray-50">
     <div className="col-span-1"></div>
     <div className="col-span-1">
      <h2 className="font-bold text-6xl">Lorem ipsum dolor sit amet.</h2>
      <p className="text-base mt-8">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
       deserunt veniam nisi dignissimos fuga doloremque quidem maiores cumque ab
       iusto!
      </p>
     </div>
    </div>
   </Container>
  </div>
 )
}

export default ProductsSlide
