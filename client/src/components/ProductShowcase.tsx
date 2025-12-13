import { Card } from "@/components/ui/card";

const productImages = [
  {
    title: "Premium Jar",
    subtitle: "Elegant glass packaging",
    placeholder: "Main Product",
  },
  {
    title: "Rich Texture",
    subtitle: "Creamy, natural consistency",
    placeholder: "Texture Close-up",
  },
  {
    title: "Natural Beauty",
    subtitle: "Pure, organic ingredients",
    placeholder: "Lifestyle Shot",
  },
];

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#604114' }}>
            Our Signature Product
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with care, our tallow moisturizer brings ancient skincare wisdom to your daily routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {productImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-showcase-${index}`}
            >
              <div 
                className="aspect-square flex items-center justify-center"
                style={{ backgroundColor: index === 0 ? '#fabdbd' : index === 1 ? '#daddd8' : '#6ec5c6' }}
              >
                <div className="text-center p-6">
                  <div 
                    className="w-24 h-32 mx-auto rounded-xl shadow-lg flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(255,255,255,0.8)' }}
                  >
                    <span className="text-sm font-medium text-center px-2" style={{ color: '#604114' }}>
                      {image.placeholder}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-1" style={{ color: '#604114' }}>
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {image.subtitle}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
