import ProductCardImg from "./components/ProductCardImg"
import ProductCardInfo from "./components/ProductCardInfo"

const ProductCard = () => {
 return (
  <div className="border border-gray-300 overflow-hidden rounded-3xl">
   <ProductCardImg />
   <ProductCardInfo />
  </div>
 )
}

export default ProductCard
