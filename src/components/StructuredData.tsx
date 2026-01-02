interface OrganizationSchema {
  "@context": string;
  "@type": string;
  name: string;
  url: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": string;
    contactType: string;
    areaServed: string;
  };
}

interface ProductSchema {
  "@context": string;
  "@type": string;
  name: string;
  image: string[];
  description: string;
  brand: {
    "@type": string;
    name: string;
  };
  offers: {
    "@type": string;
    url: string;
    priceCurrency: string;
    availability: string;
    seller: {
      "@type": string;
      name: string;
    };
  };
  aggregateRating?: {
    "@type": string;
    ratingValue: string;
    reviewCount: string;
  };
  sku?: string;
  mpn?: string;
}

interface BreadcrumbSchema {
  "@context": string;
  "@type": string;
  itemListElement: Array<{
    "@type": string;
    position: number;
    name: string;
    item: string;
  }>;
}

interface StructuredDataProps {
  type: "organization" | "product" | "breadcrumb";
  data: OrganizationSchema | ProductSchema | BreadcrumbSchema;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

// Helper functions to generate schemas
export function generateOrganizationSchema(baseUrl: string): OrganizationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aspetto Beauty",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: "Natural, halal-certified skincare crafted with pure ingredients for radiant, healthy skin.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      areaServed: "US",
    },
  };
}

export function generateProductSchema(baseUrl: string): ProductSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Aspetto Beauty Whipped Tallow Cream",
    image: [
      `${baseUrl}/product-1.png`,
      `${baseUrl}/product-2.jpg`,
      `${baseUrl}/product-3.png`,
      `${baseUrl}/hero-product.png`,
    ],
    description: "Natural, halal-certified tallow moisturizer enriched with vitamins A, D, E, K and organic botanicals. Perfect for all ages and skin types. Preservative-free formula crafted from grass-fed tallow and USDA organic ingredients.",
    brand: {
      "@type": "Brand",
      name: "Aspetto Beauty",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.amazon.com/dp/B0FPYZ7P67",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Amazon",
      },
    },
    sku: "B0FPYZ7P67",
  };
}

export function generateBreadcrumbSchema(
  baseUrl: string,
  items: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

