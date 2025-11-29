import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import sparklingImage from "@/assets/product-sparkling.jpg";
import undercounterImage from "@/assets/product-undercounter.jpg";
import freestandingImage from "@/assets/product-freestanding.jpg";

const products = [
  {
    id: "sparkling",
    name: "AquaPure Sparkle",
    tagline: "Countertop Excellence",
    description: "Compact countertop unit perfect for cafés and small restaurants. Delivers still, sparkling, and chilled water.",
    image: sparklingImage,
    features: ["Still & Sparkling", "40L/hour capacity", "Compact design", "Touch controls"],
    price: "From €89/month",
    badge: "Most Popular",
    href: "/products/sparkling",
  },
  {
    id: "undercounter",
    name: "AquaPure Pro",
    tagline: "Undercounter Power",
    description: "High-capacity undercounter system for busy restaurants and hotels. Maximum output with minimal footprint.",
    image: undercounterImage,
    features: ["120L/hour capacity", "Multiple taps", "Remote monitoring", "Auto-cleaning"],
    price: "From €149/month",
    badge: "Best Value",
    href: "/products/filtered",
  },
  {
    id: "freestanding",
    name: "AquaPure Tower",
    tagline: "Elegant Statement",
    description: "Freestanding tower design for high-end establishments. Makes a visual statement while delivering premium water.",
    image: freestandingImage,
    features: ["Hot, cold & sparkling", "Designer finish", "180L/hour capacity", "Staff & guest modes"],
    price: "From €199/month",
    badge: "Premium",
    href: "/products/high-capacity",
  },
];

export function ProductsPreview() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Solutions for Every{" "}
            <span className="text-gradient-ocean">Establishment</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From intimate cafés to large hotel chains, we have the perfect water dispensing solution 
            tailored to your needs and budget.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group bg-card rounded-3xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-elevated"
            >
              {/* Image */}
              <div className="relative h-72 bg-gradient-to-br from-muted to-background overflow-hidden">
                {product.badge && (
                  <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    {product.badge}
                  </span>
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <span className="text-secondary text-sm font-medium">{product.tagline}</span>
                <h3 className="font-display text-2xl font-bold text-foreground mt-1 mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <span className="text-lg font-display font-bold text-foreground">{product.price}</span>
                  </div>
                  <Link to={product.href}>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="ocean" size="lg">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
