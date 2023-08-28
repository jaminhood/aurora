import HeaderLogo from "./HeaderLogo"
import Navbar from "./Navbar"

const MobileContent = () => {
 return (
  <div className="flex justify-between items-center">
   <div className="">
    <HeaderLogo />
    <Navbar />
   </div>
  </div>
 )
}

export default MobileContent
