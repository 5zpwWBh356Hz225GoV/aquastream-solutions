import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Kaufmann",
    role: "Chef Exécutif & Propriétaire",
    company: "Neuchâtel",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    quote:
      "Passer à Idra a été l'une des meilleures décisions pour notre restaurant. Nous économisons plus de 12 000 CHF par an et nos clients adorent la qualité de l'eau plate et gazeuse. L'installation a été parfaite et le support est excellent.",
    rating: 5,
    savings: "12'400 CHF/an",
  },
  {
    id: 2,
    name: "Sophie Laurent",
    role: "Directrice Générale",
    company: "Genève",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    quote:
      "Gérer la logistique de l'eau pour un établissement de 200 couverts était un cauchemar. Idra a éliminé complètement le problème de stockage. Plus de palettes, plus de calendriers de livraison. Notre rapport développement durable n'a jamais été aussi bon.",
    rating: 5,
    savings: "28'000 CHF/an",
  },
  {
    id: 3,
    name: "Marco Rossi",
    role: "Propriétaire",
    company: "Lugano",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote:
      "En tant que petit café, chaque franc compte. Le modèle compact de comptoir s'intègre parfaitement dans notre espace et se rentabilise dès la première semaine. Les clients apprécient que nous soyons éco-responsables.",
    rating: 5,
    savings: "4'200 CHF/an",
  },
  {
    id: 4,
    name: "Claire Bernardino",
    role: "Directrice",
    company: "Montreux",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    quote:
      "Pour notre lieu de réception de mariages et événements, la présentation est primordiale. Le design élégant s'intègre parfaitement à notre bar tandis que la capacité illimitée gère même nos plus grands événements sans problème.",
    rating: 5,
    savings: "18'500 CHF/an",
  },
];

const stats = [
  { value: "300+", label: "Clients Satisfaits" },
  { value: "2,5M CHF+", label: "Économies Totales Générées" },
  { value: "900'000+", label: "Bouteilles Éliminées par an" },
  { value: "98%", label: "Satisfaction Client" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Témoignages Clients
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              La Confiance des{" "}
              <span className="text-gradient-ocean">Leaders du Secteur</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Découvrez comment les restaurants, hôtels et cafés à travers la Suisse ont transformé leurs opérations avec Idra.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card rounded-3xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-elevated"
              >
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>

                {/* Savings badge */}
                <div className="mt-6 flex justify-end">
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold">
                    Économie {testimonial.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Rejoignez Nos Success Stories
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Soyez le prochain établissement à transformer son service d'eau et commencez à économiser.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Obtenir Votre Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
