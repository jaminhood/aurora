import AllProducts from "@/components/products/components/AllProducts"
import ProductCard from "@/components/products/product-card"
import ProductsFilter from "@/components/products/products-filter"
import ProductsSlider from "@/components/products/products-slider"
import ProductSliderSection from "@/components/products/shared/ProductSliderSection"

export default function Shop() {
 return (
  <>
   <ProductsFilter />
   <ProductsSlider />
   <ProductSliderSection title="Recomended">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
     <div className="px-4" key={data}>
      <ProductCard />
     </div>
    ))}
   </ProductSliderSection>
   <ProductSliderSection title="Best Seller">
    {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
     <div className="px-4" key={data}>
      <ProductCard />
     </div>
    ))}
   </ProductSliderSection>
   <AllProducts />
  </>
 )
}
