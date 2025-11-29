import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import restaurantScene from "@/assets/restaurant-scene.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jean-Pierre Dubois",
    role: "Executive Chef & Owner",
    company: "Le Petit Bistro, Paris",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    quote: "Switching to AquaPure was one of the best decisions for our restaurant. We save over €12,000 per year and our guests love the quality of both still and sparkling water. The installation was seamless and the support is excellent.",
    rating: 5,
    savings: "€12,400/year",
  },
  {
    id: 2,
    name: "Sophie Laurent",
    role: "Hotel General Manager",
    company: "Grand Hotel Riviera, Nice",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    quote: "Managing water logistics for a 200-room hotel was a nightmare. AquaPure eliminated the storage problem entirely. No more pallets, no more delivery schedules. Our sustainability report has never looked better.",
    rating: 5,
    savings: "€28,000/year",
  },
  {
    id: 3,
    name: "Marco Rossi",
    role: "Owner",
    company: "Café Milano, Lyon",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "As a small café, every euro counts. The compact countertop model fits perfectly in our space and pays for itself within months. Customers appreciate that we're eco-friendly too.",
    rating: 5,
    savings: "€4,200/year",
  },
  {
    id: 4,
    name: "Claire Bernard",
    role: "F&B Director",
    company: "Château Events, Bordeaux",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    quote: "For our wedding and event venue, presentation is everything. The elegant tower design impresses guests while the unlimited capacity handles even our largest events without a hitch.",
    rating: 5,
    savings: "€18,500/year",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-5">
        <img
          src={restaurantScene}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Success Stories
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="text-gradient-ocean">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover how restaurants, hotels, and cafés across France have transformed 
            their operations with AquaPure.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 shadow-elevated border border-border relative">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Author */}
              <div className="flex-shrink-0">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-20 h-20 rounded-2xl object-cover shadow-soft"
                />
              </div>

              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl lg:text-2xl text-foreground font-medium leading-relaxed mb-6">
                  "{current.quote}"
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="font-display font-semibold text-lg text-foreground">
                      {current.name}
                    </div>
                    <div className="text-muted-foreground">
                      {current.role}
                    </div>
                    <div className="text-primary text-sm font-medium">
                      {current.company}
                    </div>
                  </div>
                  
                  {/* Savings badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-success/10 text-success font-semibold">
                    <span>Saving</span>
                    <span className="text-lg">{current.savings}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-8 border-t border-border">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted hover:bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            { value: "500+", label: "Happy Clients" },
            { value: "€2.5M+", label: "Total Savings Generated" },
            { value: "25M+", label: "Bottles Eliminated" },
            { value: "98%", label: "Client Satisfaction" },
          ].map((stat) => (
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
  );
}
