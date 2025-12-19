"use client";
import { Badge } from "@/src/components/ui/badge";
import { motion } from "framer-motion";

const ingredients = [
  {
    name: "Grass-Fed Tallow",
    description: "Zabiha Halal certified, rich in vitamins and fatty acids",
    badge: "Main Ingredient",
  },
  {
    name: "Sweet Almond Oil",
    description: "USDA Organic, deeply nourishing and moisturizing",
    badge: "Carrier Oil",
  },
  {
    name: "Rose Petals",
    description: "Dried organic rose, naturally soothing and aromatic",
    badge: "Botanical",
  },
  {
    name: "Calendula Flowers",
    description: "Dried organic calendula, calming and healing",
    badge: "Botanical",
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Ingredients() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-neutral" aria-label="Product ingredients">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-primary">
            Pure, Simple Ingredients
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-primary">
            Every ingredient is carefully selected for its natural benefits. Nothing artificial, nothing harmful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Badge
                variant="secondary"
                className={`px-4 py-2 text-sm font-medium text-white ${badgeBgMap[cert.color]}
`}
                data-testid={`badge-cert-${index}`}
                aria-label={`Certification: ${cert.label}`}
              >
                {cert.label}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {ingredients.map((ingredient, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-md"
              data-testid={`card-ingredient-${index}`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="h4 font-serif font-semibold text-primary">
                  {ingredient.name}
                </h3>
                <Badge variant="outline" className="text-xs whitespace-nowrap border-primary/10" aria-label={`Ingredient type: ${ingredient.badge}`}>
                  {ingredient.badge}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {ingredient.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 md:mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4 text-primary">
              Storage & Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Store at room temperature. Natural color and texture changes are normal and indicate
              the pure, preservative-free nature of this product. Use within one year of purchase.
              Patch test recommended before first use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
