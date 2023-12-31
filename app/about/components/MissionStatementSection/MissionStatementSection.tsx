import Image from 'next/image';

interface MissionStatementSectionProps {
    statement: string;

}
const MissionStatementSection = ({ statement }: MissionStatementSectionProps) => {
    return (
        <div className="grid w-full items-start bg-center bg-cover bg-gray-100">
            <div className="col-start-1 row-start-1">
                <div className={`z-0 flex flex-col items-center justify-around max-w-7xl gap-20 p-4 lg:flex-row-reverse`} >
                    <Image src="/images/mission_statement.webp" className="w-full max-w-sm min-h-fit rounded-lg shadow-2xl" alt='{"mission-statement-img"}' height={500} width={600} />
                    <div>
                        <h1 className="text-5xl font-bold text-black">Mission statement</h1>
                        <p className="py-4 text-zinc-900" >  {statement}</p>
                        <button className="flex text-white bg-blue-800 rounded-md py-4 px-12 font-medium hover:bg-blue-600 my-0">Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MissionStatementSection


// export default function MyComponent() {
//     return (
//         <div className="w-full h-auto relative">
//             <Image
//                 src="/path/to/image.jpg"
//                 alt="Description of image"
//                 layout="fill"
//                 objectFit="contain"
//             />
//         </div>
//     )
// }
