import {HeroSection} from "@/app/components/HeroSection";
import {AboutSection} from "@/app/components/AboutSection";
import {PricingSection} from "@/app/components/PricingSection";
import {WorksSection} from "@/app/components/WorksSection";
import {ContactSection} from "@/app/components/ContactSection";
import {Header} from "@/app/components/Header";
import {Footer} from "@/app/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PricingSection />
        <WorksSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}