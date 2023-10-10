import CompanyManagementSection from "./about/components/CompanyManagementSection";
import LandingPageSection from "./components/LandingPageSection/LandingPageSection";
import NewsLetterSection from "./about/components/NewsLetterSection/NewsLetterSection";
import ReviewsSection from "./about/components/ReviewsSection/ReviewsSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <main >
      <div>
        <LandingPageSection statement="Centient Technologies is a leading software engineering company that delivers cutting-edge web applications, mobile apps, data analytics solutions, and more to clients worldwide" />
      </div>
      <FeaturesSection />
      <CompanyManagementSection />
      <ReviewsSection />
      <NewsLetterSection />
    </main>
  )
}
