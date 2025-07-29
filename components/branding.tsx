import Image from "next/image"

interface BrandingItemProps {
  title: string
  description: string
  imageSrc: string
  imageAlt: string
  reversed?: boolean
}

function BrandingItem({ title, description, imageSrc, imageAlt, reversed = false }: BrandingItemProps) {
  return (
    <div
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 xl:gap-16 items-center mb-16 lg:mb-24`}
    >
      {/* Image */}
      <div className="w-full lg:flex-1 max-w-[932px]">
        <div className="relative w-full aspect-[932/535] overflow-hidden rounded-lg">
          <Image src={imageSrc || "/placeholder.svg"} alt={imageAlt} fill className="object-cover" />
        </div>
      </div>

      {/* Text Block */}
      <div className="w-full lg:w-[342px] lg:flex-shrink-0 space-y-[15px]">
        <h3 className="font-['Roba_Low'] font-semibold text-[24px] sm:text-[28px] lg:text-[32px] leading-[92%] tracking-[0%] text-black uppercase">
          {title}
        </h3>
        <p
          className="font-['Plus_Jakarta_Sans'] font-normal text-[16px] sm:text-[18px] lg:text-[20px] leading-[107%] tracking-[-2%]"
          style={{ color: "#727272" }}
        >
          {description}
        </p>
      </div>
    </div>
  )
}

export default function Branding() {
  const brandingProjects = [
    {
      title: "WORLDCHANGERS SCHOOL OF SUCCESS & MINISTRY",
      description:
        "Logo design for Worldchangers School of Success and Ministry. The logo was crafted W & M representing Worldchangers and Ministry.",
      imageSrc: "/images/brand1.png",
      imageAlt: "Worldchangers School branding with blue and green W&M logo design",
    },
    {
      title: "NEOCREST CONSULT",
      description:
        "Brand design for Neocrest Consult, a consulting firm. The logo represents firmness and steadiness while looking professional for the company.",
      imageSrc: "/images/brand2.png",
      imageAlt: "Neocrest Consult branding with yellow and blue design elements",
    },
    {
      title: "KINSAGE STUDIO",
      description:
        "Brand and logo design for Kinsage Studio, a creative agency focused on marketing. The logo emanates from the name of the company because.",
      imageSrc: "/images/brand3.png",
      imageAlt: "Kinsage Studio branding showcase with blue and green design elements",
    },
    {
      title: "CONSONANCE",
      description:
        "Brand and logo design for Consonance, an insurance firm. The logo represents firmness and steadiness while looking professional for the company.",
      imageSrc: "/images/brand4.png",
      imageAlt: "Consonance insurance company branding with blue corporate design",
    },
  ]

  return (
    <section className="w-full bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center lg:text-left mb-16 lg:mb-24">
          <h2 className="font-['Roba_Low'] text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] leading-[40px] sm:leading-[80px] tracking-[-2%] text-black uppercase">
            <span className="font-black">GOOD</span>
            <br />
            <span className="font-light">BRANDING</span>
            <br />
            <span className="font-black">IS FELT, </span>
            <span className="font-black" style={{ color: "#C8D74B" }}>
              NOT
            </span>
            <br />
            <span className="font-black">JUST SEEN</span>
          </h2>
        </div>

        {/* Branding Projectns */}
        <div className="space-y-0">
          {brandingProjects.map((project, index) => (
            <BrandingItem
              key={index}
              title={project.title}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
        {/* Extra Branding Project */}
        <div className="md:hidden relative">
            <Image src='/images/brand5.png' alt='Branding showcase with blue and green design elements' width={932} height={535} className='w-full h-auto object-cover rounded-lg mt-16' />
        </div>

        <div className="md:hidden relative">
            <Image src='/images/brand6.png' alt='Branding showcase with blue and green design elements' width={932} height={535} className='w-full h-auto object-cover rounded-lg mt-16' />
        </div>
      </div>
    </section>
  )
}
