"use client";

import { useState } from "react";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { ShoppingCart, Check, Droplets, Shield, Leaf, Heart, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { StructuredData, generateProductSchema, generateBreadcrumbSchema } from "@/src/components/StructuredData";

const productImages = [
  "/product-1.png",
  "/product-2.jpg",
  "/product-3.png",
];

const productFeatures = [
  "Unscented (herbs infused)",
  "Natural moisturizer",
  "For face and body",
  "Light, absorbable formula",
  "Does not clog pores",
  "For all ages and skin types",
];

const vitamins = [
  {
    name: "Vitamin A",
    benefit: "Promotes skin cell turnover and helps maintain smooth, healthy skin",
    icon: Droplets,
  },
  {
    name: "Vitamin D",
    benefit: "Supports skin barrier function and helps with skin repair",
    icon: Shield,
  },
  {
    name: "Vitamin E",
    benefit: "Powerful antioxidant that protects skin from environmental damage",
    icon: Leaf,
  },
  {
    name: "Vitamin K",
    benefit: "Helps reduce dark circles and supports skin elasticity",
    icon: Heart,
  },
];

const faqs = [
  {
    question: "What skin types is this suitable for?",
    answer:
      "Our tallow moisturizer is suitable for all ages and skin types including dry, oily, combination, and sensitive skin. The natural formula is gentle yet effective.",
  },
  {
    question: "Is this product scented?",
    answer:
      "No, our moisturizer is unscented. It's infused with natural herbs (rose and calendula) but contains no added fragrances or essential oils.",
  },
  {
    question: "How should I store this product?",
    answer:
      "Store at room temperature. Natural color and texture changes are normal due to the preservative-free formula. Use within one year of purchase.",
  },
  {
    question: "Is a patch test recommended?",
    answer:
      "Yes, we recommend doing a patch test before first use, especially if you have sensitive skin or known allergies.",
  },
  {
    question: "Where is this product made?",
    answer:
      "Our tallow moisturizer is formulated and manufactured in the United States in small batches to ensure quality and consistency.",
  },
];

const certifications = [
  { label: "Grass-Fed", color: "primary-medium" },
  { label: "Zabiha Halal", color: "primary-dark" },
  { label: "USDA Organic", color: "primary-light" },
  { label: "Preservative-Free", color: "neutral-dark" },
];

const badgeBgMap: Record<string, string> = {
  "primary-medium": "bg-primary-medium",
  "primary-dark": "bg-primary-dark",
  "primary-light": "bg-primary-light",
  "neutral-dark": "bg-neutral-dark",
};

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aspettobeauty.com';
  const productSchema = generateProductSchema(baseUrl);
  const breadcrumbSchema = generateBreadcrumbSchema(baseUrl, [
    { name: "Home", url: baseUrl },
    { name: "Product", url: `${baseUrl}/product` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="product" data={productSchema} />
      <StructuredData type="breadcrumb" data={breadcrumbSchema} />
      <Header />
      <main>
        <section className="py-12 md:py-16 lg:py-20" aria-label="Product details">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#fabdbd]/20 to-[#daddd8]/30">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={selectedImage}
                      src={productImages[selectedImage]}
                      alt="Aspetto Beauty Whipped Tallow Cream"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-4 gap-4" role="group" aria-label="Product image thumbnails">
                  {productImages.map((img, i) => (
                    <motion.button
                      key={i}
                      type="button"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedImage(i)}
                      className={`aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${selectedImage === i
                        ? 'ring-2 ring-offset-2'
                        : 'opacity-70 hover:opacity-100'
                        }`}
                      style={{ ['--tw-ring-color' as string]: 'var(--color-primary-dark)' }}
                      data-testid={`thumbnail-${i}`}
                      aria-label={`View product image ${i + 1}`}
                      aria-pressed={selectedImage === i}
                    >
                      <Image
                        width={150}
                        height={150}
                        src={img}
                        alt={`Product view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:sticky lg:top-24 lg:self-start"
              >
                <div className="flex gap-1 mb-2">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Badge
                        variant="secondary"
                        className={`px-2 py-1 text-xs text-white ${badgeBgMap[cert.color]}
                  `}
                        data-testid={`badge-cert-${index}`}
                      >
                        {cert.label}
                      </Badge>
                    </motion.div>
                  ))}
                </div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="leading-tight mb-6 h2"
                >
                  Whipped Tallow Cream
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
                >
                  A pure, preservative-free remedy crafted from grass-fed tallow and organic botanicals. Deeply hydrates and soothes skin naturally. Formulated and manufactured in the USA. Net wt 1.7 oz. <Link href="/about" className="text-primary hover:underline transition-colors">Learn about our story</Link>.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h2 className="font-semibold mb-3 text-primary h3">Key Features:</h2>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {productFeatures.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 flex-shrink-0 text-primary-medium" aria-hidden="true" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="https://www.amazon.com/dp/B0FPYZ7P67"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center mb-4 !w-full justify-center text-white px-6 py-3 rounded-md"
                    data-testid="button-hero-shop"
                    aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
                    Shop Now on Amazon
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Info className="w-4 h-4" aria-hidden="true" />
                  <span>Free shipping on qualifying orders</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ backgroundColor: '#daddd8' }} aria-label="Product vitamins">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8 md:mb-12"
            >
              Rich in Essential Vitamins
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vitamins.map((vitamin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full bg-white border-none" data-testid={`card-vitamin-${index}`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 bg-primary-dark/20"
                    >
                      <vitamin.icon className="w-7 h-7 text-primary-dark" aria-hidden="true" />
                    </motion.div>
                    <h3 className="h4 font-semibold mb-2 text-primary">
                      {vitamin.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {vitamin.benefit}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-12 md:py-16 lg:py-20" aria-label="Frequently asked questions">
          <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-8 md:mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-faq-${index}`}>
                    <AccordionTrigger className="text-left h4 hover:no-underline text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ backgroundColor: '#08535d' }} aria-label="Call to action">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-4 text-white"
            >
              Ready to Transform Your Skincare?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg mb-8 text-neutral"
            >
              Experience the natural power of grass-fed tallow moisturizer.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-10 py-7 text-lg font-semibold bg-secondary"
                data-testid="button-product-cta"
                aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
              >
                <Link href="https://www.amazon.com/dp/B0FPYZ7P67" target="_blank" rel="noopener noreferrer" aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab">
                  <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
                  Shop Now on Amazon
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
