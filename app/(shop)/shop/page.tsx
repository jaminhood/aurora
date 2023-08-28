import ProductCard from "@/components/product-card"
import Container from "@/components/shared/Container"

export default function Shop() {
 return (
  <main className="min-h-screen py-24">
   <Container>
    <h3 className="text-xl font-bold">Products.</h3>
    <div className="grid grid-cols-4 gap-8 py-4">
     {[1, 2, 3, 4].map((data) => (
      <ProductCard key={data} />
     ))}
    </div>
   </Container>
  </main>
 )
}
