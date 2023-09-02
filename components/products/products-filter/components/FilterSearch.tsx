import { BiSearch } from "react-icons/bi"

const FilterSearch = () => {
 return (
  <div className="bg-gray-300 p-2 rounded-md flex items-center gap-4 w-full">
   <BiSearch size={25} />
   <input
    type="text"
    className="w-full bg-transparent inline-block text-sm hover:outline-0 focus:outline-0"
    placeholder="Search for anything..."
   />
  </div>
 )
}

export default FilterSearch
