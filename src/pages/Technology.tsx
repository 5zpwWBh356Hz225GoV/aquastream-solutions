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
    name: "Sediment Filter",
    description: "Removes particles, rust, and sand larger than 5 microns, protecting subsequent filters and equipment.",
    icon: Filter,
  },
  {
    stage: 2,
    name: "Activated Carbon",
    description: "Eliminates chlorine, organic compounds, and unpleasant tastes and odors for pure, clean water.",
    icon: Droplets,
  },
  {
    stage: 3,
    name: "Reverse Osmosis",
    description: "Ultra-fine membrane filters out dissolved solids, heavy metals, and contaminants to 0.0001 microns.",
    icon: Sparkles,
  },
  {
    stage: 4,
    name: "Mineral Enhancement",
    description: "Reintroduces optimal mineral balance for perfect taste and health benefits.",
    icon: Thermometer,
  },
  {
    stage: 5,
    name: "UV Sterilization",
    description: "Destroys 99.99% of bacteria and viruses with ultraviolet light for microbiological safety.",
    icon: ShieldCheck,
  },
];

const certifications = [
  {
    name: "HACCP Certified",
    description: "Meets food safety management system requirements",
    icon: ShieldCheck,
  },
  {
    name: "ISO 9001:2015",
    description: "Quality management system certified",
    icon: Gauge,
  },
  {
    name: "NSF/ANSI 42 & 53",
    description: "Drinking water treatment units standards",
    icon: Droplets,
  },
  {
    name: "CE Marked",
    description: "Compliant with EU health, safety, and environmental requirements",
    icon: Leaf,
  },
];

const features = [
  {
    icon: Wifi,
    title: "Smart Monitoring",
    description: "Real-time monitoring via our app tracks water usage, filter status, and system health. Receive alerts before issues arise.",
  },
  {
    icon: ShieldCheck,
    title: "Auto-Cleaning",
    description: "Automatic sanitization cycles keep your system hygienic without manual intervention. Scheduled during off-hours.",
  },
  {
    icon: Gauge,
    title: "Pressure Optimization",
    description: "Intelligent pressure management ensures consistent flow rates regardless of demand or building water pressure.",
  },
  {
    icon: Thermometer,
    title: "Temperature Control",
    description: "Precise temperature management delivers perfectly chilled or ambient water, with optional hot water models.",
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
              Our Technology
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Advanced Filtration,{" "}
              <span className="text-gradient-ocean">Pure Results</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover the engineering excellence behind every AquaPure system. 
              Five stages of purification ensure every drop meets the highest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filtration Process */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              5-Stage Filtration System
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each stage targets specific contaminants, ensuring comprehensive purification 
              while maintaining optimal mineral balance for taste.
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
                Smart Technology
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Intelligent Systems for{" "}
                <span className="text-gradient-ocean">Effortless Operation</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our systems are designed to operate autonomously, monitoring themselves 
                and alerting you only when attention is needed.
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
                  <span className="font-semibold text-foreground">System Status</span>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-medium">Online</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Filter Life</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-3/4 h-full bg-success rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-foreground">75%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CO2 Level</span>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="w-1/2 h-full bg-primary rounded-full" />
                    </div>
                    <span className="text-sm font-medium text-foreground">50%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Today's Usage</span>
                    <span className="text-sm font-medium text-foreground">127L</span>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft">
                <div className="text-center">
                  <div className="text-4xl font-display font-bold text-primary mb-1">99.9%</div>
                  <div className="text-muted-foreground">Filtration Efficiency</div>
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
              Quality Assured
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Certifications & Standards
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every AquaPure system meets or exceeds international standards for 
              water treatment, safety, and quality management.
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
            Experience the Technology Difference
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Schedule a demonstration and see our filtration technology in action.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Book a Demo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Technology;
