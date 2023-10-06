import CompanyManagementSection from "./CompanyManagementSection";
import MissionStatementSection from "./MissionStatementSection";
import ReviewsSection from "./ReviewsSection";
import NewsLetterSection from "./NewsLetterSection";

const About = () => {
    return (
        // className="container mx-auto"
        <div >
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

        </div>
    );
}


export default About