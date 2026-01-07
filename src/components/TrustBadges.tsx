"use client"
import { Shield, Leaf, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Shield,
    title: "Halal Certified",
    subtitle: "Zabiha Halal",
    color: "primary-dark",
  },
  {
    icon: Leaf,
    title: "USDA Organic",
    subtitle: "Certified Ingredients",
    color: "primary-medium",
  },
  {
    icon: Award,
    title: "Grass-Fed",
    subtitle: "Premium Quality",
    color: "primary-light",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    subtitle: "Never Tested on Animals",
    color: "secondary",
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

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const colorMap = {
  "primary-dark": "bg-primary-dark/20 text-primary-dark",
  "primary-medium": "bg-primary-medium/20 text-primary-medium",
  "primary-light": "bg-primary-light/20 text-primary-light",
  "secondary": "bg-secondary/20 text-secondary-dark",
};

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-border" aria-label="Trust badges and certifications">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
              data-testid={`trust-badge-${index}`}
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 ${colorMap[badge.color as keyof typeof colorMap]?.split(' ')[0]}`}
                aria-hidden="true"
              >
                <badge.icon className={`w-8 h-8 md:w-10 md:h-10 ${colorMap[badge.color as keyof typeof colorMap]?.split(' ')[1]}`} aria-hidden="true" />
              </div>
              <h2 className="h4 font-semibold text-sm md:text-base text-primary">
                {badge.title}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                {badge.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
