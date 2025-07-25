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
  isMobile = false,
}: MobileProjectCardProps) {
  // Calculate dimensions based on original image ratio (602x1184)
  const cardWidth = 300
  const cardHeight = 533

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
        className="bg-[#D3D3D3] flex items-center justify-center"
        style={{
          width: cardWidth,
          height: cardHeight,
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