import Image from "next/image";

interface Review {
    name: string;
    imageUrl: string;
    rating: number;
    children: React.ReactNode;
    position: string;
    company: string;

}
const ReviewCard = ({ name, imageUrl, rating, position, company, children }: Review) => {
    return (
        <div className="max-w-xs bg-white rounded-xl  overflow-hidden md:max-w-2xl m-2">
            <div className="md:flex">
                <div className="md:flex-shrink-0">
                    <Image className="h-24 w-full object-cover md:w-24 rounded-full" src={imageUrl} alt={name} height={100} width={100} />
                </div>
                <div className="p-4">
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{name}</div>
                    <p className="text-xs text-gray-500">{position}, {company}</p>
                    <p className="mt-2 text-gray-500">{'⭐'.repeat(rating)}</p>
                    <p className="block mt-1 text-sm leading-tight font-medium text-black">{children}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
