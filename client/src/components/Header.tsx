import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/product" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between gap-4 h-16 md:h-20">
          <Link href="/" data-testid="link-home-logo">
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight" style={{ color: '#08535d' }}>
              Aspetto Beauty
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
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
            ))}
          </div>

          <div className="flex items-center gap-3">
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

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
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
              ))}
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
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
