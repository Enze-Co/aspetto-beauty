import { Card } from "@/components/ui/card";
import { Droplets, Shield, Sun, Heart, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Droplets,
    title: "Deep Hydration",
    description: "Rich in vitamins A, D, E, K and fatty acids that penetrate deep into the skin for lasting moisture.",
    color: "#6ec5c6",
  },
  {
    icon: Shield,
    title: "Skin Barrier Support",
    description: "Strengthens your natural skin barrier, helping to protect against environmental stressors.",
    color: "#08535d",
  },
  {
    icon: Sun,
    title: "Eczema & Psoriasis Relief",
    description: "May help soothe and calm irritated skin conditions with its natural anti-inflammatory properties.",
    color: "#f26565",
  },
  {
    icon: Heart,
    title: "For All Skin Types",
    description: "Gentle enough for sensitive skin, effective for dry, oily, or combination skin types.",
    color: "#ed8986",
  },
  {
    icon: Leaf,
    title: "Clean & Pure",
    description: "No preservatives, synthetic fragrances, or harmful chemicals. Just pure, natural ingredients.",
    color: "#248b97",
  },
  {
    icon: Sparkles,
    title: "Light & Absorbable",
    description: "Non-greasy formula that absorbs quickly without clogging pores or leaving residue.",
    color: "#988266",
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

export default function Benefits() {
  return (
    <section id="benefits" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#604114' }}>
            Why Choose Tallow?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the time-tested benefits of grass-fed tallow, nature's perfect moisturizer.
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
            <motion.div key={index} variants={cardVariants}>
              <Card
                className="p-6 md:p-8 h-full hover-elevate transition-all duration-300"
                data-testid={`card-benefit-${index}`}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${benefit.color}20` }}
                >
                  <benefit.icon className="w-6 h-6" style={{ color: benefit.color }} />
                </motion.div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold mb-3" style={{ color: '#604114' }}>
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
