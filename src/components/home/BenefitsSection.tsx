import { TrendingDown, Leaf, Truck, Award, Droplets, Shield } from "lucide-react";

const benefits = [
  {
    icon: TrendingDown,
    title: "Significant Cost Savings",
    description: "Just 1 cent per liter compared to €0.50+ for bottled water. Save up to €15,000 annually for a medium-sized restaurant.",
    stat: "97%",
    statLabel: "Cost Reduction",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    description: "Eliminate plastic bottles completely. A single unit saves over 50,000 bottles per year from landfills and oceans.",
    stat: "50K+",
    statLabel: "Bottles Saved/Year",
    color: "text-success",
    bgColor: "bg-success/10",
  },
  {
    icon: Truck,
    title: "Zero Logistics Hassle",
    description: "No more deliveries, pallets, or storage space needed. Free up valuable space and simplify your operations.",
    stat: "100%",
    statLabel: "Logistics Eliminated",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Multi-stage filtration ensures crystal-clear water that enhances the taste of your beverages and dishes.",
    stat: "5-Stage",
    statLabel: "Filtration System",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Droplets,
    title: "Still & Sparkling",
    description: "Offer both still and perfectly carbonated sparkling water on tap, customized to your guests' preferences.",
    stat: "3",
    statLabel: "Water Types",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Shield,
    title: "Hygiene Certified",
    description: "All systems meet the highest food-grade hygiene standards with automatic cleaning cycles and UV sterilization.",
    stat: "HACCP",
    statLabel: "Certified",
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
            Why Choose AquaPure
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The Smart Choice for{" "}
            <span className="text-gradient-ocean">Modern Hospitality</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join hundreds of restaurants, hotels, and cafés who have transformed their water service 
            with significant savings and environmental benefits.
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
              <div className={`w-14 h-14 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {benefit.description}
              </p>

              {/* Stat */}
              <div className="pt-6 border-t border-border">
                <div className={`text-3xl font-display font-bold ${benefit.color}`}>
                  {benefit.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {benefit.statLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
