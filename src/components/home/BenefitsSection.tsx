import { TrendingDown, Leaf, Truck, Award, Droplets, Shield } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Économies Significatives",
    description:
      "Seulement 2 centimes par litre contre +1 CHF pour l'eau en bouteille. Économisez jusqu'à 15'000 CHF par an pour un restaurant moyen.",
    stat: "98%",
    statLabel: "Réduction des Coûts",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Leaf,
    title: "Impact Environnemental",
    description:
      "Éliminez complètement les bouteilles plastiques. Une seule unité permet d'économiser plus de 3'000 bouteilles par an.",
    stat: "900K+",
    statLabel: "Bouteilles Économisées/An",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Truck,
    title: "Zéro Contrainte Logistique",
    description:
      "Plus de livraisons, de palettes ou d'espace de stockage nécessaire. Libérez de l'espace précieux et simplifiez vos opérations.",
    stat: "100%",
    statLabel: "Logistique Éliminée",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description:
      "La filtration multi-étapes garantit une eau cristalline qui sublime le goût de vos boissons et de vos plats.",
    stat: "4 Étapes",
    statLabel: "Système de Filtration",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Droplets,
    title: "Plate & Gazeuse",
    description:
      "Proposez de l'eau plate et parfaitement gazéifiée au robinet, personnalisée selon les préférences de vos clients.",
    stat: "2",
    statLabel: "Types d'Eau",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Hygiène Certifiée",
    description:
      "Tous nos systèmes répondent aux normes d'hygiène alimentaire les plus strictes grâce à notre filtration et stérilisation UV.",
    stat: "NSF",
    statLabel: "Certifié",
    color: "text-success",
    bgColor: "bg-success/10",
  },
];

export function BenefitsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Pourquoi Choisir Idra
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Le Choix Intelligent pour <span className="text-gradient-ocean">l'Hôtellerie Moderne</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Rejoignez des centaines de restaurants, hôtels et cafés qui ont transformé leur service d'eau avec des
            économies significatives et des bénéfices environnementaux.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground mb-6">{benefit.description}</p>

              {/* Stat */}
              <div className="pt-6 border-t border-border">
                <div className={`text-3xl font-display font-bold ${benefit.color}`}>{benefit.stat}</div>
                <div className="text-sm text-muted-foreground">{benefit.statLabel}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
