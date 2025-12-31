"use client";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const footerLinks = {
  shop: [
    { label: "Our Product", href: "/product" },
    { label: "Shop on Amazon", href: "https://www.amazon.com/dp/B0FPYZ7P67", external: true },
  ],
  company: [
    { label: "About Us", href: "/about" },
  ],
  // support: [
  //   { label: "Contact Us", href: "mailto:contact@aspettobeauty.com" },
  // ],
};

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" data-testid="link-footer-logo" aria-label="Aspetto Beauty - Go to homepage">
              <Image
                width={128}
                height={128}
                src={"/logo.png"}
                alt="Aspetto Beauty"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className=" leading-relaxed">
              Natural, halal-certified skincare crafted with pure ingredients for radiant, healthy skin.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {/* <Link
                href="mailto:contact@aspettobeauty.com"
                className="flex items-center gap-2  hover:text-foreground transition-colors"
                data-testid="link-footer-email"
                aria-label="Contact Aspetto Beauty via email"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                <span>contact@aspettobeauty.com</span>
              </Link> */}
              <div className="flex items-center gap-2 " aria-label="Location">
                <MapPin className="w-4 h-4" aria-hidden="true" />
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
            <nav aria-label="Shop navigation">
              <ul className="space-y-3">
                {footerLinks.shop.map((link, index) => (
                  <li key={index}>
                    {link.external ? (
                      <Link
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline transition-all"
                        data-testid={`link-footer-shop-${index}`}
                        aria-label={`${link.label} - Opens in new tab`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link href={link.href} data-testid={`link-footer-shop-${index}`} aria-label={`Navigate to ${link.label}`}>
                        <span className="hover:underline transition-all">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <nav aria-label="Company navigation">
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} data-testid={`link-footer-company-${index}`} aria-label={`Navigate to ${link.label}`}>
                      <span className=" hover:underline transition-all">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <nav aria-label="Support navigation">
              <ul className="space-y-3">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith("mailto") ? (
                      <Link
                        href={link.href}
                        className=" hover:underline transition-all"
                        data-testid={`link-footer-support-${index}`}
                        aria-label={`${link.label} - Opens email client`}
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link href={link.href} data-testid={`link-footer-support-${index}`} aria-label={`Navigate to ${link.label}`}>
                        <span className=" hover:underline transition-all">
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
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
            <p className="text-sm ">
              © {new Date().getFullYear()} Aspetto Beauty. All rights reserved.
            </p>
            {/* <div className="flex items-center gap-6 text-sm ">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div> */}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
