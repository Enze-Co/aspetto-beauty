import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & Values",
  description: "Learn about Aspetto Beauty's commitment to natural, halal-certified skincare. Discover our values, our process, and why we choose grass-fed tallow enriched with organic botanicals for radiant, healthy skin.",
  openGraph: {
    title: "About Us | Aspetto Beauty",
    description: "Learn about Aspetto Beauty's commitment to natural, halal-certified skincare. Discover our values, our process, and why we choose grass-fed tallow enriched with organic botanicals.",
    images: [
      {
        url: "/about-aspetto.webp",
        width: 1200,
        height: 630,
        alt: "Aspetto Beauty - About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Aspetto Beauty",
    description: "Learn about Aspetto Beauty's commitment to natural, halal-certified skincare. Discover our values, our process, and why we choose grass-fed tallow.",
    images: ["/about-aspetto.webp"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

