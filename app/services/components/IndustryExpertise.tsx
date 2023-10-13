const industries = [
    {title: "Logistics and Transportation", image: ""},
    {title: "Health", image: ""},
    {title: "Finance", image: ""},
    {title: "Communication", image: ""},
   
]
export function IndustryExpertise(){
    return(
        <div className="mx-auto mt-10 grid max-w-2l grid-cols-2 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {industries.map((industry) => (
            <div key={industry.title} className="group flex flex-col mb-3">
                <div>
                    
                </div>
            </div>
          ))}
        </div>

    )
}