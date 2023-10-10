import Image from 'next/image';
import { FcCheckmark } from 'react-icons/fc'

const FeaturesSection = () => {
    return (
        <div className='flex flex-col space-y-6 justify-between'>
            <div className=" flex flex-col  md:space-y-6 space-y-6 md:space-y-0 bg-white-300 text-black w-full max-w-6xl m-auto p-8 rounded-xl">
                <h3 className='text-center tracking-tight text-gray-900 text-xl'>Features & Benefits</h3>
                <div className=" flex flex-col md:flex-row space-y-6 justify-between md:space-y-0 bg-white-300 text-black w-full max-w-6xl rounded-xl">
                    <div className='mx-3'>
                        <h2 className='text-3xl text-bold mb-2'>Features</h2>
                        <ul>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Custom Software Engineering Solutions
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Cutting-Edge Web Development
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Innovative Mobile App Development
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Comprehensive Data Analytics
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    AI-Driven Solutions
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='mx-3'>
                        <h2 className='text-3xl text-bold mb-2'>Benefits</h2>
                        <ul>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Increased Efficiency
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Enhanced Customer Experience
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Streamlined Operations
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Informed Decision-Making
                                </div>
                            </li>
                            <li className='my-2 flex items-center'>
                                <FcCheckmark />
                                <div className='ml-3'>
                                    Sustainable Growth
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    <Image src="/images/mission_statement.webp" className="max-w-sm min-h-fit rounded-lg shadow-2xl" alt='{"mission-statement-img"}' height={125} width={150} />
                </div>
            </div>
        </div>
    )
}

export default FeaturesSection