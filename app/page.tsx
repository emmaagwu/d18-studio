import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import MobileProjects from "@/components/mobile-projects"
import Branding from "@/components/branding"
import Services from "@/components/services"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <MobileProjects />
      <Branding />
      <Services />
      <Footer />
    </div>
  )
}
