import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Leaf, Heart, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Leaf,
    title: "Natural",
    description: "We believe in the power of nature. Our products contain only pure, wholesome ingredients that your skin recognizes and loves.",
    color: "#248b97",
  },
  {
    icon: Shield,
    title: "Halal",
    description: "Zabiha Halal certified. We source our tallow from ethically raised, grass-fed cattle following strict halal guidelines.",
    color: "#08535d",
  },
  {
    icon: Heart,
    title: "Organic",
    description: "USDA Organic certified ingredients. From the sweet almond oil to the rose and calendula, every botanical is organically grown.",
    color: "#f26565",
  },
];

const timeline = [
  {
    step: "1",
    title: "Ethical Sourcing",
    description: "We partner with farms that raise grass-fed cattle following zabiha halal practices, ensuring the highest quality and ethical standards.",
  },
  {
    step: "2",
    title: "Traditional Rendering",
    description: "The tallow is carefully rendered using time-honored methods that preserve its natural vitamins and beneficial fatty acids.",
  },
  {
    step: "3",
    title: "Botanical Infusion",
    description: "USDA organic sweet almond oil is infused with dried rose petals and calendula flowers, creating a soothing botanical blend.",
  },
  {
    step: "4",
    title: "Handcrafted Care",
    description: "Each batch is hand-mixed and inspected to ensure the perfect consistency and quality before reaching your hands.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 md:py-28 lg:py-32" style={{ backgroundColor: '#6ec5c6' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#6ec5c6]/90 to-[#08535d]/70" />
          <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Our Story
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-3xl mx-auto">
              Aspetto Beauty was born from a simple belief: that skincare should be pure, ethical, and effective. 
              We combine ancient wisdom with modern standards to create products that truly nourish your skin.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#604114' }}>
                Our Values
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                Every product we create is guided by three core principles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="p-8 text-center" data-testid={`card-value-${index}`}>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: `${value.color}20` }}
                  >
                    <value.icon className="w-8 h-8" style={{ color: value.color }} />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold mb-4" style={{ color: '#604114' }}>
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#daddd8' }}>
          <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#604114' }}>
                How We Make It
              </h2>
              <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#604114' }}>
                From farm to jar, every step is handled with care and intention.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {timeline.map((item, index) => (
                <div key={index} className="relative" data-testid={`timeline-step-${index}`}>
                  <div className="bg-background rounded-xl p-6 h-full">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-serif text-xl font-bold text-white"
                      style={{ backgroundColor: '#08535d' }}
                    >
                      {item.step}
                    </div>
                    <h3 className="font-serif text-xl font-semibold mb-3" style={{ color: '#604114' }}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-6" style={{ color: '#6ec5c6' }} />
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-6" style={{ color: '#604114' }}>
                Why Tallow?
              </h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6 leading-relaxed">
                  Tallow has been used for skincare for centuries. Our ancestors understood what modern science 
                  is now confirming: that tallow's fatty acid profile is remarkably similar to the oils 
                  naturally produced by human skin.
                </p>
                <p className="mb-6 leading-relaxed">
                  Unlike synthetic moisturizers that sit on top of the skin, tallow is readily absorbed 
                  and recognized by your skin cells. It delivers vitamins A, D, E, and K directly where 
                  they're needed most.
                </p>
                <p className="leading-relaxed">
                  Combined with our organic botanical infusion of rose and calendula, our moisturizer 
                  provides deep, lasting hydration while supporting your skin's natural healing processes. 
                  It's skincare the way nature intended.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20" style={{ backgroundColor: '#08535d' }}>
          <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">
              Experience the Difference
            </h2>
            <p className="text-lg mb-8" style={{ color: '#daddd8' }}>
              Join us in rediscovering the pure, natural path to radiant skin.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-7 text-lg font-semibold"
              style={{ backgroundColor: '#fabdbd', color: '#604114' }}
              data-testid="button-about-cta"
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
