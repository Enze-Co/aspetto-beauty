import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Check, Droplets, Shield, Leaf, Heart, Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
              <div className="space-y-6">
                <div 
                  className="aspect-square rounded-2xl flex items-center justify-center shadow-xl"
                  style={{ backgroundColor: '#fabdbd' }}
                >
                  <div className="text-center p-8">
                    <div 
                      className="w-48 h-64 mx-auto rounded-2xl shadow-lg flex items-center justify-center"
                      style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                    >
                      <span className="font-serif text-xl font-semibold" style={{ color: '#604114' }}>
                        Product Image
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl flex items-center justify-center cursor-pointer hover-elevate"
                      style={{ backgroundColor: i === 1 ? '#daddd8' : i === 2 ? '#6ec5c6' : '#fabdbd' }}
                      data-testid={`thumbnail-${i}`}
                    >
                      <span className="text-xs font-medium" style={{ color: '#604114' }}>
                        View {i}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge style={{ backgroundColor: '#08535d' }} className="text-white">Halal Certified</Badge>
                  <Badge style={{ backgroundColor: '#248b97' }} className="text-white">USDA Organic</Badge>
                  <Badge style={{ backgroundColor: '#6ec5c6' }} className="text-white">Grass-Fed</Badge>
                </div>

                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#604114' }}>
                  Tallow Moisturizer
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                  A pure, preservative-free remedy crafted from grass-fed tallow and organic botanicals. 
                  Deeply hydrates and soothes skin naturally.
                </p>

                <div className="mb-8">
                  <h3 className="font-semibold mb-3" style={{ color: '#604114' }}>Key Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {productFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: '#248b97' }} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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

                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Info className="w-4 h-4" />
                  <span>Free shipping on qualifying orders</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ backgroundColor: '#daddd8' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12" style={{ color: '#604114' }}>
              Rich in Essential Vitamins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vitamins.map((vitamin, index) => (
                <Card key={index} className="p-6 text-center" data-testid={`card-vitamin-${index}`}>
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{ backgroundColor: '#08535d20' }}
                  >
                    <vitamin.icon className="w-7 h-7" style={{ color: '#08535d' }} />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2" style={{ color: '#604114' }}>
                    {vitamin.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {vitamin.benefit}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 md:px-8 lg:px-12">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8 md:mb-12" style={{ color: '#604114' }}>
              Frequently Asked Questions
            </h2>
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
          </div>
        </section>

        <section className="py-12 md:py-16" style={{ backgroundColor: '#08535d' }}>
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Ready to Transform Your Skincare?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#daddd8' }}>
              Experience the natural power of grass-fed tallow moisturizer.
            </p>
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
