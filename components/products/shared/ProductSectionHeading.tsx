import { TitleTypes } from "@/types"
import { FC } from "react"

const ProductSectionHeading: FC<TitleTypes> = ({ title }) => {
 return (
  <div className="flex justify-between items-center px-4 pb-4">
   <h4 className="text-2xl font-bold capitalize">{title}</h4>
  </div>
 )
}

export default ProductSectionHeading
