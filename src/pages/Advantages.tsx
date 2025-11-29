import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  TrendingDown, 
  Leaf, 
  Truck, 
  Award,
  Check,
  BarChart3,
  Package,
  Clock,
  Shield
} from "lucide-react";

const advantages = [
  {
    id: "savings",
    icon: TrendingDown,
    title: "Significant Cost Savings",
    subtitle: "Reduce water costs by up to 97%",
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Transform your water expenses from a major cost center to a negligible line item. At just 1 cent per liter, AquaPure delivers exceptional value.",
    stats: [
      { value: "1¢", label: "Cost per liter" },
      { value: "97%", label: "Average savings" },
      { value: "€15K+", label: "Annual savings potential" },
    ],
    benefits: [
      "Pay only for water consumption, not bottles and logistics",
      "Predictable monthly costs with all-inclusive maintenance",
      "No hidden fees or unexpected charges",
      "Free installation and equipment upgrade options",
      "ROI typically achieved within 3-6 months",
    ],
    comparison: {
      traditional: { price: "€0.50-2.00", label: "Bottled Water" },
      aquapure: { price: "€0.01", label: "AquaPure" },
    },
  },
  {
    id: "ecology",
    icon: Leaf,
    title: "Environmental Sustainability",
    subtitle: "Zero plastic, maximum impact",
    color: "text-success",
    bgColor: "bg-success/10",
    description: "Make a tangible environmental impact while enhancing your brand's eco-credentials. Every liter you serve helps protect our planet.",
    stats: [
      { value: "50K+", label: "Bottles saved yearly" },
      { value: "4.1T", label: "CO2 prevented" },
      { value: "100%", label: "Recyclable filters" },
    ],
    benefits: [
      "Eliminate single-use plastic bottles entirely",
      "Reduce carbon footprint from transportation",
      "Meet corporate sustainability goals and ESG requirements",
      "Appeal to environmentally conscious customers",
      "Qualify for green certifications and eco-labels",
    ],
    comparison: {
      traditional: { price: "100,000+", label: "Bottles/year" },
      aquapure: { price: "0", label: "Bottles needed" },
    },
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Simplified Logistics",
    subtitle: "Free up space and time",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    description: "Say goodbye to delivery schedules, heavy pallets, and storage headaches. AquaPure connects directly to your water supply for unlimited, on-demand water.",
    stats: [
      { value: "0", label: "Deliveries needed" },
      { value: "100%", label: "Storage freed" },
      { value: "24/7", label: "Availability" },
    ],
    benefits: [
      "No more coordinating delivery schedules",
      "Free up valuable storage space for inventory",
      "Eliminate heavy lifting and manual handling",
      "Never run out of water during peak hours",
      "Reduce staff time spent on inventory management",
    ],
    comparison: {
      traditional: { price: "Weekly", label: "Deliveries" },
      aquapure: { price: "None", label: "Ever needed" },
    },
  },
  {
    id: "quality",
    icon: Award,
    title: "Superior Water Quality",
    subtitle: "Taste the difference",
    color: "text-accent",
    bgColor: "bg-accent/10",
    description: "Our advanced 5-stage filtration ensures every glass served is crystal clear, perfectly pure, and enhances the taste of your beverages and cuisine.",
    stats: [
      { value: "5-Stage", label: "Filtration" },
      { value: "99.9%", label: "Purity" },
      { value: "HACCP", label: "Certified" },
    ],
    benefits: [
      "Advanced multi-stage filtration removes impurities",
      "UV sterilization ensures microbiological safety",
      "Consistent quality regardless of tap water source",
      "Optimal mineral balance for perfect taste",
      "Regular maintenance keeps systems performing at peak",
    ],
    comparison: {
      traditional: { price: "Variable", label: "Quality" },
      aquapure: { price: "Certified", label: "Excellence" },
    },
  },
];

const Advantages = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Why AquaPure
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              The Advantages That Make{" "}
              <span className="text-gradient-ocean">The Difference</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover why hundreds of hospitality professionals have switched to AquaPure 
              and never looked back.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {advantages.map((advantage, index) => (
              <div
                key={advantage.id}
                id={advantage.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className={`w-16 h-16 rounded-2xl ${advantage.bgColor} flex items-center justify-center mb-6`}>
                      <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                    </div>
                    
                    <span className={`text-sm font-semibold ${advantage.color}`}>
                      {advantage.subtitle}
                    </span>
                    <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-2 mb-4">
                      {advantage.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                      {advantage.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3 mb-8">
                      {advantage.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 ${advantage.color} flex-shrink-0 mt-0.5`} />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link to="/contact">
                      <Button variant="ocean" size="lg">
                        Learn More
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </Link>
                  </div>

                  {/* Stats Card */}
                  <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                    <div className="bg-card rounded-3xl p-8 lg:p-10 shadow-elevated border border-border">
                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-6 mb-8">
                        {advantage.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className={`text-3xl lg:text-4xl font-display font-bold ${advantage.color}`}>
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* Comparison */}
                      <div className="border-t border-border pt-8">
                        <h4 className="text-sm font-semibold text-foreground mb-4">Quick Comparison</h4>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-4 bg-muted rounded-xl">
                            <span className="text-muted-foreground">{advantage.comparison.traditional.label}</span>
                            <span className="font-semibold text-foreground">{advantage.comparison.traditional.price}</span>
                          </div>
                          <div className={`flex items-center justify-between p-4 rounded-xl ${advantage.bgColor}`}>
                            <span className={advantage.color}>{advantage.comparison.aquapure.label}</span>
                            <span className={`font-bold text-lg ${advantage.color}`}>{advantage.comparison.aquapure.price}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Grid */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              The Complete Package
            </h2>
            <p className="text-muted-foreground">
              Every AquaPure solution includes everything you need for success.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Package, title: "Free Installation", desc: "Professional setup at no extra cost" },
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock technical assistance" },
              { icon: Shield, title: "Full Warranty", desc: "Comprehensive coverage included" },
              { icon: BarChart3, title: "Usage Monitoring", desc: "Track consumption in real-time" },
            ].map((item) => (
              <div key={item.title} className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Experience These Advantages?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Get a personalized quote and see exactly how much you can save.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Request Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Advantages;
