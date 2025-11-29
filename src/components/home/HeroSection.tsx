import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-secondary" />
      
      {/* Animated bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary-foreground/20 rounded-full animate-bubble"
            style={{
              left: `${15 + i * 15}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Solutions d'Eau Premium pour Professionnels</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Eau Pure,
              <br />
              <span className="text-water-medium">Économies Pures</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transformez votre restaurant, hôtel ou café avec une eau filtrée et gazeuse premium. 
              Seulement <strong className="text-primary-foreground">1 centime par litre</strong> — économisez des milliers d'euros chaque année tout en ravissant vos clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-primary-foreground/60 text-sm mb-6 uppercase tracking-wider font-medium">Ils nous font confiance</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: "Hilton", type: "Hôtels" },
                  { name: "Marriott", type: "Hôtels" },
                  { name: "Accor", type: "Hôtels" },
                  { name: "Nobu", type: "Restaurants" },
                ].map((brand) => (
                  <div
                    key={brand.name}
                    className="group bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl px-4 py-3 sm:px-5 sm:py-4 text-center hover:bg-primary-foreground/10 hover:border-primary-foreground/20 transition-all duration-300"
                  >
                    <div className="text-primary-foreground font-display font-bold text-lg sm:text-xl group-hover:scale-105 transition-transform duration-300">
                      {brand.name}
                    </div>
                    <div className="text-primary-foreground/50 text-xs mt-1">{brand.type}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="hsl(var(--background))"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
}
