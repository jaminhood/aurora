import HeaderLogo from "./HeaderLogo"
import Navbar from "./Navbar"

const DesktopContent = () => {
 return (
  <div className="flex justify-between items-center">
   <div className="flex gap-4 items-center">
    <HeaderLogo />
    <Navbar />
   </div>
  </div>
 )
}

export default DesktopContent
