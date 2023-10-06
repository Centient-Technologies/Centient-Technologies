import Image from 'next/image';


interface MissionStatementSectionProps {
    statement: string;

}
const MissionStatementSection = ({ statement }: MissionStatementSectionProps) => {
    return (
        <div className='flex items-center bg-orange-50 justify-between '>
            <div className='w-100 line-clamp-8  text-left py-10 px-6'>
                <h1 className="font-medium text-3xl tracking-wide">Mission statement</h1>
                <p className=' break-words leading-8 '>
                    {statement}
                </p>
            </div>
            <div className='flex mx-10 my-5'>
                <Image className='rounded-md' src={"/mission_statement.webp"} alt={"mission-statement-img"} width={400} height={200} />
            </div>

        </div>

    )
}

export default MissionStatementSection