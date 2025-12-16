import { Link } from "react-router-dom";
import { Droplets, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
const footerLinks = {
  products: [
    {
      name: "Fontaines Eau Gazeuse",
      href: "/products/sparkling",
    },
    {
      name: "Systèmes Eau Filtrée",
      href: "/products/filtered",
    },
    {
      name: "Tous les Produits",
      href: "/products",
    },
  ],
  company: [
    {
      name: "Notre Technologie",
      href: "/technology",
    },
    {
      name: "Témoignages",
      href: "/testimonials",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ],
  support: [
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Support Technique",
      href: "/maintenance",
    },
    {
      name: "Maintenance",
      href: "/maintenance",
    },
  ],
};
const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "#",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
  },
];
export function Footer() {
  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Idra</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Solutions premium d'eau filtrée et gazeuse pour restaurants, hôtels et cafés. Économisez, réduisez votre
              impact environnemental et ravissez vos clients.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Produits</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Idra. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
