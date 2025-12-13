import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Droplets, Shield, Leaf, Heart, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import productJar from "@assets/CP9_1236_1765655717627.jpg";
import productBox from "@assets/CP9_1222_1765655717626.jpg";
import productCombo from "@assets/CP9_1227_1765655717626.jpg";
import productHalal from "@assets/CP9_1220_1765655717619.jpg";

const productImages = [productJar, productBox, productCombo, productHalal];

const productFeatures = [
  "Unscented (herbs infused)",
  "Natural moisturizer",
  "For face and body",
  "Light, absorbable formula",
  "Does not clog pores",
  "For all skin types",
];

const vitamins = [
  {
    name: "Vitamin A",
    benefit: "Promotes skin cell turnover and helps maintain smooth, healthy skin",
    icon: Droplets,
  },
  {
    name: "Vitamin D",
    benefit: "Supports skin barrier function and helps with skin repair",
    icon: Shield,
  },
  {
    name: "Vitamin E",
    benefit: "Powerful antioxidant that protects skin from environmental damage",
    icon: Leaf,
  },
  {
    name: "Vitamin K",
    benefit: "Helps reduce dark circles and supports skin elasticity",
    icon: Heart,
  },
];

const faqs = [
  {
    question: "What skin types is this suitable for?",
    answer: "Our tallow moisturizer is suitable for all skin types including dry, oily, combination, and sensitive skin. The natural formula is gentle yet effective.",
  },
  {
    question: "Is this product scented?",
    answer: "No, our moisturizer is unscented. It's infused with natural herbs (rose and calendula) but contains no added fragrances or essential oils.",
  },
  {
    question: "How should I store this product?",
    answer: "Store at room temperature. Natural color and texture changes are normal due to the preservative-free formula. Use within one year of purchase.",
  },
  {
    question: "Is a patch test recommended?",
    answer: "Yes, we recommend doing a patch test before first use, especially if you have sensitive skin or known allergies.",
  },
];

export default function Product() {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-6"
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-[#fabdbd]/20 to-[#daddd8]/30">
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={selectedImage}
                      src={productImages[selectedImage]}
                      alt="Aspetto Beauty Whipped Tallow Cream"
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  {productImages.map((img, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedImage(i)}
                      className={`aspect-square rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ${
                        selectedImage === i 
                          ? 'ring-2 ring-offset-2' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{ ['--tw-ring-color' as string]: '#08535d' }}
                      data-testid={`thumbnail-${i}`}
                    >
                      <img 
                        src={img}
                        alt={`Product view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:sticky lg:top-24 lg:self-start"
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  <Badge style={{ backgroundColor: '#08535d' }} className="text-white">Halal Certified</Badge>
                  <Badge style={{ backgroundColor: '#248b97' }} className="text-white">USDA Organic</Badge>
                  <Badge style={{ backgroundColor: '#6ec5c6' }} className="text-white">Grass-Fed</Badge>
                </motion.div>

                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4" 
                  style={{ color: '#604114' }}
                >
                  Whipped Tallow Cream
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed"
                >
                  A pure, preservative-free remedy crafted from grass-fed tallow and organic botanicals. 
                  Deeply hydrates and soothes skin naturally. Net wt 1.7 oz.
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="mb-8"
                >
                  <h3 className="font-semibold mb-3" style={{ color: '#604114' }}>Key Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {productFeatures.map((feature, index) => (
                      <motion.li 
                        key={index} 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#248b97' }} />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="w-full rounded-full py-7 text-lg font-semibold shadow-lg mb-4"
                    style={{ backgroundColor: '#08535d' }}
                    data-testid="button-product-shop"
                  >
                    <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Buy Now on Amazon
                    </a>
                  </Button>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
                >
                  <Info className="w-4 h-4" />
                  <span>Free shipping on qualifying orders</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ backgroundColor: '#daddd8' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12" 
              style={{ color: '#604114' }}
            >
              Rich in Essential Vitamins
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vitamins.map((vitamin, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center h-full" data-testid={`card-vitamin-${index}`}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: '#08535d20' }}
                    >
                      <vitamin.icon className="w-7 h-7" style={{ color: '#08535d' }} />
                    </motion.div>
                    <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#604114' }}>
                      {vitamin.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {vitamin.benefit}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12" 
              style={{ color: '#604114' }}
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} data-testid={`accordion-faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium" style={{ color: '#604114' }}>
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ backgroundColor: '#08535d' }}>
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white"
            >
              Ready to Transform Your Skincare?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg mb-8" 
              style={{ color: '#daddd8' }}
            >
              Experience the natural power of grass-fed tallow moisturizer.
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
                className="rounded-full px-10 py-7 text-lg font-semibold"
                style={{ backgroundColor: '#fabdbd', color: '#604114' }}
                data-testid="button-product-cta"
              >
                <a href="https://amazon.com" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Shop Now on Amazon
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
