export const revalidate = 60; // re-fetch from notion every 1 minute
import { HeroSection } from "@/app/components/HeroSection";
import { AboutSection } from "@/app/components/AboutSection";
import { PricingSection } from "@/app/components/PricingSection";
import { WorksSection } from "@/app/components/WorksSection";
import { ContactSection } from "@/app/components/ContactSection";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { getVideos, getFeaturedVideo } from "@/app/clients/notion";

export default async function Home() {
  // Both calls share React's cache() — only one DB query is made
  const [videos, featuredVideo] = await Promise.all([
    getVideos(),
    getFeaturedVideo(),
  ]);

  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <HeroSection featuredVideo={featuredVideo} />
        <AboutSection />
        <PricingSection />
        <WorksSection videos={videos.filter(v => !v.featured)} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
