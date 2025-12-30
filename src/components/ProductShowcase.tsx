"use client";
import { motion } from "framer-motion";

export default function ProductShowcase() {
  return (
    <section className="pt-16 md:pt-20 lg:pt-24 bg-white" aria-label="Product showcase">
      {/* Text */}
      <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-12 text-center mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-primary"
          >
            Our Signature Product
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Handcrafted with care, our tallow moisturizer brings ancient skincare wisdom to your daily routine—expertly formulated and manufactured in the USA.
          </p>
        </motion.div>
      </div>

      {/* Full-width image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full"
      >
        <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          <motion.img
            src={"/product-full-width.jpeg"}
            alt="Aspetto Beauty Whipped Tallow Cream - Natural tallow moisturizer product showcase"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
