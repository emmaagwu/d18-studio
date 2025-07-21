"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, Facebook, Instagram, Linkedin, Mail, MessageCircle } from "lucide-react"
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
    <>
      <nav className="w-full bg-white">
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
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* Top Section - Navigation with Green Background */}
          <div className="flex-1" style={{ backgroundColor: "#C8D74B" }}>
            {/* Header with Logo and Close Button */}
            <div className="flex items-start justify-between p-6">
              {/* Navigation Items */}
            <div className="flex flex-col justify-start pt-6 px-6">
              <div className="space-y-6">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block font-['Roba_Low'] font-semibold text-lg leading-[116%] tracking-[0%] text-black hover:text-gray-600 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-black hover:text-gray-600"
              >
                <X className="h-6 w-6 border-2 border-black" />
              </Button>
            </div>
          </div>

          {/* Bottom Section - Mobile Footer with White Background */}
          <div className="bg-white px-6 pb-8 pt-6">
              <div className="flex flex-col">
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
      )}
    </>
  )
}