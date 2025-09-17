import Hero from "@/components/Hero/Hero";
import Header from "@/components/Header/Header";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import Footer from "@/components/Footer/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
    </main>
  )
}