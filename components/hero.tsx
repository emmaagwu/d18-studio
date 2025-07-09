export default function Hero() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
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
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            We help forward-thinking businesses stand out with purposeful design, smart strategy, and stellar creative
            that gets results.
          </p>
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
                poster="/video-poster.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
                <source src="/videos/hero-video.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
