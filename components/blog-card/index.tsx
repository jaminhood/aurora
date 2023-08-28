import placeholder from "@/assets/placeholder.jpg"
import Image from "next/image"
import Link from "next/link"
import { AiFillHeart } from "react-icons/ai"

const BlogCard = () => {
 return (
  <div className="grid grid-cols-3 items-center my-4">
   <div className="col-span-1 overflow-hidden rounded-xl">
    <Image src={placeholder} className="w-full object-cover" alt="" />
   </div>
   <div className="col-span-2 px-12">
    <h3 className="font-semibold text-xl mb-4">
     There are many reasons to get down
    </h3>
    <p className="text-base">
     Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea porro placeat
     aspernatur minus ex sit iusto ducimus perspiciatis magnam in sunt suscipit
     assumenda obcaecati quibusdam aperiam, impedit deserunt consequuntur.
     Sapiente temporibus animi esse nulla accusantium ex fugiat quo assumenda?
     Ipsum aperiam ducimus pariatur natus soluta labore perferendis fugiat eos
     reiciendis!
    </p>
    <div className="mt-8 flex justify-between items-center">
     <p className="text-base opacity-50 flex items-center gap-2">
      <AiFillHeart size={20} />
      <span>10 Oct 21, by Jane Ostin</span>
     </p>
     <p className="text-sm uppercase font-normal">
      <Link href="/blog/01">Read More</Link>
     </p>
    </div>
   </div>
  </div>
 )
}

export default BlogCard
