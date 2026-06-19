import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import HowItWorks from "./components/HowItWorks";
import Testimonials from "./components/Testimonials";
import CTABanner from "./components/CTABanner";
import FaqSection from "./components/FaqSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <HowItWorks />
      <FaqSection />
      <Testimonials />
      <CTABanner />
    </main>
  );
}
