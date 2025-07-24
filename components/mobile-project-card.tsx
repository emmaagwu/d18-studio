// import Image from "next/image"

// interface MobileProjectCardProps {
//   imageSrc?: string
//   videoSrc?: string
//   isVideo?: boolean
//   alt?: string
//   variant?: "padded" | "flush"
// }

// export default function MobileProjectCard({
//   imageSrc,
//   videoSrc,
//   isVideo = false,
//   alt = "Mobile project",
//   variant = "padded",
// }: MobileProjectCardProps) {
//   if (isVideo && videoSrc) {
//     return (
//       <div
//         className={`w-full max-w-[300px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#EDEDED] ${
//           variant === "padded" ? "py-6 px-2" : ""
//         } flex items-center justify-center`}
//       >
//         <div className="w-full h-full overflow-hidden">
//           <video
//             className="w-full h-full object-contain rounded-[12px]"
//             autoPlay
//             muted
//             loop
//             playsInline
//             controls={false}
//           >
//             <source src={videoSrc} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="w-full max-w-[300px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#EDEDED] overflow-hidden relative">
//       {imageSrc ? (
//         <Image
//           src={imageSrc}
//           alt={alt}
//           fill
//           className="object-contain"
//           sizes="(max-width: 768px) 100vw, 300px"
//         />
//       ) : (
//         <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//           <span className="text-gray-500">Mobile project placeholder</span>
//         </div>
//       )}
//     </div>
//   )
// }


import Image from "next/image"

interface MobileProjectCardProps {
  imageSrc?: string
  videoSrc?: string
  isVideo?: boolean
  alt?: string
  variant?: "padded" | "flush"
  isMobile?: boolean
}

export default function MobileProjectCard({
  imageSrc,
  videoSrc,
  isVideo = false,
  alt = "Mobile project",
  variant = "flush",
  isMobile = false,
}: MobileProjectCardProps) {
  // Calculate dimensions based on original image ratio (602x1184)
  const cardWidth = 300
  const cardHeight = Math.round((cardWidth * 1184) / 602) // Maintains aspect ratio

  if (isVideo && videoSrc) {
    // Mobile videos have no container - just the video
    if (isMobile) {
      return (
        <div className="overflow-hidden" style={{ width: cardWidth, height: cardHeight }}>
          <video
            className="w-full h-full object-contain rounded-[12px]"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )
    }

    // Desktop videos have gray container with more vertical padding
    return (
      <div
        className="bg-[#EDEDED] flex items-center justify-center"
        style={{
          width: cardWidth,
          height: cardHeight,
          padding: "40px 16px", // More vertical padding than horizontal
        }}
      >
        <div className="w-full h-full overflow-hidden">
          <video
            className="w-full h-full object-contain rounded-[12px]"
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    )
  }

  // Images have NO container at all - just the image
  return (
    <div className="overflow-hidden" style={{ width: cardWidth, height: cardHeight }}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          width={cardWidth}
          height={cardHeight}
          className="object-contain w-full h-full"
          sizes="300px"
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Mobile project placeholder</span>
        </div>
      )}
    </div>
  )
}