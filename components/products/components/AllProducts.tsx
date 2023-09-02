import Button from "@/components/shared/Button"
import Container from "@/components/shared/Container"
import ProductCard from "../product-card"
import ProductSectionHeading from "../shared/ProductSectionHeading"

const AllProducts = () => {
 return (
  <section className="w-full px-4 py-8">
   <Container>
    <ProductSectionHeading title="All Products" />
    <div className="grid grid-cols-4">
     {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => (
      <div className="p-4" key={data}>
       <ProductCard />
      </div>
     ))}
    </div>
    <div className="grid grid-cols-3">
     <div className="col-span-1"></div>
     <Button isBlock={true} isOutline={true}>
      <span className="text-center w-full inline-block">Load more 100+</span>
     </Button>
    </div>
   </Container>
  </section>
 )
}

export default AllProducts
