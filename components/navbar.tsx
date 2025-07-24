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
      <nav className="w-full bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-40">
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
                 <Link
                  href="https://wa.me/2347039416665?text=Hello%20D18%20Studio!%20I'm%20interested%20in%20learning%20more%20about%20your%20web%20design%20services.%20Could%20you%20please%20provide%20me%20with%20more%20information%20about%20your%20offerings%20and%20how%20we%20can%20work%20together?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CONTACT US
                </Link>
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
      <div
        className={`fixed inset-0 z-50 md:hidden transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ height: '100vh'}}
      >
        <div className="flex flex-col h-full">
          {/* Top Section - Navigation with Green Background */}
          <div className="flex-1" style={{ backgroundColor: "#C8D74B" }}>
            {/* Header with Logo and Close Button */}
            <div className="flex items-start justify-between p-6">
              {/* Navigation Items */}
              <div className="flex flex-col justify-start pt-5 px-6">
                <div className="space-y-6">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block font-['Roba_Low'] font-semibold text-lg leading-[116%] tracking-[0%] text-black hover:text-gray-600 transition-all duration-200 transform ${
                        isMobileMenuOpen
                          ? 'translate-x-0 opacity-100'
                          : 'translate-x-8 opacity-0'
                      }`}
                      style={{
                        transitionDelay: isMobileMenuOpen ? `${index * 100 + 200}ms` : '0ms'
                      }}
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
                className={`text-black hover:text-gray-600 transition-all duration-200 transform ${
                  isMobileMenuOpen
                    ? 'rotate-0 opacity-100'
                    : 'rotate-90 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '100ms' : '0ms'
                }}
              >
                <X className="h-6 w-6 border-2 border-black/50 rounded-sm" />
              </Button>
            </div>
          </div>

          {/* Bottom Section - Mobile Footer with White Background */}
          <div className="bg-white px-6 pb-8 pt-6">
            <div className="flex flex-col">
              {/* Main Heading */}
              <h2
                className={`font-['RobaV0.5_Low_TRIAL'] font-bold text-[32px] sm:text-[40px] uppercase mb-3 transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  lineHeight: "85%",
                  letterSpacing: "-2%",
                  color: "#000000",
                  transitionDelay: isMobileMenuOpen ? '400ms' : '0ms'
                }}
              >
                WORK WITH US
              </h2>

              {/* Subtext */}
              <p
                className={`font-['RobaV0.5_Low_TRIAL'] font-medium text-[20px] sm:text-[24px] mb-8 transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  lineHeight: "85%",
                  letterSpacing: "-2%",
                  color: "#808080",
                  transitionDelay: isMobileMenuOpen ? '500ms' : '0ms'
                }}
              >
                Let&apos;s build something amazing!
              </p>

              {/* Contact Information */}
              <div className="mb-8 space-y-4">
                {/* Email */}
                <div className={`flex items-center space-x-3 transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '600ms' : '0ms'
                }}>
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
                <div className={`flex items-center space-x-3 transition-all duration-300 transform ${
                  isMobileMenuOpen
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? '700ms' : '0ms'
                }}>
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
              <div className={`flex justify-start items-center space-x-4 mb-6 ml-[-10px] transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? '800ms' : '0ms'
              }}>
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
              <div className={`flex items-center space-x-2 transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? '900ms' : '0ms'
              }}>
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
      </div>

      {/* Backdrop overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}