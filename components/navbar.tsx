// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { Button } from "@/components/ui/button"
// import { Menu, X } from "lucide-react"
// import { useState } from "react"

// const navigationItems = [
//   { name: "HOME", href: "#home" },
//   { name: "ABOUT", href: "#about" },
//   { name: "OUR WORK", href: "#work" },
//   { name: "SERVICES", href: "#services" },
//   { name: "TESTIMONIALS", href: "#testimonials" },
// ]

// export default function Navbar() {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

//   return (
//     <nav className="w-full bg-white border-b border-gray-100">
//       <div className="max-w-[95%] mx-auto">
//         <div className="flex items-center justify-between h-16 gap-2">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link href="/" className="flex items-center">
//               <Image src="/D18-logo.svg" alt="D18 Studio" width={120} height={40} className="h-8 w-auto" />
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="flex items-center  space-x-20">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="font-['Roba_Low'] font-semibold text-[18px] leading-[116%] tracking-[0%] text-black hover:text-gray-600 transition-colors duration-200"
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact Button */}
//           <div className="hidden md:block">
//             <Button
//               asChild
//               className="font-['Roba_Low'] font-semibold bg-black hover:bg-gray-800 text-white px-6 py-2 text-[18px] leading-[116%] tracking-[0%] transition-colors duration-200"
//             >
//               <Link href="#contact">CONTACT US</Link>
//             </Button>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-black hover:text-gray-600"
//             >
//               {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
//               {navigationItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="block px-3 py-2 font-['Roba_Low'] font-semibold text-[18px] leading-[116%] tracking-[0%] text-black hover:text-gray-600 transition-colors duration-200"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <div className="px-3 py-2">
//                 <Button
//                   asChild
//                   className="font-robahigh font-semibold w-full bg-black hover:bg-gray-800 text-white text-[18px] leading-[116%] tracking-[0%] transition-colors duration-200"
//                 >
//                   <Link href="#contact">CONTACT US</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }



"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navigationItems = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "OUR WORK", href: "#work" },
  { name: "SERVICES", href: "#services" },
  { name: "TESTIMONIALS", href: "#testimonials" },
]

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/D18-logo.svg"
                alt="D18 Studio"
                width={120}
                height={40}
                className="h-6 w-auto sm:h-7 md:h-8"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens */}
          <div className="hidden md:flex items-center justify-center flex-1 mx-4">
            <div className="flex items-center space-x-12 xl:space-x-16 2xl:space-x-20">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-['Roba_Low'] font-semibold text-sm xl:text-base 2xl:text-[18px] leading-[116%] tracking-[0%] text-black hover:text-gray-600 transition-colors duration-200 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <Button
              asChild
              className="font-['Roba_Low'] font-semibold bg-black hover:bg-gray-800 text-white px-4 xl:px-6 py-2 text-sm xl:text-base 2xl:text-[18px] leading-[116%] tracking-[0%] transition-colors duration-200 whitespace-nowrap"
            >
              <Link href="#contact">CONTACT US</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:text-gray-600"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 font-['Roba_Low'] font-semibold text-base leading-[116%] tracking-[0%] text-black hover:text-gray-600 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="font-['Roba_Low'] font-semibold w-full bg-black hover:bg-gray-800 text-white text-base leading-[116%] tracking-[0%] transition-colors duration-200"
                >
                  <Link href="#contact">CONTACT US</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
