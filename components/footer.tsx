import { Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: "#E8F4FD" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Main Heading */}
          <h2
                className="font-['RobaV0.5_Low_TRIAL'] font-bold text-[48px] lg:text-[64px] uppercase mb-4"
                style={{
                  lineHeight: "85%",
                  letterSpacing: "-2%",
                  color: "#000000",
                }}
              >
                WORK WITH US
              </h2>
          <div className="flex flex-col">
            {/* Left Side - Main Content */}
            <div className="flex justify-between">

              {/* Subtext */}
              <p
                className="font-['RobaV0.5_Low_TRIAL'] font-medium text-[28px] lg:text-[36px] mb-12 lg:mb-16"
                style={{
                  lineHeight: "85%",
                  letterSpacing: "-2%",
                  color: "#808080",
                }}
              >
                Let&apos;s build something amazing!
              </p>
              <div className="flex flex-col space-y-4">
                {/* Email */}
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-black" />
                  <a
                    href="mailto:D18studioo@gmail.com"
                    className="font-['RobaV0.5_Low_TRIAL'] font-semibold text-[20px] lg:text-[24px] text-black hover:text-gray-600 transition-colors duration-200"
                    style={{
                      lineHeight: "85%",
                      letterSpacing: "-2%",
                    }}
                  >
                    D18studioo@gmail.com
                  </a>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5 text-black" />
                  <a
                    href="tel:+2348166918230"
                    className="font-['RobaV0.5_Low_TRIAL'] font-semibold text-[20px] lg:text-[24px] text-black hover:text-gray-600 transition-colors duration-200"
                    style={{
                      lineHeight: "85%",
                      letterSpacing: "-2%",
                    }}
                  >
                    +2348 166 918 230
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-20 flex justify-between">
               {/* Social Media Icons */}
              <div className="flex items-end space-x-4">
                <a
                  href="#"
                  className="w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
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
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>

              {/* Copyright - Aligned with social icons */}
              <div className="mt-12 lg:mt-16">
                <div className="flex items-center  pr-26">
                  <span className="text-black text-[20px] lg:text-[24px]">©</span>
                  <p
                    className="font-['RobaV0.5_Low_TRIAL'] font-normal text-[20px] lg:text-[24px] text-black"
                    style={{
                      lineHeight: "85%",
                      letterSpacing: "-2%",
                    }}
                  >
                    D18Studio2025
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="flex flex-col px-4">
            {/* Main Heading */}
            <h2
              className="font-['RobaV0.5_Low_TRIAL'] font-bold text-[32px] sm:text-[40px] uppercase mb-3"
              style={{
                lineHeight: "85%",
                letterSpacing: "-2%",
                color: "#000000",
              }}
            >
              WORK WITH US
            </h2>

            {/* Subtext */}
            <p
              className="font-['RobaV0.5_Low_TRIAL'] font-medium text-[20px] sm:text-[24px] mb-8"
              style={{
                lineHeight: "85%",
                letterSpacing: "-2%",
                color: "#808080",
              }}
            >
              Let&apos;s build something amazing!
            </p>

            {/* Contact Information */}
            <div className="mb-8 space-y-4">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-black" />
                <a
                  href="mailto:D18studioo@gmail.com"
                  className="font-['RobaV0.5_Low_TRIAL'] font-semibold text-[18px] sm:text-[20px] text-black hover:text-gray-600 transition-colors duration-200"
                  style={{
                    lineHeight: "85%",
                    letterSpacing: "-2%",
                  }}
                >
                  D18studioo@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-black" />
                <a
                  href="tel:+2348166918230"
                  className="font-['RobaV0.5_Low_TRIAL'] font-semibold text-[18px] sm:text-[20px] text-black hover:text-gray-600 transition-colors duration-200"
                  style={{
                    lineHeight: "85%",
                    letterSpacing: "-2%",
                  }}
                >
                  +2348 166 918 230
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-start items-center space-x-4 mb-6 ml-[-10px]">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center text-black hover:text-gray-600 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
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
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="flex items-center space-x-2">
              <span className="text-black text-[18px] sm:text-[20px]">©</span>
              <p
                className="font-['RobaV0.5_Low_TRIAL'] font-normal text-[18px] sm:text-[20px] text-black"
                style={{
                  lineHeight: "85%",
                  letterSpacing: "-2%",
                }}
              >
                D18Studio2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
