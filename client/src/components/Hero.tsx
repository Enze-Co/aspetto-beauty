import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf, Heart, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import productImage from "@assets/CP9_1236_1765655717627.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center" style={{ backgroundColor: '#fabdbd' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#fabdbd]/90 via-[#fabdbd]/70 to-[#daddd8]/50" />
      
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" 
              style={{ backgroundColor: 'rgba(8, 83, 93, 0.1)' }}
            >
              <Leaf className="w-4 h-4" style={{ color: '#08535d' }} />
              <span className="text-sm font-medium" style={{ color: '#08535d' }}>
                100% Natural & Halal Certified
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" 
              style={{ color: '#604114' }}
            >
              Nourish Your Skin{" "}
              <span style={{ color: '#08535d' }}>Naturally</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" 
              style={{ color: '#604114' }}
            >
              Experience the ancient wisdom of grass-fed tallow, enriched with vitamins A, D, E, K 
              and organic botanicals. Pure skincare for radiant, healthy skin.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12"
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold shadow-lg"
                style={{ backgroundColor: '#08535d' }}
                data-testid="button-hero-shop"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now on Amazon
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-semibold border-2"
                style={{ borderColor: '#08535d', color: '#08535d' }}
                data-testid="button-hero-learn"
                onClick={() => {
                  document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4" style={{ color: '#f26565' }} />
                <span style={{ color: '#604114' }}>For All Skin Types</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" style={{ color: '#6ec5c6' }} />
                <span style={{ color: '#604114' }}>Unscented Formula</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4" style={{ color: '#248b97' }} />
                <span style={{ color: '#604114' }}>USDA Organic</span>
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
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ backgroundColor: '#6ec5c6' }}
              />
              <motion.img 
                src={productImage}
                alt="Aspetto Beauty Whipped Tallow Cream"
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
