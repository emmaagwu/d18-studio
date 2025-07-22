import Image from "next/image"

export default function About() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: "#C8D74B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* About Us Heading - Top Row, Left Aligned */}
          <h2 className="font-['Roba_High'] font-black text-[80px] lg:text-[96px] leading-[79%] tracking-[-2%] text-black uppercase mb-12 lg:mb-16">
            ABOUT US
          </h2>

          {/* Main Content Row */}
          <div className="grid grid-cols-2 gap-16">
            {/* Left Side - 4 Images in Horizontal Row */}
            <div className="w-full">
              <div className="flex gap-4">
                {/* Image 1 - Stepped Down */}
                <div className="flex flex-col">
                  <div className="h-16"></div>
                  <div className="relative h-80 w-32">
                    <Image
                      src="/images/about1.png"
                      alt="Workspace with green wall and flowers"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Image 2 - Normal Height */}
                <div className="relative h-80 w-32">
                  <Image src="/images/about2.png" alt="Creative workspace setup" fill className="object-cover" />
                </div>

                {/* Image 3 - Stepped Down */}
                <div className="flex flex-col">
                  <div className="h-16"></div>
                  <div className="relative h-80 w-32">
                    <Image src="/images/about3.png" alt="Laptop on wooden desk" fill className="object-cover" />
                  </div>
                </div>

                {/* Image 4 - Normal Height */}
                <div className="relative h-80 w-32">
                  <Image
                    src="/images/about4.png"
                    alt="Office desk with laptop and flowers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Text and Statistics */}
            <div className="flex flex-col justify-start">
              {/* Description Text */}
              <div className="mb-10 lg:mb-12">
                <p className="text-black font-jakarta font-normal italic tracking-tight-2 leading-[130%] text-[24px] lg:text-[28px] mb-4">
                  We are a team of creatives and builders focused on creating measurable value by delivering functional
                  and efficient products that helps put money in your pocket while enjoying what we know how to do best.
                  We&apos;re not here just to make money from you. We&apos;re here to make money with you. You&apos;re
                  more than a client. You&apos;re a collaborator!
                </p>
              </div>

              {/* Statistics Blocks */}
              <div className="grid grid-cols-3 gap-4">
                <div
                  className="text-center px-6 py-4 lg:px-10 lg:py-6 rounded-none min-h-[80px] lg:min-h-[100px] flex flex-col justify-center"
                  style={{ backgroundColor: "#FFF2DA" }}
                >
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-black mb-2">5+</div>
                  <div className="text-xs lg:text-sm xl:text-base text-black font-medium">Years of Experience</div>
                </div>
                <div
                  className="text-center px-6 py-4 lg:px-10 lg:py-6 rounded-none min-h-[80px] lg:min-h-[100px] flex flex-col justify-center"
                  style={{ backgroundColor: "#F7FFCA" }}
                >
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-black mb-2">6+</div>
                  <div className="text-xs lg:text-sm xl:text-base text-black font-medium">Team Size</div>
                </div>
                <div
                  className="text-center px-6 py-4 lg:px-10 lg:py-6 rounded-none min-h-[80px] lg:min-h-[100px] flex flex-col justify-center"
                  style={{ backgroundColor: "#E2FFE2" }}
                >
                  <div className="text-2xl lg:text-3xl xl:text-4xl font-black text-black mb-2">50+</div>
                  <div className="text-xs lg:text-sm xl:text-base text-black font-medium">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden text-center">
          {/* About Us Heading - Centered */}
          <h2 className="font-['Roba_High'] font-black text-[48px] sm:text-[64px] leading-[79%] tracking-[-2%] text-black uppercase mb-10">
            ABOUT US
          </h2>

          {/* Description Text - Centered */}
          <div className="mb-10">
            <p className="text-black font-jakarta font-normal italic tracking-tight-2 leading-[130%] text-[18px] sm:text-[20px] mb-4 text-center max-w-2xl mx-auto">
              We are a team of creatives and builders focused on creating measurable value by delivering functional
              and efficient products that helps put money in your pocket while enjoying what we know how to do best.
              We&apos;re not here just to make money from you. We&apos;re here to make money with you. You&apos;re
              more than a client. You&apos;re a collaborator!
            </p>
          </div>

          {/* Statistics Blocks */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-10 max-w-lg mx-auto">
            <div
              className="text-center px-2 py-3 sm:px-4 sm:py-4 rounded-none min-h-[60px] sm:min-h-[70px] flex flex-col justify-center"
              style={{ backgroundColor: "#FFF2DA" }}
            >
              <div className="text-lg sm:text-xl font-black text-black mb-1">5+</div>
              <div className="text-[10px] sm:text-xs text-black font-medium">Years of Experience</div>
            </div>
            <div
              className="text-center px-2 py-3 sm:px-4 sm:py-4 rounded-none min-h-[60px] sm:min-h-[70px] flex flex-col justify-center"
              style={{ backgroundColor: "#F7FFCA" }}
            >
              <div className="text-lg sm:text-xl font-black text-black mb-1">6+</div>
              <div className="text-[10px] sm:text-xs text-black font-medium">Team Size</div>
            </div>
            <div
              className="text-center px-2 py-3 sm:px-4 sm:py-4 rounded-none min-h-[60px] sm:min-h-[70px] flex flex-col justify-center"
              style={{ backgroundColor: "#E2FFE2" }}
            >
              <div className="text-lg sm:text-xl font-black text-black mb-1">50+</div>
              <div className="text-[10px] sm:text-xs text-black font-medium">Projects Completed</div>
            </div>
          </div>

          {/* Images - Same layout as desktop but scaled for mobile */}
          <div className="flex justify-center gap-2 sm:gap-3">
            {/* Image 1 - Stepped Down */}
            <div className="flex flex-col">
              <div className="h-6 sm:h-10"></div>
              <div className="relative h-32 w-16 sm:h-40 sm:w-20">
                <Image
                  src="/images/about1.png"
                  alt="Workspace with green wall and flowers"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Image 2 - Normal Height */}
            <div className="relative h-32 w-16 sm:h-40 sm:w-20">
              <Image src="/images/about2.png" alt="Creative workspace setup" fill className="object-cover" />
            </div>

            {/* Image 3 - Stepped Down */}
            <div className="flex flex-col">
              <div className="h-6 sm:h-10"></div>
              <div className="relative h-32 w-16 sm:h-40 sm:w-20">
                <Image src="/images/about3.png" alt="Laptop on wooden desk" fill className="object-cover" />
              </div>
            </div>

            {/* Image 4 - Normal Height */}
            <div className="relative h-32 w-16 sm:h-40 sm:w-20">
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
    </section>
  )
}