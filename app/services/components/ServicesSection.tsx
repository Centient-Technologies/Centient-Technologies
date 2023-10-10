import Image from 'next/image'

const services = [
  {
    title: "Web Development",
    info: "We offer custom web development services that are visually stunning, user-friendly, and optimized for search engines.",
    image: "/images/services_web_dev.webp",
    alt: "web development svg"
    
  },
  {
    title: "Mobile App Development",
    info: "We offer mobile app development services that blend innovative design with high functionality, delivering intuitive, user-centric mobile apps that resonate with your target audience.",
    image: "/images/services_mobile_dev.webp",
    alt: "mobile development svg"
    
  },
  {
    title: "Digital Marketting & SEO",
    info: "Our data analytics services provide businesses with valuable insights and help them make strategic decisions to stay ahead of the competition.",
    image: "/images/services_data.webp",
    alt: "mobile development svg"
    
  },

]

export default function ServicesSection() {
  return (
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group flex flex-col mb-3">
                <Image src={service.image} alt={service.alt} width={500} height={500}></Image>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <span className="inset-0" />
                  {service.title}
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{service.info}</p>
            </div>
          ))}
        </div>
  )
}