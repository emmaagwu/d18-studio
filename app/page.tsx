import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import MobileProjects from "@/components/mobile-projects"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <MobileProjects />
      {/* <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      </main> */}
    </div>
  )
}
