import Container from "@/components/shared/Container"
import { BiFilter } from "react-icons/bi"
import FilterSearch from "./components/FilterSearch"

const ProductsFilter = () => {
 return (
  <section className="w-full px-4 py-8">
   <Container>
    <div className="grid grid-cols-2 gap-16 px-4">
     <div className="col-span-1 flex justify-between items-center gap-16">
      <div className="flex justify-between items-center gap-4"></div>
     </div>
     <div className="col-span-1 flex justify-between items-center gap-16">
      <FilterSearch />
      <span className="w-10 h-10 bg-gray-950 text-gray-50 border-2 border-gray-950 rounded-md flex justify-center items-center cursor-pointer transition-all ease-in-out duration-500 hover:bg-transparent hover:text-gray-950">
       <BiFilter size={30} />
      </span>
     </div>
    </div>
   </Container>
  </section>
 )
}

export default ProductsFilter
