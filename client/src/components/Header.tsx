import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/Original_Logo_1765655717627.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" data-testid="link-home-logo">
            <motion.img 
              src={logoImage} 
              alt="Aspetto Beauty" 
              className="h-12 md:h-14 w-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                >
                  <span
                    className={`text-base font-medium transition-colors ${
                      location === link.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                asChild
                className="hidden sm:flex rounded-full px-6"
                style={{ backgroundColor: '#08535d' }}
                data-testid="button-shop-amazon"
              >
                <a
                  href="https://amazon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Shop on Amazon
                </a>
              </Button>
            </motion.div>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden py-4 border-t border-border overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                    >
                      <span
                        className={`block py-2 px-4 rounded-md text-base font-medium transition-colors ${
                          location === link.href
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Button
                    asChild
                    className="mt-2 rounded-full"
                    style={{ backgroundColor: '#08535d' }}
                    data-testid="button-mobile-shop-amazon"
                  >
                    <a
                      href="https://amazon.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Shop on Amazon
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
