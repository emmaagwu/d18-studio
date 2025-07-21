import Image from "next/image"

interface MobileAppCardProps {
  title: string
  description: string
  imageSrc: string
  alt?: string
}

export default function MobileAppCard({ title, description, imageSrc, alt }: MobileAppCardProps) {
  return (
    <div className="w-full max-w-[672px] bg-[#EDEDED] shadow-sm">
      {/* Image Container */}
      <div className="w-full aspect-[672/595.4] relative overflow-hidden">
        <Image src={imageSrc || "/placeholder.svg"} alt={alt || title} fill className="object-cover" />
      </div>

      {/* Text Content */}
      <div className="p-6 lg:p-8">
        {/* Title */}
        <h3 className="font-['Plus_Jakarta_Sans'] font-bold text-[20px] sm:text-[24px] lg:text-[28px] xl:text-[32px] leading-[107%] tracking-[-2%] text-black mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[24px] leading-[107%] tracking-[-2%] text-gray-600">
          {description}
        </p>
      </div>
    </div>
  )
}
