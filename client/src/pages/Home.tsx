import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import ProductShowcase from "@/components/ProductShowcase";
import Benefits from "@/components/Benefits";
import Ingredients from "@/components/Ingredients";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <ProductShowcase />
        <Benefits />
        <Ingredients />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
