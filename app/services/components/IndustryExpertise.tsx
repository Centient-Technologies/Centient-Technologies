import Image from "next/image";

const industries = [
  {
    title: "Logistics",
    image: "/images/industries_logistics.jpg",
    alt: "logistics",
  },
  { title: "Health", image: "/images/industries_health.jpg", alt: "Health" },
  { title: "Finance", image: "/images/industries_finance.jpg", alt: "Finance" },
  {
    title: "Communication",
    image: "/images/industries_communication.jpg",
    alt: "Communication",
  },
];
export function IndustryExpertise() {
  return (
    <div className="mx-auto mt-10 grid max-w-2l grid-cols-2 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
      {industries.map((industry) => (
        <div key={industry.title} className="group flex flex-col mb-3">
        <div className="w-5/6 h-5/6">
          <Image src={industry.image} alt={industry.alt} width={500} height={500}></Image>
        </div>
      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 text-center">
          {industry.title}
      </h3>
    </div>
      ))}
    </div>
  );
}
