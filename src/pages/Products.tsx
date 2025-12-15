import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Droplets, Zap, Thermometer, Gauge } from "lucide-react";
import sparklingImage from "@/assets/product-sparkling.jpg";
import undercounterImage from "@/assets/product-undercounter.jpg";

const products = [
  {
    id: "sparkling",
    name: "Idra Sparkle",
    tagline: "Parfait pour Cafés & Petits Restaurants",
    description: "Notre solution compacte de comptoir délivre une eau plate et gazeuse premium sans prendre de place précieuse. Idéale pour les établissements servant jusqu'à 300 couverts par jour.",
    image: sparklingImage,
    features: [
      "Eau plate, gazeuse et fraîche",
      "Capacité de 40 litres par heure",
      "Design compact de comptoir (40x35x50cm)",
      "Commandes tactiles",
      "Système de filtration 5 étapes",
      "Injection automatique de CO2",
      "Fonctionnement économe en énergie",
      "Remplacement facile des filtres",
    ],
    specs: {
      capacity: "40L/heure",
      dimensions: "40 x 35 x 50 cm",
      power: "220V / 300W",
      co2: "Cylindre 2kg (inclus)",
    },
    price: "89 CHF/mois",
    badge: "Le Plus Populaire",
  },
  {
    id: "filtered",
    name: "Idra Pro",
    tagline: "Idéal pour Restaurants Actifs & Petits Hôtels",
    description: "Système sous-comptoir haute capacité conçu pour les établissements avec des besoins en eau importants. Se connecte à plusieurs robinets et offre des capacités de surveillance à distance.",
    image: undercounterImage,
    features: [
      "Débit haute capacité 120L/heure",
      "Connexion multi-robinets (jusqu'à 4)",
      "Surveillance à distance via application",
      "Cycle d'auto-nettoyage automatique",
      "Système de stérilisation UV",
      "Certifié HACCP",
      "Alertes état des filtres en temps réel",
      "Construction qualité professionnelle",
    ],
    specs: {
      capacity: "120L/heure",
      dimensions: "60 x 50 x 45 cm",
      power: "220V / 500W",
      co2: "Cylindre 6kg",
    },
    price: "149 CHF/mois",
    badge: "Meilleur Rapport Qualité-Prix",
  },
];

const specIcons: { [key: string]: React.ElementType } = {
  capacity: Gauge,
  dimensions: Droplets,
  power: Zap,
  co2: Thermometer,
};

const specLabels: { [key: string]: string } = {
  capacity: "Capacité",
  dimensions: "Dimensions",
  power: "Puissance",
  co2: "CO2",
};

const Products = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Nos Produits
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Solutions d'Eau Premium pour{" "}
              <span className="text-gradient-ocean">Chaque Établissement</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Des unités compactes de comptoir aux systèmes haute capacité, trouvez la solution 
              parfaitement adaptée aux besoins spécifiques de votre restaurant, hôtel ou café.
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
                          <div className="text-xs text-muted-foreground">{specLabels[key]}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div>
                      <span className="text-sm text-muted-foreground">À partir de</span>
                      <div className="text-3xl font-display font-bold text-primary">{product.price}</div>
                    </div>
                    <Link to="/contact">
                      <Button variant="cta" size="lg">
                        Demander un Devis
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
            Vous ne savez pas quelle solution choisir ?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nos experts vous aideront à choisir le système parfait en fonction de la taille 
            de votre établissement, du volume et de vos exigences spécifiques.
          </p>
          <Link to="/contact">
            <Button variant="ocean" size="xl">
              Consultation Gratuite
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
