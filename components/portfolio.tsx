// import ProjectCard from "./project-card"

// export default function Portfolio() {
//   return (
//     <section className="w-full bg-white py-16 md:py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
//           {/* Left Side - Title */}
//           <div className="flex items-center justify-center lg:justify-start">
//             <h2 className="font-['Roba_High'] font-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[79%] tracking-[-2%] text-black uppercase text-center lg:text-left">
//               THE ART
//               <br />
//               CALLED
//               <br />
//               <span style={{ color: "#C8D74B" }}>DESIGN</span>
//             </h2>
//           </div>

//           {/* Right Side - First Card */}
//           <div className="flex justify-center lg:justify-end">
//             <ProjectCard
//               title="Wedding Materials Website"
//               description="Land page design for Onyeka Fabrics"
//               imageSrc="/placeholder.svg?height=387&width=584"
//               isVideo={true}
//               videoSrc="/videos/portfolio-wedding.mp4"
//             />
//           </div>
//         </div>

//         {/* Bottom Row - Two Cards */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-16 lg:mt-24">
//           <div className="flex justify-center">
//             <ProjectCard
//               title="Edutech Website"
//               description="An engaging platform designed to make learning accessible, interactive, and personalized"
//               imageSrc="/images/edutech.png"
//             />
//           </div>

//           <div className="flex justify-center">
//             <ProjectCard
//               title="icase Dashboard"
//               description="icase was built for the Anambra State Legal System. It was later adopted by the Legal System of Enugu State."
//               imageSrc="/images/icase-dashboard.png"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


import ProjectCard from "./project-card"

export default function Portfolio() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* First Row - Title and Wedding Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
          {/* Left Side - Title */}
          <div className="flex items-center justify-center md:justify-start">
            <h2 className="font-['Roba_High'] font-black text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[79%] tracking-[-2%] text-black uppercase text-center md:text-left">
              THE ART
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
            <h3 className="font-['Roba_High'] font-black text-[32px] sm:text-[48px] md:text-[64px] lg:text-[80px] leading-[79%] tracking-[-2%] text-black uppercase text-center md:text-left">
              DESIGN IS
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
      </div>
    </section>
  )
}
