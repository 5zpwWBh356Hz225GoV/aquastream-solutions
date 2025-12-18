import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingDown, Leaf, Truck, Award, Check, BarChart3, Package, Clock, Shield } from "lucide-react";
const advantages = [{
  id: "savings",
  icon: TrendingDown,
  title: "Économies Significatives",
  subtitle: "Réduisez vos coûts d'eau jusqu'à 98%",
  color: "text-primary",
  bgColor: "bg-primary/10",
  description: "Transformez vos dépenses d'eau d'un poste de coût majeur à une ligne négligeable. À seulement 1 centime par litre, Idra offre une valeur exceptionnelle.",
  stats: [{
    value: "2 centimes",
    label: "Coût par litre"
  }, {
    value: "98%",
    label: "Économies moyennes"
  }, {
    value: "15'000 CHF",
    label: "Potentiel économies/an"
  }],
  benefits: ["Payez uniquement la consommation d'eau, pas les bouteilles et la logistique", "Coûts mensuels prévisibles avec maintenance tout inclus", "Aucun frais caché ou charges imprévues", "Installation rapide et options de mise à niveau", "ROI atteint en 1 semaine seulement"],
  comparison: {
    traditional: {
      price: "1,00 CHF",
      label: "Eau en Bouteille"
    },
    idra: {
      price: "0,02 CHF",
      label: "Idra"
    }
  }
}, {
  id: "ecology",
  icon: Leaf,
  title: "Durabilité Environnementale",
  subtitle: "Zéro plastique, impact maximum",
  color: "text-success",
  bgColor: "bg-success/10",
  description: "Ayez un impact environnemental tangible tout en renforçant vos engagements écologiques. Chaque litre servi contribue à protéger notre planète.",
  stats: [{
    value: "3000+",
    label: "Bouteilles économisées/an"
  }, {
    value: "4,1T",
    label: "CO2 évité"
  }, {
    value: "100%",
    label: "Filtres recyclables"
  }],
  benefits: ["Éliminez complètement les bouteilles et leur logistique lourde", "Réduisez l'empreinte carbone liée au transport", "Attirez les clients soucieux de l'environnement", "Qualifiez-vous pour les certifications et labels verts"],
  comparison: {
    traditional: {
      price: "3'000+",
      label: "Bouteilles/an"
    },
    idra: {
      price: "0",
      label: "Bouteilles nécessaires"
    }
  }
}, {
  id: "logistics",
  icon: Truck,
  title: "Logistique Simplifiée",
  subtitle: "Libérez espace et temps",
  color: "text-secondary",
  bgColor: "bg-secondary/10",
  description: "Dites adieu aux calendriers de livraison, aux palettes lourdes et aux casse-têtes de stockage. Idra se connecte directement à votre alimentation en eau pour une eau illimitée à la demande.",
  stats: [{
    value: "0",
    label: "Livraisons nécessaires"
  }, {
    value: "100%",
    label: "Stockage libéré"
  }, {
    value: "24/7",
    label: "Disponibilité"
  }],
  benefits: ["Plus de coordination des calendriers de livraison", "Libérez un espace de stockage précieux pour votre inventaire", "Éliminez la manutention et le port de charges lourdes", "Ne manquez jamais d'eau aux heures de pointe", "Réduisez le temps du personnel consacré à la gestion des stocks"],
  comparison: {
    traditional: {
      price: "Hebdomadaire",
      label: "Livraisons"
    },
    idra: {
      price: "Aucune",
      label: "Jamais nécessaire"
    }
  }
}, {
  id: "quality",
  icon: Award,
  title: "Qualité d'Eau Supérieure",
  subtitle: "Goûtez la différence",
  color: "text-accent",
  bgColor: "bg-accent/10",
  description: "Notre filtration avancée en 4 étapes garantit que chaque verre servi est cristallin, parfaitement pur, et sublime le goût de vos boissons et de votre cuisine.",
  stats: [{
    value: "4 Étapes",
    label: "Filtration"
  }, {
    value: "99,9%",
    label: "Pureté"
  }, {
    value: "NSF",
    label: "Certifié"
  }],
  benefits: ["Filtration multi-étapes avancée éliminant les impuretés", "Stérilisation UV assurant la sécurité microbiologique", "Qualité constante quelle que soit la source d'eau du robinet", "Équilibre minéral optimal pour un goût parfait", "Maintenance régulière maintenant les systèmes au top"],
  comparison: {
    traditional: {
      price: "Variable",
      label: "Qualité"
    },
    idra: {
      price: "Certifiée",
      label: "Excellence"
    }
  }
}];
const Advantages = () => {
  return <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Pourquoi Idra
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Les Avantages Qui Font <span className="text-gradient-ocean">La Différence</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez pourquoi des centaines de professionnels de l'hôtellerie-restauration ont choisi Idra et ne
              reviendraient jamais en arrière.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {advantages.map((advantage, index) => <div key={advantage.id} id={advantage.id} className="scroll-mt-24">
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className={`w-16 h-16 rounded-2xl ${advantage.bgColor} flex items-center justify-center mb-6`}>
                      <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                    </div>

                    <span className={`text-sm font-semibold ${advantage.color}`}>{advantage.subtitle}</span>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                      {advantage.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">{advantage.description}</p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-8">
                      {advantage.benefits.map(benefit => <li key={benefit} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 ${advantage.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>)}
                    </ul>

                    <Link to="/contact">
                      <Button variant="ocean" size="lg">
                        En Savoir Plus
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Stats Card */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-elevated border border-border">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {advantage.stats.map(stat => <div key={stat.label} className="text-center">
                            <div className={`text-3xl lg:text-4xl font-display font-bold ${advantage.color}`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                          </div>)}
                      </div>

                      {/* Comparison */}
                      <div className="border-t border-border pt-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4">Comparaison Rapide</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <span className="text-muted-foreground">{advantage.comparison.traditional.label}</span>
                            <span className="font-semibold text-foreground">
                              {advantage.comparison.traditional.price}
                            </span>
                          </div>
                          <div className={`flex items-center justify-between p-4 rounded-xl ${advantage.bgColor}`}>
                            <span className={advantage.color}>{advantage.comparison.idra.label}</span>
                            <span className={`font-bold text-lg ${advantage.color}`}>
                              {advantage.comparison.idra.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Summary Grid */}
      

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Prêt à Découvrir Ces Avantages ?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Obtenez un devis personnalisé et découvrez exactement combien vous pouvez économiser.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Demander Votre Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>;
};
export default Advantages;