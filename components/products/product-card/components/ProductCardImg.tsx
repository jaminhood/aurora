import placeholder from "@/assets/wine-3.jpg"
import Image from "next/image"

const ProductCardImg = () => {
 return (
  <div className="h-52 bg-gray-300">
   <Image src={placeholder} className="w-full h-full object-cover" alt="" />
  </div>
 )
}

export default ProductCardImg
