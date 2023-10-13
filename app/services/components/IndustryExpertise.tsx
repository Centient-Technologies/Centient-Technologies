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
        <div
          key={industry.title}
          className="flex flex-col justify-center items-center h-48 max-h-96 border-2 border-gray-300"
        >
          <div className="w-2/3 h-2/3 flex object-center place-items-center ">
            <Image
              src={industry.image}
              alt={industry.alt}
              width={500}
              height={500}
            ></Image>
          </div>
          <h6 className="font-semibold">{industry.title}</h6>
        </div>
      ))}
    </div>
  );
}
