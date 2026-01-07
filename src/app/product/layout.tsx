import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whipped Tallow Cream - Natural Halal Skincare",
  description: "Aspetto Beauty Whipped Tallow Cream - Natural, halal-certified moisturizer enriched with vitamins A, D, E, K and organic botanicals. Perfect for all ages and skin types. Shop now on Amazon.",
  openGraph: {
    title: "Whipped Tallow Cream | Aspetto Beauty",
    description: "Natural, halal-certified tallow moisturizer enriched with vitamins A, D, E, K and organic botanicals. Perfect for all ages and skin types. Shop now on Amazon.",
    images: [
      {
        url: "/about-aspetto.webp",
        width: 1200,
        height: 630,
        alt: "Aspetto Beauty - Natural Halal Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Whipped Tallow Cream | Aspetto Beauty",
    description: "Natural, halal-certified tallow moisturizer enriched with vitamins A, D, E, K and organic botanicals. Perfect for all ages and skin types.",
    images: ["/about-aspetto.webp"],
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

