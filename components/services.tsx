import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = ["Web Design", "App Design", "Branding & Visual Identity"]

  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: "#C8D74B" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services Container */}
        <div className="w-full max-w-5xl mx-auto rounded-lg overflow-hidden" style={{ backgroundColor: "#0C570D" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] lg:min-h-[500px]">
            {/* Left Side - Image */}
            <div className="relative h-64 lg:h-full">
              <Image
                src="/images/our-service.png"
                alt="Person in yellow hoodie working on laptop"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Side - Services Content */}
            <div className="flex flex-col justify-center p-8 lg:p-12 xl:p-16">
              {/* Services Title */}
              <h2 className="font-['RobaV0.5_Low_TRIAL'] font-bold text-[32px] sm:text-[48px] lg:text-[64px] leading-[85%] tracking-[-2%] text-white uppercase mb-8 lg:mb-12">
                OUR SERVICES
              </h2>

              {/* Services List */}
              <div className="space-y-4 lg:space-y-6 mb-8 lg:mb-12">
                {services.map((service, index) => (
                  <p
                    key={index}
                    className="font-['Plus_Jakarta_Sans'] font-light italic text-[24px] sm:text-[28px] lg:text-[35px] leading-[85%] tracking-[-2%] text-white"
                  >
                    {service}
                  </p>
                ))}
              </div>

              {/* Contact Button */}
              <Button
                asChild
                className="bg-white text-black hover:bg-gray-100 font-['RobaV0.5_Low_TRIAL'] font-semibold text-sm lg:text-base px-6 py-3 w-fit uppercase tracking-wide transition-colors duration-200"
              >
                <a href="#contact">CONTACT US</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
