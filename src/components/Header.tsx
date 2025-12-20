"use client";
import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.header className="sticky top-0 z-50 bg-white shadow-sm" role="banner">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link 
            href="/" 
            data-testid="link-home-logo"
            aria-label="Aspetto Beauty - Go to homepage"
          >
            <motion.img 
              src={"/logo.png"} 
              alt="Aspetto Beauty" 
              className="h-12 md:h-[75px] w-auto" 
              whileHover={{ scale: 1.02 }} 
              transition={{ duration: 0.2 }}
            />
          </Link>

          <ul className="hidden md:flex items-center gap-8 list-none">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link 
                  href={link.href} 
                  data-testid={`link-nav-${link.label.toLowerCase()}`}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`block py-2 px-4 text-base font-medium transition-all border-b-2 text-primary ${
                    pathname === link.href ? "border-primary-dark" : "border-transparent hover:border-primary-dark"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <motion.div>
              <Button 
                asChild 
                className="hidden sm:flex rounded-full px-6 bg-primary-dark text-white hover:opacity-80 transition-all" 
                data-testid="button-shop-amazon"
                aria-label="Shop on Amazon - Opens in new tab"
              >
                <Link 
                  href="https://www.amazon.com/dp/B0FPYZ7P67" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
                  Shop on Amazon
                </Link>
              </Button>
            </motion.div>

            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              data-testid="button-mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">{mobileMenuOpen ? "Close menu" : "Open menu"}</span>
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav 
              id="mobile-menu"
              className="md:hidden py-4 border-t border-border overflow-hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col gap-2 list-none">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      href={link.href} 
                      onClick={() => setMobileMenuOpen(false)} 
                      data-testid={`link-mobile-nav-${link.label.toLowerCase()}`}
                      aria-current={pathname === link.href ? "page" : undefined}
                      className={`block py-2 px-4 rounded-md text-base font-medium transition-colors ${pathname === link.href ? "bg-accent text-foreground" : "text-muted-foreground"}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Button 
                    asChild 
                    className="mt-2 rounded-full bg-primary-dark text-white" 
                    data-testid="button-mobile-shop-amazon"
                    aria-label="Shop on Amazon - Opens in new tab"
                  >
                    <Link 
                      href="https://www.amazon.com/dp/B0FPYZ7P67" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label="Shop Aspetto Beauty products on Amazon - Opens in new tab"
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" aria-hidden="true" />
                      Shop on Amazon
                    </Link>
                  </Button>
                </li>
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
