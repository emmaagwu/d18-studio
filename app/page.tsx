import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to D18 Studio</h1>
          <p className="text-lg text-gray-600">Your product design company navigation is ready!</p>
          <div style={{ fontFamily: 'Roba Low', fontWeight: 600 }}>
  Your text here
</div>
<div className="font-['Roba_Low'] font-semibold">
  Your second text here
</div>
        </div>
      </main>
    </div>
  )
}
