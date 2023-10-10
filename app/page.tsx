import CompanyManagementSection from "./about/components/CompanyManagementSection";
import LandingPageSection from "./about/components/LandingPageSection/LandingPageSection";
import NewsLetterSection from "./about/components/NewsLetterSection/NewsLetterSection";
import ReviewsSection from "./about/components/ReviewsSection/ReviewsSection";

export default function Home() {
  return (
    <main >
      <div>
        <LandingPageSection statement="Centient Technologies is a leading software engineering company that delivers cutting-edge web applications, mobile apps, data analytics solutions, and more to clients worldwide" />
      </div>
      <CompanyManagementSection />
      <ReviewsSection />
      <NewsLetterSection />
    </main>
  )
}
