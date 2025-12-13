import { Badge } from "@/components/ui/badge";

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
  { label: "Grass-Fed", color: "#248b97" },
  { label: "Zabiha Halal", color: "#08535d" },
  { label: "USDA Organic", color: "#6ec5c6" },
  { label: "Preservative-Free", color: "#988266" },
];

export default function Ingredients() {
  return (
    <section className="py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#daddd8' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#604114' }}>
            Pure, Simple Ingredients
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: '#604114' }}>
            Every ingredient is carefully selected for its natural benefits. Nothing artificial, nothing harmful.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {certifications.map((cert, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-4 py-2 text-sm font-medium text-white"
              style={{ backgroundColor: cert.color }}
              data-testid={`badge-cert-${index}`}
            >
              {cert.label}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-md"
              data-testid={`card-ingredient-${index}`}
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h3 className="font-serif text-xl font-semibold" style={{ color: '#604114' }}>
                  {ingredient.name}
                </h3>
                <Badge variant="outline" className="text-xs whitespace-nowrap">
                  {ingredient.badge}
                </Badge>
              </div>
              <p className="text-muted-foreground">
                {ingredient.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-background rounded-2xl p-6 md:p-8 shadow-md">
            <h3 className="font-serif text-xl md:text-2xl font-semibold mb-4" style={{ color: '#604114' }}>
              Storage & Care
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Store at room temperature. Natural color and texture changes are normal and indicate 
              the pure, preservative-free nature of this product. Use within one year of purchase. 
              Patch test recommended before first use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
