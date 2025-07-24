import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full pt-25 bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Text */}
        <div className="text-center mb-8">
          <h1 className="mb-6">
            <span className="block font-['Roba_Low'] font-black text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[80%] tracking-[-2%] text-black uppercase">
              WE <span className="font-extralight">DESIGN</span>
            </span>
            <span className="block font-['Roba_Low'] font-black text-[60px] sm:text-[80px] md:text-[100px] lg:text-[120px] leading-[80%] tracking-[-2%] text-black uppercase">
              YOU <span style={{ color: "#C8D74B" }}>SMILE</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-600 text-xl font-jakarta font-light md:text-base max-w-lg mx-auto leading-relaxed mb-8" style={{ color: "#717171", letterSpacing: "-0.06em" }}>
            We help forward-thinking businesses stand out with purposeful design, smart strategy, and stellar creative
            that gets results.
          </p>

          {/* Mobile Contact Button - Only visible on mobile */}
          <div className="md:hidden mb-8">
            <Button
              asChild
              className="font-['Roba_Low'] font-semibold bg-black hover:bg-gray-800 text-white px-6 py-3 text-base leading-[116%] tracking-[0%] transition-colors duration-200"
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
        </div>

        {/* Video/Showcase Section */}
        <div className="mt-16 md:mt-24">
          <div className="flex justify-center">
            <div
              className="relative bg-gray-100 rounded-lg overflow-hidden shadow-lg"
              style={{
                width: "min(802px, calc(100vw - 32px))",
                height: "min(539.49px, calc((100vw - 32px) * 0.673))",
                padding: "14px 12px",
                gap: "6.22px",
                opacity: 1,
              }}
            >
              <video
                className="w-full h-full object-cover rounded"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
                // poster="/video-poster.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                {/* <source src="/videos/hero-video.webm" type="video/webm" /> */}
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
