import placeholder from "@/assets/placeholder.jpg"
import { usePriceFormat } from "@/hooks/shared/usePriceFormat"
import Image from "next/image"
import Link from "next/link"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { CgShoppingCart } from "react-icons/cg"

const ProductCard = () => {
 const [price] = usePriceFormat(20.99)

 return (
  <div className="border border-gray-300 overflow-hidden rounded-lg">
   <div className="">
    <Image src={placeholder} className="w-full object-cover" alt="" />
   </div>
   <div className="px-4 py-8">
    <h4 className="text-base font-semibold capitalize">Chocolate Cheesecake</h4>
    <div className="flex items-center justify-between">
     <div>
      <h2 className="text-2xl py-2 font-bold">{price}</h2>
      <div className="flex items-center gap-1">
       <AiFillStar size={17} />
       <AiFillStar size={17} />
       <AiFillStar size={17} />
       <AiFillStar size={17} />
       <AiOutlineStar size={17} />
       <span className="ml-2 text-sm">(120)</span>
      </div>
     </div>
     <div>
      <Link href="/shop/01">
       <button className="bg-gray-950 text-gray-50 rounded-full h-12 w-12 flex items-center justify-center cursor-pointer">
        <CgShoppingCart size={30} />
       </button>
      </Link>
     </div>
    </div>
   </div>
  </div>
 )
}

export default ProductCard
