import type { Metadata } from "next";
import Header from "@/src/components/Header";
import Hero from "@/src/components/Hero";
import TrustBadges from "@/src/components/TrustBadges";
import ProductShowcase from "@/src/components/ProductShowcase";
import Benefits from "@/src/components/Benefits";
import Ingredients from "@/src/components/Ingredients";
import CTASection from "@/src/components/CTASection";
import Footer from "@/src/components/Footer";

export const metadata: Metadata = {
  title: "Aspetto Beauty - Natural Halal Skincare",
  description: "Discover Aspetto Beauty's natural, halal-certified tallow moisturizer. Enriched with vitamins A, D, E, K and organic botanicals for radiant, healthy skin. Shop now on Amazon.",
  openGraph: {
    title: "Aspetto Beauty - Natural Halal Skincare",
    description: "Discover Aspetto Beauty's natural, halal-certified tallow moisturizer. Enriched with vitamins A, D, E, K and organic botanicals for radiant, healthy skin.",
    images: [
      {
        url: "/hero-product.png",
        width: 1200,
        height: 630,
        alt: "Aspetto Beauty Whipped Tallow Cream",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspetto Beauty - Natural Halal Skincare",
    description: "Discover Aspetto Beauty's natural, halal-certified tallow moisturizer. Enriched with vitamins A, D, E, K and organic botanicals for radiant, healthy skin.",
    images: ["/hero-product.png"],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
