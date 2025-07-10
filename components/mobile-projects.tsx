// import MobileProjectCard from "./mobile-project-card"

// export default function MobileProjects() {
//   return (
//     <section className="w-full bg-white py-16 md:py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Large and Medium Screens Layout - 4 Column Grid */}
//         <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 items-start relative">
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
//       </div>
//     </section>
//   )
// }


import MobileProjectCard from "./mobile-project-card"

export default function MobileProjects() {
  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Large and Medium Screens Layout - 4 Column Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-4 lg:gap-6 items-start">
          {/* Column 1 - Text */}
          <div className="flex flex-col justify-start overflow-hidden">
            <h2 className="font-['RobaV0.5_Low_TRIAL'] text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] leading-[75%] tracking-[-2%] text-black uppercase break-words">
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

        {/* Small Screens Layout - 2x2 Grid */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {/* First Row, First Column - Text */}
          <div className="flex flex-col justify-start pr-2">
            <h2 className="font-['RobaV0.5_Low_TRIAL'] text-[20px] sm:text-[24px] leading-[70%] tracking-[-2%] text-black uppercase break-words">
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

          {/* First Row, Second Column - Card 1 (Video) */}
          <div className="flex justify-center">
            <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-1.mp4" alt="E-commerce mobile app" />
          </div>

          {/* Second Row, First Column - Card 2 (Image) */}
          <div className="flex justify-center">
            <MobileProjectCard imageSrc="/images/mobile1.png" alt="Financial mobile app" />
          </div>

          {/* Second Row, Second Column - Card 3 (Video) */}
          <div className="flex justify-center">
            <MobileProjectCard isVideo={true} videoSrc="/videos/mobile-app-3.mp4" alt="Banking mobile app" />
          </div>
        </div>
      </div>
    </section>
  )
}