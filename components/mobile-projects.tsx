// "use client"

// import MobileProjectCard from "./mobile-project-card"
// import MobileAppCard from "./mobile-app-card"

// export default function MobileProjects() {
//   const mobileApps = [
//     {
//       title: "Coffee Delivery App",
//       description:
//         "A clean coffee app that allows users find Cafes, customise orders, and skip the wait. Designed for speed, warmth and daily use.",
//       imageSrc: "/images/mobile2.png",
//     },
//     {
//       title: "Homeman Decor App",
//       description: "An app where users can hire artisans of all kinds for home delivery services.",
//       imageSrc: "/images/mobile3.png",
//     },
//     {
//       title: "Unity Bank Scan and Win",
//       description:
//         "A scan and win app designed to reward users that allows users to win amazing prizes while performing tasks.",
//       imageSrc: "/images/mobile4.png",
//     },
//     {
//       title: "Furniture Store App",
//       description:
//         "An e-commerce platform for furniture shopping with AR visualization and preferred delivery options.",
//       imageSrc: "/images/mobile5.png",
//     },
//   ]

//   return (
//     <section className="w-full bg-white py-16 md:py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Large and Medium Screens Layout - 4 Column Grid */}
//         <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 items-start">
//           {/* Column 1 - Text */}
//           <div className="flex flex-col justify-start">
//             <h2 className="font-['RobaV0.5_Low_TRIAL'] text-[48px] lg:text-[64px] xl:text-[80px] 2xl:text-[96px] leading-[80%] tracking-[-2%] text-black uppercase">
//               <span className="font-light">MOBILE</span>
//               <br />
//               <span className="font-black">ISN&apos;T A</span>
//               <br />
//               <span className="font-black">DEVICE,</span>
//               <br />
//               <span className="font-black">IT&apos;S A</span>
//               <br />
//               <span className="font-black" style={{ color: "#C8D74B" }}>
//                 LIFESTYLE
//               </span>
//             </h2>
//           </div>

//           {/* Column 2 - Card 1 (Video) */}
//           <div className="flex justify-center">
//             <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-1.mp4" alt="E-commerce mobile app" />
//           </div>

//           {/* Column 3 - Card 2 (Image) */}
//           <div className="flex justify-center">
//             <MobileProjectCard imageSrc="/images/mobile1.png" alt="Financial mobile app" />
//           </div>

//           {/* Column 4 - Card 3 (Video) */}
//           <div className="flex justify-center">
//             <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-3.mp4" alt="Banking mobile app" />
//           </div>
//         </div>

//         {/* Small Screens Layout - 2x2 Grid */}
//         <div className="md:hidden grid grid-cols-2 gap-4">
//           {/* First Row, First Column - Text */}
//           <div className="flex flex-col justify-start">
//             <h2 className="font-['RobaV0.5_Low_TRIAL'] text-[24px] sm:text-[32px] leading-[80%] tracking-[-2%] text-black uppercase">
//               <span className="font-light">MOBILE</span>
//               <br />
//               <span className="font-black">ISN&apos;T A</span>
//               <br />
//               <span className="font-black">DEVICE,</span>
//               <br />
//               <span className="font-black">IT&apos;S A</span>
//               <br />
//               <span className="font-black" style={{ color: "#C8D74B" }}>
//                 LIFESTYLE
//               </span>
//             </h2>
//           </div>

//           {/* First Row, Second Column - Card 1 (Video) */}
//           <div className="flex justify-center">
//             <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-1.mp4" alt="E-commerce mobile app" />
//           </div>

//           {/* Second Row, First Column - Card 2 (Image) */}
//           <div className="flex justify-center">
//             <MobileProjectCard imageSrc="/images/mobile1.png" alt="Financial mobile app" />
//           </div>

//           {/* Second Row, Second Column - Card 3 (Video) */}
//           <div className="flex justify-center">
//             <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-3.mp4" alt="Banking mobile app" />
//           </div>
//         </div>

//         {/* New Mobile App Cards Section */}
//         <div className="mt-16 md:mt-24 lg:mt-32">
//           {/* Large and Medium Screens - 2x2 Grid */}
//           <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
//             {mobileApps.map((app, index) => (
//               <div key={index} className="flex justify-center">
//                 <MobileAppCard title={app.title} description={app.description} imageSrc={app.imageSrc} />
//               </div>
//             ))}
//           </div>

//           {/* Mobile Screens - Horizontal Scroll */}
//           <div className="md:hidden">
//             <div
//               className="flex gap-4 overflow-x-auto pb-4 px-2"
//               style={{
//                 scrollbarWidth: "none",
//                 msOverflowStyle: "none",
//                 WebkitOverflowScrolling: "touch",
//               }}
//             >
//               {mobileApps.map((app, index) => (
//                 <div key={index} className="flex-none w-[280px] sm:w-[320px]">
//                   <MobileAppCard title={app.title} description={app.description} imageSrc={app.imageSrc} />
//                 </div>
//               ))}
//             </div>
//           </div>

//           <style jsx>{`
//             .overflow-x-auto::-webkit-scrollbar {
//               display: none;
//             }
//             .overflow-x-auto {
//               -ms-overflow-style: none;
//               scrollbar-width: none;
//             }
//           `}</style>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import MobileProjectCard from "./mobile-project-card"
import MobileAppCard from "./mobile-app-card"

export default function MobileProjects() {
  const mobileApps = [
    {
      title: "Coffee Delivery App",
      description:
        "A clean coffee app that allows users find Cafes, customise orders, and skip the wait. Designed for speed, warmth and daily use.",
      imageSrc: "/images/mobile2.png",
    },
    {
      title: "Homeman Decor App",
      description: "An app where users can hire artisans of all kinds for home delivery services.",
      imageSrc: "/images/mobile3.png",
    },
    {
      title: "Unity Bank Scan and Win",
      description:
        "A scan and win app designed to reward users that allows users to win amazing prizes while performing tasks.",
      imageSrc: "/images/mobile4.png",
    },
    {
      title: "Furniture Store App",
      description:
        "An e-commerce platform for furniture shopping with AR visualization and preferred delivery options.",
      imageSrc: "/images/mobile5.png",
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quote Text - Only visible on large screens */}
        <div className="hidden lg:block mb-16 xl:mb-20">
          <p className="font-['Plus_Jakarta_Sans'] font-medium italic text-[48px] leading-[107%] tracking-[-2%] text-center text-black">
          &quot;Design is the silent ambassador of your brand.&quot;
          </p>
        </div>

        {/* Large and Medium Screens Layout - 4 Column Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 items-start">
          {/* Column 1 - Text */}
          <div className="flex flex-col justify-start max-w-[300px]">
            <h2 className="font-['RobaV0.5_Low_TRIAL'] text-[48px] lg:text-[54px] xl:text-[64px] leading-[80%] tracking-[-2%] text-black uppercase">
              <span className="font-light">MOBILE</span>
              <br />
              <span className="font-black">ISN&apos;T A</span>
              <br />
              <span className="font-black">DEVICE,</span>
              <br />
              <span className="font-black">IT&apos;S A</span>
              <br />
              <span className="font-black" style={{ color: "#C8D74B" }}>
                LIFESTYLE
              </span>
            </h2>
          </div>

          {/* Column 2 - Card 1 (Video) */}
          <div className="flex justify-center">
            <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-1.mp4" alt="E-commerce mobile app" />
          </div>

          {/* Column 3 - Card 2 (Image) */}
          <div className="flex justify-center">
            <MobileProjectCard imageSrc="/images/mobile1.png" alt="Financial mobile app" />
          </div>

          {/* Column 4 - Card 3 (Video) */}
          <div className="flex justify-center">
            <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-3.mp4" alt="Banking mobile app" />
          </div>
        </div>

        {/* Mobile Layout - Single Column */}
        <div className="md:hidden flex flex-col gap-8">
          {/* Mobile Text */}
          <div className="flex justify-center">
            <div className="max-w-[300px]">
              <h2 className="font-['RobaV0.5_Low_TRIAL'] text-[24px] sm:text-[32px] leading-[80%] tracking-[-2%] text-black uppercase text-center">
                <span className="font-light">MOBILE</span>
                <br />
                <span className="font-black">ISN&apos;T A</span>
                <br />
                <span className="font-black">DEVICE,</span>
                <br />
                <span className="font-black">IT&apos;S A</span>
                <br />
                <span className="font-black" style={{ color: "#C8D74B" }}>
                  LIFESTYLE
                </span>
              </h2>
            </div>
          </div>

          {/* Mobile Cards - Single Column */}
          <div className="flex justify-center">
            <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-1.mp4" alt="E-commerce mobile app" />
          </div>

          <div className="flex justify-center">
            <MobileProjectCard imageSrc="/images/mobile1.png" alt="Financial mobile app" />
          </div>

          <div className="flex justify-center">
            <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-3.mp4" alt="Banking mobile app" />
          </div>

          {/* Mobile App Cards - Single Column */}
          {mobileApps.map((app, index) => (
            <div key={index} className="flex justify-center">
              <MobileAppCard title={app.title} description={app.description} imageSrc={app.imageSrc} />
            </div>
          ))}
        </div>

        {/* New Mobile App Cards Section - Only for desktop */}
        <div className="hidden md:block mt-16 md:mt-24 lg:mt-32">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {mobileApps.map((app, index) => (
              <div key={index} className="flex justify-center">
                <MobileAppCard title={app.title} description={app.description} imageSrc={app.imageSrc} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
