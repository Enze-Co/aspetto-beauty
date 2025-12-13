import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#08535d' }}>
      <motion.div 
        animate={{ 
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-32 h-32 rounded-full opacity-10" 
        style={{ backgroundColor: '#6ec5c6' }} 
      />
      <motion.div 
        animate={{ 
          x: [0, -20, 0],
          y: [0, 30, 0],
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 w-48 h-48 rounded-full opacity-10" 
        style={{ backgroundColor: '#fabdbd' }} 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full opacity-10" 
        style={{ backgroundColor: '#ed8986' }} 
      />

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-1 mb-6"
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Star className="w-6 h-6 fill-current" style={{ color: '#fabdbd' }} />
            </motion.div>
          ))}
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
        >
          Ready for Radiant Skin?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" 
          style={{ color: '#daddd8' }}
        >
          Join thousands who have discovered the natural power of tallow skincare. 
          Experience the difference pure, organic ingredients can make.
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
            className="rounded-full px-10 py-7 text-lg font-semibold shadow-xl"
            style={{ backgroundColor: '#fabdbd', color: '#604114' }}
            data-testid="button-cta-shop"
          >
            <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Shop Now on Amazon
            </a>
          </Button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 text-sm" 
          style={{ color: '#6ec5c6' }}
        >
          Free shipping on qualifying orders
        </motion.p>
      </div>
    </section>
  );
}
