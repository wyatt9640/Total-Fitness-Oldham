import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WomensSection from "@/components/WomensSection";
import MembershipsSection from "@/components/MembershipsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Total Fitness Oldham — Your Local Gym Family" },
      { name: "description", content: "Community-focused gym in Oldham with sauna, women's only section, personal training, group classes and affordable memberships. Visit us at Daniel St, OL1 3NS." },
      { property: "og:title", content: "Total Fitness Oldham — Your Local Gym Family" },
      { property: "og:description", content: "More than a gym — your local fitness community in Oldham. Day passes from £5." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-primary px-4 py-3 text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground md:text-base">
          🎉 Kids &amp; Adult Classes — Coming Soon! Stay tuned for details.
        </p>
      </div>
      <Header />
      <HeroSection />
      <AboutSection />
      <WomensSection />
      <MembershipsSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
