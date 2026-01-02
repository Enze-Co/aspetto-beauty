import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./styles/globals.css";
import { StructuredData, generateOrganizationSchema } from "@/src/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aspettobeauty.com'),
  title: {
    default: "Aspetto Beauty - Natural Halal Skincare",
    template: "%s | Aspetto Beauty",
  },
  description: "Experience the ancient wisdom of grass-fed tallow, enriched with vitamins A, D, E, K and organic botanicals. Pure, halal-certified skincare for radiant, healthy skin.",
  keywords: ["tallow moisturizer", "halal skincare", "natural skincare", "organic skincare", "grass-fed tallow", "Aspetto Beauty"],
  authors: [{ name: "Aspetto Beauty" }],
  creator: "Aspetto Beauty",
  publisher: "Aspetto Beauty",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Aspetto Beauty",
    title: "Aspetto Beauty - Natural Halal Skincare",
    description: "Experience the ancient wisdom of grass-fed tallow, enriched with vitamins A, D, E, K and organic botanicals. Pure, halal-certified skincare for radiant, healthy skin.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Aspetto Beauty - Natural Halal Skincare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aspetto Beauty - Natural Halal Skincare",
    description: "Experience the ancient wisdom of grass-fed tallow, enriched with vitamins A, D, E, K and organic botanicals. Pure, halal-certified skincare for radiant, healthy skin.",
    images: ["/logo.png"],
    creator: "@aspettobeauty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aspettobeauty.com';
  const organizationSchema = generateOrganizationSchema(baseUrl);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        <StructuredData type="organization" data={organizationSchema} />
        {children}
      </body>
    </html>
  );
}
