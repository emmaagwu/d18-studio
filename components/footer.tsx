import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: "#E8F4FD" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start mb-12 lg:mb-16">
          {/* Left Side - Main Heading and Subtext */}
          <div>
            <h2 className="font-['RobaV0.5_Low_TRIAL'] font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-[85%] tracking-[-2%] text-black uppercase mb-4 lg:mb-6">
              WORK WITH US
            </h2>
            <p className="font-['RobaV0.5_Low_TRIAL'] font-medium text-[24px] sm:text-[28px] lg:text-[36px] leading-[85%] tracking-[-2%] text-[#808080]">
              Let&apos;s build something amazing!
            </p>
          </div>

          {/* Right Side - Contact Information */}
          <div className="flex flex-col items-start lg:items-end space-y-3 lg:space-y-4">
            <a
              href="mailto:D18studio@gmail.com"
              className="font-['RobaV0.5_Low_TRIAL'] font-semibold text-[18px] sm:text-[20px] lg:text-[24px] leading-[85%] tracking-[-2%] text-black hover:text-gray-600 transition-colors duration-200"
            >
              D18studio@gmail.com
            </a>
            <a
              href="tel:+2348166918230"
              className="font-['RobaV0.5_Low_TRIAL'] font-semibold text-[18px] sm:text-[20px] lg:text-[24px] leading-[85%] tracking-[-2%] text-black hover:text-gray-600 transition-colors duration-200"
            >
              +2348 166 918 230
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 lg:pt-12 border-t border-gray-200">
          {/* Social Media Icons */}
          <div className="flex items-center space-x-4 mb-4 sm:mb-0">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="font-['RobaV0.5_Low_TRIAL'] font-normal text-[18px] sm:text-[20px] lg:text-[24px] leading-[85%] tracking-[-2%] text-black">
            ©D18Studio2025
          </p>
        </div>
      </div>
    </footer>
  )
}
