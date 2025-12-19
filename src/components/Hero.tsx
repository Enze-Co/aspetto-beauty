"use client";
import { Button } from "@/src/components/ui/button";
import { ShoppingCart, Leaf, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center bg-secondary" aria-label="Hero section">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-neutral/50" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 bg-primary-dark/10"
            >
              <Leaf className="w-4 h-4 text-primary-dark" aria-hidden="true" />
              <span className="text-sm font-medium text-primary-dark">
                100% Natural & Halal Certified
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="leading-tight mb-6"
            >
              Nourish Your Skin{" "}
              <span className="text-primary-dark">Naturally</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Experience the ancient wisdom of grass-fed tallow, enriched with vitamins A, D, E, K
              and organic botanicals. Pure skincare for radiant, healthy skin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap lg:justify-start gap-4 mb-12"
            >
              <Link
                href="https://www.amazon.com/dp/B0FPYZ7P67"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center text-white px-6 py-3 rounded-md"
                data-testid="button-hero-shop"
                aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
              >
                <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
                Shop Now on Amazon
              </Link>

              <Link
                href="#benefits"
                className="btn-outline inline-flex items-center justify-center px-6 py-3 rounded-md"
                data-testid="button-hero-learn"
                aria-label="Learn more about product benefits"
              >
                Learn More
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-accent" aria-hidden="true" />
                <span className="text-primary">For All Skin Types</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary-light" aria-hidden="true" />
                <span className="text-primary">Unscented Formula</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-primary-medium" aria-hidden="true" />
                <span className="text-primary">USDA Organic</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30 bg-primary-light"
                aria-hidden="true"
              />
              <motion.img
                src={"/hero-product.png"}
                alt="Aspetto Beauty Whipped Tallow Cream - Natural tallow moisturizer in a jar"
                className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] object-contain drop-shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
