import Image from "next/image"

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: "#C8D74B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Images Grid */}
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:max-w-none">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/about1.png"
                    alt="Workspace with green wall and flowers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image src="/images/about3.png" alt="Laptop on wooden desk" fill className="object-cover" />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image src="/images/about2.png" alt="Creative workspace setup" fill className="object-cover" />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src="/images/about4.png"
                    alt="Office desk with laptop and flowers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            {/* About Us Heading */}
            <h2 className="font-['Roba_High'] font-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[79%] tracking-[-2%] text-black uppercase mb-8">
              ABOUT US
            </h2>

            {/* Description Text */}
            <div className="mb-12">
              <p className="text-black text-base md:text-lg leading-relaxed mb-4">
                We are a team of creatives and builders focused on creating measurable value by delivering functional
                and efficient products that helps puts money in your pocket while enjoying what we know how to do best.
              </p>
              <p className="text-black text-base md:text-lg leading-relaxed">
                We're not here just to make money from you. We're here to make money with you. You're more than a
                client. You're a collaborator!
              </p>
            </div>

            {/* Statistics Blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#FFF2DA" }}>
                <div className="text-3xl md:text-4xl font-black text-black mb-2">5+</div>
                <div className="text-sm md:text-base text-black font-medium">Years of Experience</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#F7FFCA" }}>
                <div className="text-3xl md:text-4xl font-black text-black mb-2">6+</div>
                <div className="text-sm md:text-base text-black font-medium">Team Size</div>
              </div>
              <div className="text-center p-6 rounded-lg" style={{ backgroundColor: "#E2FFE2" }}>
                <div className="text-3xl md:text-4xl font-black text-black mb-2">50+</div>
                <div className="text-sm md:text-base text-black font-medium">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
