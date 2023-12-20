import TeamMember from "./TeamMember";

const CompanyManagementSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-8xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Our esteemed leadership team comprises individuals with a wealth of experience and expertise. They bring a deep understanding of their respective domains and a commitment to driving our organization forward. We invite you to get to know them better..</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <TeamMember name="Kirston Kwasi-Kumah" position="CEO, Chief Executive Officer" imgSrc="/images/kirston.jpg" />
                    <TeamMember name="David Okyere Agyakwa" position="CTO, Chief Technology Office" imgSrc="/images/dave.jpg" />
                    {/* <TeamMember name="Emma Naa Kai Odametey" position="COO, Chief Operations Officer" imgSrc="/images/naa.jpg" /> */}
                    <TeamMember name="Anthony Nwintiribu Basingnaa Jnr" position="CDO, Chief Design Officer" imgSrc="/images/anthony.JPG" />
                    {/* <!-- More people... --> */}
                </ul>
            </div>
        </div>
    );
}


export default CompanyManagementSection