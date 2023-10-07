import type { Metadata } from 'next'
import MissionStatementSection from './components/MissionStatementSection/MissionStatementSection';
import CompanyManagementSection from './components/CompanyManagementSection';
import NewsLetterSection from './components/NewsLetterSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';



export const metadata: Metadata = {
    title: 'Centient Technologies About Page',
    description: `Centient Technologies is an innovative company that is dedicated to revolutionizing industries across Africa through the development of cutting-edge AI products,
    data analytics solutions, and big data applications. With a specific focus on sectors like food, social, telecommunication, construction, and retail, Centient Tech aims to leverage the power of data science, big data,
    and AI to drive growth, efficiency, and transformation.`,
}

const About = () => {
    return (
        <main >
            <div>
                <MissionStatementSection statement="At Centient Technologies, we are committed 
            to providing our clients with cutting-edge technology solutions that drive business success. 
            Our team of experts is dedicated to delivering high-quality software engineering services,
             including web applications, mobile apps, and data analytics. 
             We work closely with our clients to understand their
              unique needs and develop customized solutions that exceed their expectations." />

            </div>
            <CompanyManagementSection />
            <ReviewsSection />
            <NewsLetterSection />

        </main>
    );
}


export default About