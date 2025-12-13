import { Button } from "@/components/ui/button";
import { ShoppingCart, Leaf, Heart, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center" style={{ backgroundColor: '#fabdbd' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#fabdbd]/90 via-[#fabdbd]/70 to-[#daddd8]/50" />
      
      <div className="relative max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(8, 83, 93, 0.1)' }}>
              <Leaf className="w-4 h-4" style={{ color: '#08535d' }} />
              <span className="text-sm font-medium" style={{ color: '#08535d' }}>
                100% Natural & Halal Certified
              </span>
            </div>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ color: '#604114' }}>
              Nourish Your Skin{" "}
              <span style={{ color: '#08535d' }}>Naturally</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0" style={{ color: '#604114' }}>
              Experience the ancient wisdom of grass-fed tallow, enriched with vitamins A, D, E, K 
              and organic botanicals. Pure skincare for radiant, healthy skin.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
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
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
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
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
              <div 
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: 'rgba(110, 197, 198, 0.2)' }}
              />
              <div 
                className="absolute inset-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
              >
                <div className="text-center p-8">
                  <div 
                    className="w-32 h-40 md:w-40 md:h-52 mx-auto rounded-2xl shadow-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: '#f5e6dc' }}
                  >
                    <span className="font-serif text-lg md:text-xl font-semibold" style={{ color: '#604114' }}>
                      Product Image
                    </span>
                  </div>
                  <p className="text-sm font-medium" style={{ color: '#604114' }}>
                    Tallow Moisturizer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
