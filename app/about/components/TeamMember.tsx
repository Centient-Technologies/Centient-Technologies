import Image from "next/image";

interface TeamMemberProps {
    imgSrc: string;
    name: string;
    position: string;
    // children: React.ReactNode
}

const TeamMember = ({ imgSrc, name, position, }: TeamMemberProps) => {
    return (
        <li>
            <div className="flex items-center gap-x-6">
                <Image className="h-16 w-16 rounded-full" src={imgSrc} alt="member-img" width={50} height={100} />
                <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{position}</p>
                </div>
            </div>
            {/* {children} */}
        </li>
    );
}



export default TeamMember