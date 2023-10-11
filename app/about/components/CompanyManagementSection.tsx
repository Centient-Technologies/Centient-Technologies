import TeamMember from "./TeamMember";

const CompanyManagementSection = () => {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-8xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <TeamMember name="Kirston Kwasi-Kumah" position="CEO, Chief Executive Officer" imgSrc="/images/kirston.jpg">{ }</TeamMember>
                    <TeamMember name="David Okyere Agyakwa" position="CTO, Chief Technology Office" imgSrc="/images/dave.jpg">{ }</TeamMember>
                    <TeamMember name="Emma Naa Kai Odametey" position="COO, Chief Operations Officer" imgSrc="/images/naa.jpg">{ }</TeamMember>
                    <TeamMember name="Anthony Nwintiribu Basingnaa Jnr" position="CDO, Chief Design Officer" imgSrc="/images/anthony.JPG">{ }</TeamMember>
                    {/* <!-- More people... --> */}
                </ul>
            </div>
        </div>
    );
}


export default CompanyManagementSection