import { NavLinks } from "@/constants/header"
import Link from "next/link"

const Navbar = () => {
 return (
  <nav className="border-l-2 border-l-gray-300 px-4">
   <ul className="flex items-center justify-center gap-4">
    {NavLinks.map((links) => (
     <li key={links.render} className="text-sm font-semibold opacity-90">
      <Link href={links.route}>{links.render}</Link>
     </li>
    ))}
   </ul>
  </nav>
 )
}

export default Navbar
