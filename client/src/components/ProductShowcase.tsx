import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import productJar from "@assets/CP9_1236_1765655717627.jpg";
import productBox from "@assets/CP9_1222_1765655717626.jpg";
import productCombo from "@assets/CP9_1227_1765655717626.jpg";

const productImages = [
  {
    title: "Premium Jar",
    subtitle: "Elegant glass packaging with wooden lid",
    image: productJar,
  },
  {
    title: "Beautiful Packaging",
    subtitle: "Handmade with care and attention",
    image: productBox,
  },
  {
    title: "Complete Set",
    subtitle: "Jar and box presentation",
    image: productCombo,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function ProductShowcase() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold mb-4" style={{ color: '#604114' }}>
            Our Signature Product
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Handcrafted with care, our tallow moisturizer brings ancient skincare wisdom to your daily routine.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {productImages.map((image, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className="overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`card-showcase-${index}`}
              >
                <motion.div 
                  className="aspect-square overflow-hidden bg-gradient-to-br from-[#fabdbd]/20 to-[#daddd8]/30"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.img 
                    src={image.image}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                <div className="p-4 md:p-6">
                  <h3 className="font-serif text-lg md:text-xl font-semibold mb-1" style={{ color: '#604114' }}>
                    {image.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {image.subtitle}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
