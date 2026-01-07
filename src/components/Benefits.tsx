"use client";
import { Card } from "@/src/components/ui/card";
import { Droplets, Shield, Sun, Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    description: "Rich in vitamins A, D, E, K and fatty acids that penetrate deep into the skin for lasting moisture.",
    color: "primary-light",
  },
  {
    icon: Shield,
    title: "Skin Barrier Support",
    description: "Strengthens your natural skin barrier, helping to protect against environmental stressors.",
    color: "primary-dark",
  },
  {
    icon: Sun,
    title: "Eczema & Psoriasis Relief",
    description: "May help soothe and calm irritated skin conditions with its natural anti-inflammatory properties.",
    color: "accent",
  },
  {
    icon: Heart,
    title: "For All Ages and Skin Types",
    description: "Gentle enough for sensitive skin, effective for dry, oily, or combination skin types.",
    color: "neutral",
  },
  {
    icon: Leaf,
    title: "Clean & Pure",
    description: "No preservatives, synthetic fragrances, or harmful chemicals. Just pure, natural ingredients.",
    color: "primary-medium",
  },
  {
    icon: Sparkles,
    title: "Light & Absorbable",
    description: "Non-greasy formula that absorbs quickly without clogging pores or leaving residue.",
    color: "neutral-dark",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const colorMap = {
  "primary-light": "bg-primary-light/20 text-primary-light",
  "primary-dark": "bg-primary-dark/20 text-primary-dark",
  "accent": "bg-secondary/20",
  "neutral": "bg-neutral text-neutral-dark",
  "primary-medium": "bg-primary-medium/20 text-primary-medium",
  "neutral-dark": "bg-neutral-dark/20 text-neutral-dark",
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-20 lg:py-24 bg-white" aria-label="Product benefits">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-primary">
            Why Choose Tallow?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mx-auto">
            Discover the time-tested benefits of grass-fed tallow, nature's perfect moisturizer. <Link href="/product" className="text-primary hover:underline transition-colors">Shop our product</Link>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div key={index}>
              <Card
                className="p-6 md:p-8 h-full hover-elevate transition-all duration-300 bg-neutral/20 border-none"
                data-testid={`card-benefit-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${colorMap[benefit.color as keyof typeof colorMap]?.split(' ')[0]}`}
                  aria-hidden="true"
                >
                  <benefit.icon className={`w-6 h-6 ${colorMap[benefit.color as keyof typeof colorMap]?.split(' ')[1]}`} aria-hidden="true" />
                </motion.div>
                <h3 className="h4 font-serif text-xl md:text-2xl font-semibold mb-3 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
