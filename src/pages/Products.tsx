import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Droplets, Zap, Thermometer, Gauge } from "lucide-react";
import sparklingImage from "@/assets/product-sparkling.jpg";
import undercounterImage from "@/assets/product-undercounter.jpg";
import freestandingImage from "@/assets/product-freestanding.jpg";

const products = [
  {
    id: "sparkling",
    name: "AquaPure Sparkle",
    tagline: "Perfect for Cafés & Small Restaurants",
    description: "Our compact countertop solution delivers premium still and sparkling water without taking up valuable space. Ideal for establishments serving up to 150 covers daily.",
    image: sparklingImage,
    features: [
      "Still, sparkling, and chilled water",
      "40 liters per hour capacity",
      "Compact countertop design (40x35x50cm)",
      "Touch-screen controls",
      "5-stage filtration system",
      "Automatic CO2 injection",
      "Energy-efficient operation",
      "Easy filter replacement",
    ],
    specs: {
      capacity: "40L/hour",
      dimensions: "40 x 35 x 50 cm",
      power: "220V / 300W",
      co2: "2kg cylinder (included)",
    },
    price: "€89/month",
    badge: "Most Popular",
  },
  {
    id: "filtered",
    name: "AquaPure Pro",
    tagline: "Ideal for Busy Restaurants & Small Hotels",
    description: "High-capacity undercounter system designed for establishments with demanding water needs. Connects to multiple taps and offers remote monitoring capabilities.",
    image: undercounterImage,
    features: [
      "High-capacity 120L/hour output",
      "Multiple tap connections (up to 4)",
      "Remote monitoring via app",
      "Automatic self-cleaning cycle",
      "UV sterilization system",
      "HACCP certified",
      "Real-time filter status alerts",
      "Professional-grade construction",
    ],
    specs: {
      capacity: "120L/hour",
      dimensions: "60 x 50 x 45 cm",
      power: "220V / 500W",
      co2: "6kg cylinder",
    },
    price: "€149/month",
    badge: "Best Value",
  },
  {
    id: "high-capacity",
    name: "AquaPure Tower",
    tagline: "Premium Solution for Hotels & Event Venues",
    description: "Our flagship freestanding tower combines elegant design with maximum capacity. Features hot, cold, and sparkling options with dedicated staff and guest modes.",
    image: freestandingImage,
    features: [
      "Hot, cold, and sparkling water",
      "180 liters per hour capacity",
      "Premium designer finish",
      "Staff and guest operation modes",
      "Integrated cup dispenser (optional)",
      "Ambient LED lighting",
      "Silent operation (<30dB)",
      "White-glove installation service",
    ],
    specs: {
      capacity: "180L/hour",
      dimensions: "35 x 35 x 150 cm",
      power: "220V / 800W",
      co2: "10kg cylinder",
    },
    price: "€199/month",
    badge: "Premium",
  },
];

const specIcons: { [key: string]: React.ElementType } = {
  capacity: Gauge,
  dimensions: Droplets,
  power: Zap,
  co2: Thermometer,
};

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Our Products
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Premium Water Solutions for{" "}
              <span className="text-gradient-ocean">Every Establishment</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From compact countertop units to high-capacity systems, find the perfect 
              solution tailored to your restaurant, hotel, or café's specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="relative bg-gradient-to-br from-muted to-background rounded-3xl p-8 lg:p-12">
                    {product.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                        {product.badge}
                      </span>
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full max-w-md mx-auto"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <span className="text-secondary font-medium">{product.tagline}</span>
                  <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-success flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-muted rounded-2xl mb-8">
                    {Object.entries(product.specs).map(([key, value]) => {
                      const Icon = specIcons[key] || Droplets;
                      return (
                        <div key={key} className="text-center">
                          <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-sm font-semibold text-foreground">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">{key}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">Starting from</span>
                      <div className="text-3xl font-display font-bold text-primary">{product.price}</div>
                    </div>
                    <Link to="/contact">
                      <Button variant="cta" size="lg">
                        Request Quote
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">
            Not sure which solution is right for you?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our experts will help you choose the perfect system based on your 
            establishment's size, volume, and specific requirements.
          </p>
          <Link to="/contact">
            <Button variant="ocean" size="xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
