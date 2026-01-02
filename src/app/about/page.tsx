"use client";

import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { ShoppingCart, Leaf, Heart, Shield, Flower2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { StructuredData, generateBreadcrumbSchema } from "@/src/components/StructuredData";


// Note: Metadata export doesn't work with "use client" components
// This will be handled by a separate metadata export or moved to a server component wrapper

const values = [
  {
    icon: Leaf,
    title: "Natural",
    description: "We believe in the power of nature. Our products contain only pure, wholesome ingredients that your skin recognizes and loves.",
    color: "primary-medium",
  },
  {
    icon: Shield,
    title: "Halal",
    description: "Zabiha Halal certified. We source our tallow from ethically raised, grass-fed cattle following strict halal guidelines.",
    color: "primary-dark",
  },
  {
    icon: Heart,
    title: "Organic",
    description: "USDA Organic certified ingredients. From the sweet almond oil to the rose and calendula, every botanical is organically grown.",
    color: "secondary",
  },
];

const timeline = [
  {
    step: "1",
    title: "Ethical Sourcing",
    description: "We partner with farms that raise grass-fed cattle following zabiha halal practices, ensuring the highest quality and ethical standards.",
  },
  {
    step: "2",
    title: "Traditional Rendering",
    description: "The tallow is carefully rendered using time-honored methods that preserve its natural vitamins and beneficial fatty acids.",
  },
  {
    step: "3",
    title: "Botanical Infusion",
    description: "USDA organic sweet almond oil is infused with dried rose petals and calendula flowers, creating a soothing botanical blend.",
  },
  {
    step: "4",
    title: "Handcrafted Care",
    description: "Each batch is hand-mixed and inspected to ensure the perfect consistency and quality before reaching your hands.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function About() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aspettobeauty.com';
  const breadcrumbSchema = generateBreadcrumbSchema(baseUrl, [
    { name: "Home", url: baseUrl },
    { name: "About Us", url: `${baseUrl}/about` },
  ]);

  return (
    <div className="min-h-screen bg-white">
      <StructuredData type="breadcrumb" data={breadcrumbSchema} />
      <Header />
      <main>
        <section 
          className="relative py-20 md:py-28 lg:py-32 overflow-hidden bg-primary-light"
          style={{
            backgroundImage: 'url(/about-aspetto.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-40 h-40 rounded-full opacity-20 bg-secondary"
            aria-hidden="true"
          />
          <motion.div
            animate={{
              x: [0, -30, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-32 h-32 rounded-full opacity-20 bg-primary-dark"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-primary-light/90 to-primary-dark/70" aria-hidden="true" />
          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="leading-tight mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8 w-full mx-auto"
            >
              Aspetto Beauty was born from a simple belief: that skincare should be pure, ethical, and effective. We combine ancient wisdom with modern standards to create products that truly nourish your skin. <Link href="/product" className="underline hover:text-primary-light transition-colors">Discover our signature product</Link>.
            </motion.p>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-white" aria-label="Our values">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="mb-4">
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Every product we create is guided by three core principles.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
            >
              {values.map((value, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="p-8 text-center h-full bg-neutral/20 border-none" data-testid={`card-value-${index}`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 bg-${value.color}/20`}
                      aria-hidden="true"
                    >
                      <value.icon className={`w-8 h-8 text-${value.color}`} aria-hidden="true" />
                    </motion.div>
                    <h3 className="mb-4">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-neutral" aria-label="How we make our products">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12 md:mb-16"
            >
              <h2 className="mb-4">
                How We Make It
              </h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary">
                From farm to jar, every step is handled with care and intention.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                  data-testid={`timeline-step-${index}`}
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl p-6 h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2, type: "spring" }}
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-serif text-xl font-bold text-white bg-primary-dark"
                    >
                      {item.step}
                    </motion.div>
                    <h3 className="h4 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-white" aria-label="Why tallow">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                aria-hidden="true"
              >
                <Flower2 className="w-12 h-12 mx-auto mb-6 text-primary-light" aria-hidden="true" />
              </motion.div>
              <h2 className="mb-6">
                Why Tallow?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-6 leading-relaxed"
                >
                  Tallow has been used for skincare for centuries. Our ancestors understood what modern science
                  is now confirming: that tallow's fatty acid profile is remarkably similar to the oils
                  naturally produced by human skin.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-6 leading-relaxed"
                >
                  Unlike synthetic moisturizers that sit on top of the skin, tallow is readily absorbed
                  and recognized by your skin cells. It delivers vitamins A, D, E, and K directly where
                  they're needed most.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="leading-relaxed"
                >
                  Combined with our organic botanical infusion of rose and calendula, our moisturizer
                  provides deep, lasting hydration while supporting your skin's natural healing processes.
                  It's skincare the way nature intended. <Link href="/product" className="underline hover:text-primary-light transition-colors">Learn more about our product</Link>.
                </motion.p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-primary-dark" aria-label="Call to action">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mb-4 text-white"
            >
              Experience the Difference
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg mb-8 text-neutral"
            >
              Join us in rediscovering the pure, natural path to radiant skin.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="https://www.amazon.com/dp/B0FPYZ7P67"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center justify-center text-white px-6 py-3 rounded-md"
                data-testid="button-hero-shop"
                aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
              >
                <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
                Shop Now on Amazon
              </Link>

            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
