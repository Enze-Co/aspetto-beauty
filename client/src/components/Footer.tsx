import { Link } from "wouter";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logoImage from "@assets/Original_Logo_1765655717627.png";

const footerLinks = {
  shop: [
    { label: "Our Product", href: "/product" },
    { label: "Shop on Amazon", href: "https://amazon.com", external: true },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Story", href: "/about" },
  ],
  support: [
    { label: "Contact Us", href: "mailto:contact@aspettobeauty.com" },
    { label: "FAQ", href: "/product" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" data-testid="link-footer-logo">
              <img 
                src={logoImage} 
                alt="Aspetto Beauty" 
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Natural, halal-certified skincare crafted with pure ingredients for radiant, healthy skin.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a 
                href="mailto:contact@aspettobeauty.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-footer-email"
              >
                <Mail className="w-4 h-4" />
                <span>contact@aspettobeauty.com</span>
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>United States</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link, index) => (
                <li key={index}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-shop-${index}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} data-testid={`link-footer-shop-${index}`}>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} data-testid={`link-footer-company-${index}`}>
                    <span className="text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  {link.href.startsWith("mailto") ? (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      data-testid={`link-footer-support-${index}`}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} data-testid={`link-footer-support-${index}`}>
                      <span className="text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-border"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Aspetto Beauty. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
