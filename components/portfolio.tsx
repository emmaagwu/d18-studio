import ProjectCard from "./project-card"
import Image from "next/image"

export default function Portfolio() {
  return (
    <section id='work' className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">

        {/* Mobile Layout - Single Column */}
        <div className="block md:hidden space-y-8">
          {/* 1. Title */}
          <div className="flex items-center justify-center">
            <h2 className="font-['Roba_Low'] font-black text-[48px] sm:text-[64px] leading-[79%] tracking-[-2%] text-black uppercase text-center">
              THE <span className="font-extralight"> ART </span>
              <br />
              CALLED
              <br />
              <span style={{ color: "#C8D74B" }}>DESIGN</span>
            </h2>
          </div>

          {/* 2. Wedding Materials Website */}
          <div className="flex justify-center">
            <ProjectCard
              title="Wedding Materials Website"
              description="Land page design for Onyeka Fabrics"
              imageSrc="/placeholder.svg?height=387&width=584"
              isVideo={true}
              videoSrc="/videos/portfolio-wedding.mp4"
            />
          </div>

          {/* 3. Edutech Website */}
          <div className="flex justify-center">
            <ProjectCard
              title="Edutech Website"
              description="An engaging platform designed to make learning accessible, interactive, and personalized"
              imageSrc="/images/edutech.png"
            />
          </div>

          {/* 4. Community Website */}
          <div className="flex justify-center">
            <ProjectCard
              title="Community Website"
              description="Website design for Community group where users find people of like passion."
              imageSrc="/images/community-site.png"
            />
          </div>

          {/* 5. SPGSL Dashboard */}
          <div className="flex justify-center">
            <ProjectCard
              title="SPGSL Dashboard"
              description="An engaging platform designed to make learning accessible, interactive, and personalized"
              imageSrc="/images/spgsl-dashboard.png"
            />
          </div>

          {/* 6. Design Title */}
          <div className="flex items-center justify-center py-4">
            <h3 className="font-['Roba_Low'] font-black text-[32px] sm:text-[48px] leading-[79%] tracking-[-2%] text-black uppercase text-center">
              <span className="font-light"> DESIGN </span> IS
              <br />
              THINKING
              <br />
              MADE
              <br />
              <span style={{ color: "#C8D74B" }}>VISUAL</span>
            </h3>
          </div>

          {/* 7. Web3 Site */}
          <div className="flex justify-center">
            <ProjectCard
              title="Web3 Site"
              description="Web3 website design focused on IoT, and Smart Contract."
              imageSrc="/placeholder.svg?height=387&width=584"
              isVideo={true}
              videoSrc="/videos/web3-site.mp4"
            />
          </div>

          {/* 8. Starkids Website */}
          <div className="flex justify-center">
            <ProjectCard
              title="Starkids Website"
              description="An engaging platform designed to make learning fun for kids of differing age brackets."
              imageSrc="/images/starkids-website.png"
            />
          </div>

          {/* 9. icase Dashboard */}
          <div className="flex justify-center">
            <ProjectCard
              title="icase Dashboard"
              description="icase was built for the Anambra State Legal System. It was later adopted by the Legal System of Enugu State."
              imageSrc="/images/icase-dashboard.png"
            />
          </div>

          {/* 10. First Image Card - 4 images */}
          <div className="w-full">
            <div className="bg-[#EDEDED] p-4 shadow-sm">
              <div className="flex gap-2 justify-center">
                {/* p1.png */}
                <div className="flex-1 max-w-[100px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p1.png"
                    alt="Savor The Spinning Satire"
                    width={100}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p2.png */}
                <div className="flex-1 max-w-[100px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p2.png"
                    alt="Thinkers From Around The Globe"
                    width={100}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p3.png */}
                <div className="flex-1 max-w-[100px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p3.png"
                    alt="Scan, Engage & Win"
                    width={100}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p4.png */}
                <div className="w-[20px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p4.png"
                    alt="Mobile Engagement App"
                    width={20}
                    height={200}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* 11. Second Image Card - 2 images */}
          <div className="w-full">
            <div className="bg-[#EDEDED] p-4 shadow-sm">
              <div className="flex gap-4 justify-center">
                {/* p5.png */}
                <div className="flex-1 max-w-[140px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p5.png"
                    alt="Payment Gateway Platform"
                    width={160}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p6.png */}
                <div className="flex-1 max-w-[140px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p6.png"
                    alt="Audience Building Platform"
                    width={160}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* First Row - Title and Wedding Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
            {/* Left Side - Title */}
            <div className="flex items-center justify-center md:justify-start">
              <h2 className="font-['Roba_Low'] font-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[79%] tracking-[-2%] text-black uppercase text-center md:text-left">
              THE <span className="font-extralight"> ART </span>
                <br />
                CALLED
                <br />
                <span style={{ color: "#C8D74B" }}>DESIGN</span>
              </h2>
            </div>

            {/* Right Side - First Card */}
            <div className="flex justify-center md:justify-end">
              <ProjectCard
                title="Wedding Materials Website"
                description="Land page design for Onyeka Fabrics"
                imageSrc="/placeholder.svg?height=387&width=584"
                isVideo={true}
                videoSrc="/videos/portfolio-wedding.mp4"
              />
            </div>
          </div>

          {/* Second Row - Edutech and icase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
            <div className="flex justify-center">
              <ProjectCard
                title="Edutech Website"
                description="An engaging platform designed to make learning accessible, interactive, and personalized"
                imageSrc="/images/edutech.png"
              />
            </div>

            <div className="flex justify-center">
              <ProjectCard
                title="icase Dashboard"
                description="icase was built for the Anambra State Legal System. It was later adopted by the Legal System of Enugu State."
                imageSrc="/images/icase-dashboard.png"
              />
            </div>
          </div>

          {/* Third Row - Design Text and Community Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16 items-end">
            {/* Left Side - Design Text (aligned to bottom left) */}
            <div className="flex items-end justify-center md:justify-start h-full min-h-[400px] md:min-h-[500px]">
              <h3 className="font-['Roba_Low'] font-black text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[79%] tracking-[-2%] text-black uppercase text-center md:text-left">
              <span className="font-light"> DESIGN </span> IS
                <br />
                THINKING
                <br />
                MADE
                <br />
                <span style={{ color: "#C8D74B" }}>VISUAL</span>
              </h3>
            </div>

            {/* Right Side - Community Card */}
            <div className="flex justify-center md:justify-end">
              <ProjectCard
                title="Community Website"
                description="Website design for Community group where users find people of like passion."
                imageSrc="/images/community-site.png"
              />
            </div>
          </div>

          {/* Fourth Row - Web3 Video and SPGSL Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
            <div className="flex justify-center">
              <ProjectCard
                title="Web3 Site"
                description="Web3 website design focused on IoT, and Smart Contract."
                imageSrc="/placeholder.svg?height=387&width=584"
                isVideo={true}
                videoSrc="/videos/web3-site.mp4"
              />
            </div>

            <div className="flex justify-center">
              <ProjectCard
                title="SPGSL Dashboard"
                description="An engaging platform designed to make learning accessible, interactive, and personalized"
                imageSrc="/images/spgsl-dashboard.png"
              />
            </div>
          </div>

          {/* Fifth Row - Empty Left, Starkids Card Right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-12 md:mt-16">
            {/* Left Side - Empty */}
            <div className="hidden md:block"></div>

            {/* Right Side - Starkids Card */}
            <div className="flex justify-center md:justify-end">
              <ProjectCard
                title="Starkids Website"
                description="An engaging platform designed to make learning fun for kids of differing age brackets."
                imageSrc="/images/starkids-website.png"
              />
            </div>
          </div>

          {/* Single Card with Images - Desktop Only */}
          <div className="mt-12 md:mt-16">
            <div className="bg-[#EDEDED] p-6 shadow-sm">
              <div className="flex gap-6 justify-center">
                {/* p1.png */}
                <div className="w-[200px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p1.png"
                    alt="Savor The Spinning Satire"
                    width={200}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p2.png */}
                <div className="w-[200px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p2.png"
                    alt="Thinkers From Around The Globe"
                    width={200}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p3.png */}
                <div className="w-[200px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p3.png"
                    alt="Scan, Engage & Win"
                    width={200}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p4.png */}
                <div className="w-[40px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p4.png"
                    alt="Mobile Engagement App"
                    width={40}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p5.png */}
                <div className="w-[160px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p5.png"
                    alt="Payment Gateway Platform"
                    width={160}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* p6.png */}
                <div className="w-[160px] overflow-hidden shadow-sm">
                  <Image
                    src="/images/p6.png"
                    alt="Audience Building Platform"
                    width={160}
                    height={400}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}