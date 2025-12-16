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
        <div className="flex flex-col items-center text-center">
          {/* Text Content */}
          <div className="text-primary-foreground max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Solutions d'Eau Premium pour Professionnels</span>
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in"
              style={{
                animationDelay: "0.1s",
              }}
            >
              Eau Pure,
              <br />
              <span className="text-water-medium">Économies Pures</span>
            </h1>

            <p
              className="text-lg sm:text-xl text-primary-foreground/80 mb-8 mx-auto max-w-xl animate-fade-in"
              style={{
                animationDelay: "0.2s",
              }}
            >
              Transformez votre restaurant, hôtel ou café avec une eau filtrée et gazeuse premium.{" "}
              <strong className="text-primary-foreground">Seulement 2 centimes par litre,</strong> — économisez des
              milliers d'euros chaque année tout en ravissant vos clients.
            </p>

            <div
              className="flex justify-center animate-fade-in"
              style={{
                animationDelay: "0.3s",
              }}
            >
              <Link to="/contact">
                <Button variant="cta" size="xl">
                  Demander un Devis Gratuit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute -bottom-8 left-0 right-0">
        <svg viewBox="0 0 1440 80" className="w-full h-auto">
          <path
            fill="hsl(var(--background))"
            d="M0,40L48,44C96,48,192,56,288,52C384,48,480,32,576,28C672,24,768,32,864,36C960,40,1056,40,1152,36C1248,32,1344,24,1392,20L1440,16L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}
