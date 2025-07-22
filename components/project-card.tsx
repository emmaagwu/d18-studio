// import Image from "next/image"

// interface ProjectCardProps {
//   title: string
//   description: string
//   imageSrc?: string
//   videoSrc?: string
//   isVideo?: boolean
// }

// export default function ProjectCard({ title, description, imageSrc, videoSrc, isVideo = false }: ProjectCardProps) {
//   return (
//     <div
//       className="w-full max-w-[646px] h-auto rounded-lg p-8 shadow-sm"
//       style={{backgroundColor: "#EDEDED" }}
//     >
//       {/* Media Container */}
//       <div className="relative w-full max-w-[584px] h-[240px] sm:h-[300px] md:h-[387px] mx-auto mb-6 rounded-[20px] overflow-hidden bg-gray-100">
//         {isVideo && videoSrc ? (
//           <video className="w-full h-full object-cover" autoPlay muted loop playsInline controls={false}>
//             <source src={videoSrc} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : imageSrc ? (
//           <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
//         ) : (
//           <div className="w-full h-full bg-gray-200 flex items-center justify-center">
//             <span className="text-gray-500">Media placeholder</span>
//           </div>
//         )}
//       </div>

//       {/* Title */}
//       <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] sm:text-[24px] md:text-[32px] leading-[107%] tracking-[-2%] text-black mb-3">
//         {title}
//       </h3>

//       {/* Description */}
//       <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] sm:text-[20px] md:text-[24px] leading-[107%] tracking-[-2%] text-gray-700">
//         {description}
//       </p>
//     </div>
//   )
// }


import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc?: string
  videoSrc?: string
  isVideo?: boolean
}

export default function ProjectCard({ title, description, imageSrc, videoSrc, isVideo = false }: ProjectCardProps) {
  return (
    <div
      className="w-full max-w-[646px] h-auto p-4 shadow-sm"
      style={{backgroundColor: "#EDEDED" }}
    >
      {/* Media Container - No radius, images not cropped */}
      <div className="relative w-full max-w-[584px] mx-auto mb-6 bg-gray-100">
        {isVideo && videoSrc ? (
          <video className="w-full h-auto" autoPlay muted loop playsInline controls={false}>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : imageSrc ? (
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={584}
            height={400}
            className="w-full h-auto object-contain"
          />
        ) : (
          <div className="w-full h-[240px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">Media placeholder</span>
          </div>
        )}
      </div>

      {/* Title */}
      <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] sm:text-[24px] md:text-[32px] leading-[107%] tracking-[-2%] text-black mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] sm:text-[20px] md:text-[24px] leading-[107%] tracking-[-2%] text-gray-700">
        {description}
      </p>
    </div>
  )
}
