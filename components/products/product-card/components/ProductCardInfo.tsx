import { usePriceFormat } from "@/hooks/shared/usePriceFormat"
import Link from "next/link"
import { CgShoppingCart } from "react-icons/cg"
import ProductCardRatings from "./ProductCardRatings"

const ProductCardInfo = () => {
 const [price] = usePriceFormat(20.99)

 return (
  <div className="px-4 py-8">
   <h4 className="text-base font-semibold capitalize">Chocolate Cheesecake</h4>
   <div className="flex items-center justify-between">
    <div>
     <h2 className="text-2xl py-2 font-bold">{price}</h2>
     <ProductCardRatings />
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
 )
}

export default ProductCardInfo
