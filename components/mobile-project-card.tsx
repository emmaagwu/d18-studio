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
//         className={`w-full max-w-[300px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#EDEDED] rounded-lg ${
//           variant === "padded" ? "p-4" : ""
//         } flex items-center justify-center`}
//       >
//         <div className="w-full h-full rounded-lg overflow-hidden">
//           <video
//             className="w-full h-full object-contain rounded-lg"
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
//     <div className="w-full max-w-[300px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#EDEDED] rounded-lg overflow-hidden relative">
//       {imageSrc ? (
//         <Image
//           src={imageSrc}
//           alt={alt}
//           fill
//           className="object-contain"
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
}

export default function MobileProjectCard({
  imageSrc,
  videoSrc,
  isVideo = false,
  alt = "Mobile project",
  variant = "padded",
}: MobileProjectCardProps) {
  if (isVideo && videoSrc) {
    return (
      <div
        className={`w-full max-w-[300px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#EDEDED] ${
          variant === "padded" ? "py-6 px-4" : ""
        } flex items-center justify-center`}
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

  return (
    <div className="w-full max-w-[300px] h-[400px] sm:h-[450px] md:h-[500px] bg-[#EDEDED] overflow-hidden relative">
      {imageSrc ? (
        <Image src={imageSrc} alt={alt} fill className="object-contain" />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Mobile project placeholder</span>
        </div>
      )}
    </div>
  )
}
