import Container from "../shared/Container"
import DesktopContent from "./DesktopContent"
import HeaderContent from "./HeaderContent"
import MobileContent from "./MobileContent"

const Header = () => {
 return (
  <header className="fixed w-full top-0 z-50 h-20 flex items-center border-b border-gray-300 bg-white shadow-md">
   <Container>
    <HeaderContent desktop={<DesktopContent />} mobile={<MobileContent />} />
   </Container>
  </header>
 )
}

export default Header
