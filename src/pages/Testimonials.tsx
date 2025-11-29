import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star, Quote, Building, Utensils, Coffee, Hotel } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Dubois",
    role: "Executive Chef & Owner",
    company: "Le Petit Bistro",
    location: "Paris",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    quote: "Switching to AquaPure was one of the best decisions for our restaurant. We save over €12,000 per year and our guests love the quality of both still and sparkling water. The installation was seamless and the support is excellent.",
    rating: 5,
    savings: "€12,400/year",
    type: "Restaurant",
    icon: Utensils,
  },
  {
    id: 2,
    name: "Sophie Laurent",
    role: "Hotel General Manager",
    company: "Grand Hotel Riviera",
    location: "Nice",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    quote: "Managing water logistics for a 200-room hotel was a nightmare. AquaPure eliminated the storage problem entirely. No more pallets, no more delivery schedules. Our sustainability report has never looked better.",
    rating: 5,
    savings: "€28,000/year",
    type: "Hotel",
    icon: Hotel,
  },
  {
    id: 3,
    name: "Marco Rossi",
    role: "Owner",
    company: "Café Milano",
    location: "Lyon",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "As a small café, every euro counts. The compact countertop model fits perfectly in our space and pays for itself within months. Customers appreciate that we're eco-friendly too.",
    rating: 5,
    savings: "€4,200/year",
    type: "Café",
    icon: Coffee,
  },
  {
    id: 4,
    name: "Claire Bernard",
    role: "F&B Director",
    company: "Château Events",
    location: "Bordeaux",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    quote: "For our wedding and event venue, presentation is everything. The elegant tower design impresses guests while the unlimited capacity handles even our largest events without a hitch.",
    rating: 5,
    savings: "€18,500/year",
    type: "Events",
    icon: Building,
  },
  {
    id: 5,
    name: "Antoine Mercier",
    role: "Restaurant Manager",
    company: "La Table du Chef",
    location: "Marseille",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    quote: "The water quality is exceptional. Our sommelier noticed how well it pairs with our wine selections. Guests frequently comment on the purity and refreshing taste.",
    rating: 5,
    savings: "€9,800/year",
    type: "Restaurant",
    icon: Utensils,
  },
  {
    id: 6,
    name: "Marie Dupont",
    role: "Operations Director",
    company: "Hôtel de la Plage",
    location: "Cannes",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=150&h=150&fit=crop&crop=face",
    quote: "We installed AquaPure systems in our restaurant, spa, and conference rooms. The unified approach simplified everything. One supplier, one support team, one invoice.",
    rating: 5,
    savings: "€35,000/year",
    type: "Hotel",
    icon: Hotel,
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "€2.5M+", label: "Total Savings Generated" },
  { value: "25M+", label: "Bottles Eliminated" },
  { value: "98%", label: "Client Satisfaction" },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
              Success Stories
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-6">
              What Our Clients{" "}
              <span className="text-gradient-ocean">Say About Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real stories from restaurants, hotels, and cafés across France who have 
              transformed their water service with AquaPure.
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <div className="text-sm text-primary">{testimonial.company}, {testimonial.location}</div>
                  </div>
                </div>

                {/* Savings badge */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <testimonial.icon className="w-4 h-4" />
                    {testimonial.type}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm font-semibold">
                    Saving {testimonial.savings}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section Placeholder */}
      <section className="section-padding bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              See AquaPure in Action
            </h2>
            <p className="text-muted-foreground">
              Watch how our clients have integrated AquaPure into their establishments.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 text-center border border-border">
            <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Client Video Testimonials Coming Soon
            </h3>
            <p className="text-muted-foreground">
              We're currently filming success stories at our client locations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary via-primary/95 to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Success Stories
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Be the next establishment to transform your water service and start saving.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get Your Free Quote
              <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
