import { Shield, Leaf, Award, Heart } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  {
    icon: Shield,
    title: "Halal Certified",
    subtitle: "Zabiha Halal",
    color: "#08535d",
  },
  {
    icon: Leaf,
    title: "USDA Organic",
    subtitle: "Certified Ingredients",
    color: "#248b97",
  },
  {
    icon: Award,
    title: "Grass-Fed",
    subtitle: "Premium Quality",
    color: "#6ec5c6",
  },
  {
    icon: Heart,
    title: "Cruelty Free",
    subtitle: "Never Tested on Animals",
    color: "#f26565",
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

export default function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-border">
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
              variants={badgeVariants}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center text-center"
              data-testid={`trust-badge-${index}`}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${badge.color}15` }}
              >
                <badge.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: badge.color }} />
              </motion.div>
              <h3 className="font-semibold text-sm md:text-base" style={{ color: '#604114' }}>
                {badge.title}
              </h3>
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
