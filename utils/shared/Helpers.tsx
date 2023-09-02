import { SliderBtnTypes } from "@/types/shared"
import { FC } from "react"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

export const NextArrow: FC<SliderBtnTypes> = ({ onClick }) => {
 return (
  <>
   <div className="control__btn control__btn--right" onClick={onClick}>
    <button className="absolute -top-10 right-0">
     <BiChevronRight size={30} />
    </button>
   </div>
  </>
 )
}

export const PrevArrow: FC<SliderBtnTypes> = ({ onClick }) => {
 return (
  <>
   <button className="control__btn control__btn--left" onClick={onClick}>
    <BiChevronLeft size={30} />
   </button>
  </>
 )
}
