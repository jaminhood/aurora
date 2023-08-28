"use client"

import BlogCard from "@/components/blog-card"
import Button from "@/components/shared/Button"
import Container from "@/components/shared/Container"

export default function Blog() {
 const clicked = () => {}

 return (
  <main className="min-h-screen py-24">
   <Container>
    <h1 className="text-4xl text-center font-bold">Blog</h1>
    <div className="p-12">
     {[1, 2, 3, 4].map((data) => (
      <BlogCard key={data} />
     ))}
    </div>
    <div className="flex justify-center items-center">
     <Button isBlock={false} isOutline={true} handleClick={clicked}>
      <span>Load more 100+</span>
     </Button>
    </div>
   </Container>
  </main>
 )
}
