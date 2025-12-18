import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, CheckCircle2 } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-primary via-primary/95 to-secondary rounded-3xl p-8 lg:p-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-water-glow rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-primary-foreground">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Prêt à Transformer Votre <span className="text-water-medium">Service d'Eau ?</span>
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Rejoignez des centaines de professionnels de l'hôtellerie qui ont fait le choix du changement. Obtenez
                un devis personnalisé adapté aux besoins de votre établissement.
              </p>

              {/* Benefits list */}
              <ul className="space-y-4 mb-8">
                {[
                  "Évaluation et consultation sur site gratuites",
                  "Solution personnalisée selon vos besoins spécifiques",
                  "Installation professionnelle incluse",
                  "Support technique et maintenance 24h/24 7j/7",
                ].map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-primary-foreground/90">
                    <CheckCircle2 className="w-5 h-5 text-water-medium flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button variant="cta" size="xl" className="w-full sm:w-auto">
                    Demander Votre Devis Gratuit
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Contact info */}
            <div className="bg-primary-foreground/10 backdrop-blur-xl rounded-2xl p-8 border border-primary-foreground/20">
              <h3 className="font-display text-xl font-semibold text-primary-foreground mb-6">
                Préférez-vous nous parler directement ?
              </h3>

              <div className="space-y-6">
                <a
                  href="tel:+41 3123456789"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Appelez-nous</div>
                    <div className="text-lg font-semibold text-primary-foreground">+41 1 23 45 67 89</div>
                  </div>
                </a>

                <a
                  href="mailto:contact@idra.fr"
                  className="flex items-center gap-4 p-4 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-primary-foreground/70">Écrivez-nous</div>
                    <div className="text-lg font-semibold text-primary-foreground">contact@idra.fr</div>
                  </div>
                </a>
              </div>

              <p className="text-sm text-primary-foreground/60 mt-6">Nos équipes se tiennent à votre disposition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
