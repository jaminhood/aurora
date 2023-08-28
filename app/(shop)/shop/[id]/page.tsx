"use client"

import placeholder from "@/assets/placeholder.jpg"
import Button from "@/components/shared/Button"
import Container from "@/components/shared/Container"
import { productPageTypes } from "@/types/product"
import Image from "next/image"
import Link from "next/link"
import { HiShoppingCart } from "react-icons/hi"

export default function Product(props: productPageTypes) {
 const clicked = () => {}

 return (
  <main className="min-h-screen py-24">
   <Container>
    <div className="grid grid-cols-2 gap-8 py-4">
     <div className="overflow-hidden rounded-3xl">
      <Image src={placeholder} className="w-full object-cover" alt="" />
     </div>
     <div>
      <h1 className="text-3xl font-bold">Product {props.params.id}.</h1>
      <div className="flex gap-4 items-center">
       <Link href="/checkout">
        <Button isBlock={false} isOutline={false} handleClick={clicked}>
         <span>Order Now.</span>
        </Button>
       </Link>
       <Button isBlock={false} isOutline={true} handleClick={clicked}>
        <span>
         <HiShoppingCart size={20} />
        </span>
        <span>Add To Cart.</span>
       </Button>
      </div>
     </div>
    </div>
   </Container>
  </main>
 )
}
