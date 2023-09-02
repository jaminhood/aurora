import Link from "next/link"
import { AiFillStar } from "react-icons/ai"

const HeaderLogo = () => {
 return (
  <>
   <Link href="/">
    <h4 className="text-sm font-bold uppercase py-3 px-6 rounded-full bg-gray-300 flex justify-center items-center gap-2">
     <AiFillStar size={15} />
     <span>Logo</span>
    </h4>
   </Link>
  </>
 )
}

export default HeaderLogo
