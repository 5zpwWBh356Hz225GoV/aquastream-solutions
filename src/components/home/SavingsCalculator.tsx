import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, TrendingDown, Leaf, ArrowRight } from "lucide-react";

export function SavingsCalculator() {
  const [coversPerDay, setCoversPerDay] = useState(100);
  const [waterPrice, setWaterPrice] = useState(0.5);
  const [glassesPerCover, setGlassesPerCover] = useState(2);

  // Calculations
  const litersPerDay = (coversPerDay * glassesPerCover * 0.25); // 250ml per glass
  const currentDailyCost = litersPerDay * waterPrice;
  const idraDailyCost = litersPerDay * 0.01; // 1 cent per liter
  const dailySavings = currentDailyCost - idraDailyCost;
  const monthlySavings = dailySavings * 30;
  const yearlySavings = dailySavings * 365;
  const bottlesSaved = Math.round((litersPerDay * 365) / 0.5); // 500ml bottles
  const co2Saved = Math.round(bottlesSaved * 0.082); // kg CO2 per bottle

  return (
    <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-water-glow rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Calculator */}
          <div className="bg-card/95 backdrop-blur-xl rounded-3xl p-8 lg:p-10 shadow-elevated">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-foreground">Simulateur d'Économies</h3>
                <p className="text-muted-foreground text-sm">Découvrez vos économies potentielles</p>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-6">
              {/* Covers per day */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Couverts par jour</span>
                  <span className="text-sm font-bold text-primary">{coversPerDay}</span>
                </label>
                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={coversPerDay}
                  onChange={(e) => setCoversPerDay(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>20</span>
                  <span>500</span>
                </div>
              </div>

              {/* Glasses per cover */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Verres d'eau par couvert</span>
                  <span className="text-sm font-bold text-primary">{glassesPerCover}</span>
                </label>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={glassesPerCover}
                  onChange={(e) => setGlassesPerCover(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>1</span>
                  <span>5</span>
                </div>
              </div>

              {/* Current bottle price */}
              <div>
                <label className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-foreground">Coût actuel par litre (bouteille)</span>
                  <span className="text-sm font-bold text-primary">{waterPrice.toFixed(2)} CHF</span>
                </label>
                <input
                  type="range"
                  min="0.3"
                  max="2"
                  step="0.1"
                  value={waterPrice}
                  onChange={(e) => setWaterPrice(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:cursor-pointer"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>0,30 CHF</span>
                  <span>2,00 CHF</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-border my-8" />

            {/* Results */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-success/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-success">
                  {Math.round(yearlySavings).toLocaleString()} CHF
                </div>
                <div className="text-sm text-muted-foreground">Économies Annuelles</div>
              </div>
              <div className="bg-primary/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-display font-bold text-primary">
                  {Math.round(monthlySavings).toLocaleString()} CHF
                </div>
                <div className="text-sm text-muted-foreground">Économies Mensuelles</div>
              </div>
            </div>
          </div>

          {/* Results & CTA */}
          <div className="text-primary-foreground">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-sm font-semibold mb-6">
              Votre Impact Potentiel
            </span>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Économisez <span className="text-water-medium">{Math.round(yearlySavings).toLocaleString()} CHF</span> Par An
            </h2>
            
            <p className="text-lg text-primary-foreground/80 mb-8">
              Selon vos données, passer à Idra vous permettrait non seulement d'économiser de l'argent mais aussi d'avoir un impact environnemental significatif.
            </p>

            {/* Impact stats */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <TrendingDown className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold">{Math.round((1 - 0.01/waterPrice) * 100)}%</div>
                  <div className="text-primary-foreground/70">Réduction des Coûts</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold">900,000</div>
                  <div className="text-primary-foreground/70">Bouteilles Économisées/An</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="cta" size="xl" className="w-full sm:w-auto">
                  Obtenir Votre Devis Personnalisé
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
