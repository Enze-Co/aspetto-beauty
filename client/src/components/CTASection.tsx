import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{ backgroundColor: '#08535d' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full" style={{ backgroundColor: '#6ec5c6' }} />
        <div className="absolute bottom-10 right-10 w-48 h-48 rounded-full" style={{ backgroundColor: '#fabdbd' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 rounded-full" style={{ backgroundColor: '#ed8986' }} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 md:px-8 lg:px-12 text-center">
        <div className="flex justify-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-current" style={{ color: '#fabdbd' }} />
          ))}
        </div>

        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Ready for Radiant Skin?
        </h2>

        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: '#daddd8' }}>
          Join thousands who have discovered the natural power of tallow skincare. 
          Experience the difference pure, organic ingredients can make.
        </p>

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

        <p className="mt-6 text-sm" style={{ color: '#6ec5c6' }}>
          Free shipping on qualifying orders
        </p>
      </div>
    </section>
  );
}
