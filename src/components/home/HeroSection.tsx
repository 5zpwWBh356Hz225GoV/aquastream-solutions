import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dispenser.jpg";

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
              <span className="text-sm font-medium">Premium Water Solutions for Professionals</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Pure Water,
              <br />
              <span className="text-water-medium">Pure Savings</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Transform your restaurant, hotel, or café with premium filtered and sparkling water. 
              Just <strong className="text-primary-foreground">1 cent per liter</strong> — save thousands annually while delighting your guests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/contact">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Request a Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/advantages">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Play className="w-5 h-5" />
                  Discover Our Advantages
                </Button>
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <p className="text-primary-foreground/60 text-sm mb-4">Trusted by leading hospitality brands</p>
              <div className="flex flex-wrap gap-8 items-center">
                <div className="text-primary-foreground/40 font-display font-bold text-xl">Hilton</div>
                <div className="text-primary-foreground/40 font-display font-bold text-xl">Marriott</div>
                <div className="text-primary-foreground/40 font-display font-bold text-xl">Accor</div>
                <div className="text-primary-foreground/40 font-display font-bold text-xl">Nobu</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-water-glow/30 blur-3xl rounded-full scale-75" />
              
              {/* Product image */}
              <img
                src={heroImage}
                alt="Premium AquaPure water dispenser for restaurants"
                className="relative z-10 w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              />
              
              {/* Stats card */}
              <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-xl rounded-2xl p-6 shadow-elevated animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="text-4xl font-display font-bold text-primary mb-1">1¢</div>
                <div className="text-muted-foreground text-sm">per liter</div>
              </div>

              {/* Eco badge */}
              <div className="absolute -top-4 -right-4 bg-success/90 backdrop-blur-xl rounded-2xl px-4 py-3 shadow-elevated animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <div className="text-success-foreground font-semibold">Eco-Friendly</div>
                <div className="text-success-foreground/80 text-sm">Zero plastic bottles</div>
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
