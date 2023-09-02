import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const ProductCardRatings = () => {
 return (
  <div className="flex items-center gap-1">
   <AiFillStar size={17} />
   <AiFillStar size={17} />
   <AiFillStar size={17} />
   <AiFillStar size={17} />
   <AiOutlineStar size={17} />
   <span className="ml-2 text-sm">(120)</span>
  </div>
 )
}

export default ProductCardRatings
