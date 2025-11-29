import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Filter, 
  Droplets, 
  ShieldCheck, 
  Sparkles,
  Thermometer,
  Gauge,
  Wifi,
  Leaf
} from "lucide-react";

const filtrationStages = [
  {
    stage: 1,
    name: "Filtre à Sédiments",
    description: "Élimine les particules, la rouille et le sable de plus de 5 microns, protégeant les filtres suivants et l'équipement.",
    icon: Filter,
  },
  {
    stage: 2,
    name: "Charbon Actif",
    description: "Élimine le chlore, les composés organiques et les goûts et odeurs désagréables pour une eau pure et propre.",
    icon: Droplets,
  },
  {
    stage: 3,
    name: "Osmose Inverse",
    description: "Membrane ultra-fine filtrant les solides dissous, métaux lourds et contaminants jusqu'à 0,0001 micron.",
    icon: Sparkles,
  },
  {
    stage: 4,
    name: "Enrichissement Minéral",
    description: "Réintroduit un équilibre minéral optimal pour un goût parfait et des bienfaits pour la santé.",
    icon: Thermometer,
  },
  {
    stage: 5,
    name: "Stérilisation UV",
    description: "Détruit 99,99% des bactéries et virus par lumière ultraviolette pour une sécurité microbiologique totale.",
    icon: ShieldCheck,
  },
];

const certifications = [
  {
    name: "Certifié HACCP",
    description: "Répond aux exigences du système de gestion de la sécurité alimentaire",
    icon: ShieldCheck,
  },
  {
    name: "ISO 9001:2015",
    description: "Système de management de la qualité certifié",
    icon: Gauge,
  },
  {
    name: "NSF/ANSI 42 & 53",
    description: "Normes pour unités de traitement d'eau potable",
    icon: Droplets,
  },
  {
    name: "Marquage CE",
    description: "Conforme aux exigences européennes de santé, sécurité et environnement",
    icon: Leaf,
  },
];

const features = [
  {
    icon: Wifi,
    title: "Monitoring Intelligent",
    description: "Surveillance en temps réel via notre application : consommation d'eau, état des filtres et santé du système. Recevez des alertes avant que les problèmes ne surviennent.",
  },
  {
    icon: ShieldCheck,
    title: "Auto-Nettoyage",
    description: "Cycles de désinfection automatiques maintenant votre système hygiénique sans intervention manuelle. Programmés pendant les heures creuses.",
  },
  {
    icon: Gauge,
    title: "Optimisation Pression",
    description: "Gestion intelligente de la pression assurant des débits constants quelle que soit la demande ou la pression d'eau du bâtiment.",
  },
  {
    icon: Thermometer,
    title: "Contrôle Température",
    description: "Gestion précise de la température délivrant une eau parfaitement fraîche ou ambiante, avec modèles eau chaude optionnels.",
  },
];

const Technology = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Notre Technologie
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Filtration Avancée,{" "}
              <span className="text-gradient-ocean">Résultats Purs</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez l'excellence technique derrière chaque système Idra. 
              Cinq étapes de purification garantissent que chaque goutte répond aux plus hauts standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filtration Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Système de Filtration en 5 Étapes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque étape cible des contaminants spécifiques, assurant une purification complète 
              tout en maintenant un équilibre minéral optimal pour le goût.
            </p>
          </div>

          {/* Filtration Steps */}
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-success transform -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {filtrationStages.map((stage, index) => (
                <div
                  key={stage.stage}
                  className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-elevated transition-shadow text-center"
                >
                  {/* Stage number */}
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg font-bold mx-auto mb-4">
                    {stage.stage}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stage.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-display font-semibold text-foreground mb-2">
                    {stage.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4">
                Technologie Intelligente
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Systèmes Intelligents pour{" "}
                <span className="text-gradient-ocean">Fonctionnement Sans Effort</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nos systèmes sont conçus pour fonctionner de manière autonome, se surveillant eux-mêmes 
                et vous alertant uniquement lorsqu'une attention est nécessaire.
              </p>

              <div className="space-y-6">
                {features.map((feature) => (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* App mockup placeholder */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12 border border-border">
              <div className="bg-card rounded-2xl p-6 shadow-soft mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-semibold text-foreground">État du Système</span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">En ligne</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Durée de Vie Filtre</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-success rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-foreground">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Niveau CO2</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-primary rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-foreground">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Consommation du Jour</span>
                    <span className="text-sm font-medium text-foreground">127L</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-1">99,9%</div>
                  <div className="text-muted-foreground">Efficacité de Filtration</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-success/10 text-success text-sm font-semibold mb-4">
              Qualité Garantie
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Certifications & Normes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Chaque système Idra respecte ou dépasse les normes internationales 
              de traitement de l'eau, de sécurité et de management de la qualité.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-card rounded-2xl p-6 text-center border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <cert.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Découvrez la Différence Technologique
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Planifiez une démonstration et voyez notre technologie de filtration en action.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Réserver une Démo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
